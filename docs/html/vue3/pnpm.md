# vue3的响应式原理

## 搭建项目

- npm i pnpm@6 -g
- pnpm init
- pnpm install esbuild minimist typescript -S

## 拍平依赖包

- 新建.npmrc
- shamefully-hoist = true
- 之后关闭项目重新打开，否则可能不生效

## 用来搭建monorepo管理项目 

- 新建pnpm-workspace.yaml

```
packages:
  - 'packages/*'
```

## ts 配置

- 新建tsconfig.json

```
{
  "compilerOptions": {
    "outDir": "dist", //输出目录
    "sourceMap": true, //采用sourceMap
    "target": "es2016", //目标语法
    "module": "esnext", //模块格式
    "moduleResolution": "node", //模块解析方式
    "strict": false, //严格模式
    "resolveJsonModule": true, //解析JSON模块
    "esModuleInterop": true, //允许es6语法引入commonjs模块
    "jsx": "preserve", //js不转译
    "lib": ["esnext", "dom"], //支持的类库esnext及dom
    "baseUrl": ".",
    "paths": {
      "@vue/*": ["packages/*/src"]
    }
  }
}
```
## 添加脚本命令

- package.json

```
"dev": "node scripts/dev.js reactivity -f global"
```
## 脚本编译

- 新建srcipts文件
- 新建dev.js

```
const args = require("minimist")(process.argv.slice(2)) // node scripts/dev.js reactivity -f global
const { build } = require("esbuild");
// console.log(args)
const { resolve } = require('path');// node 内置模块

const target = args._[0] || "reactivity";
const format = args.f || 'global';// 打包的格式

const pkg = require(resolve(__dirname, `../packages/${target}/package.json`));

// iife 立即执行函数 (function(){})();
// cjs node中的模块 module.exports
// esm 浏览器中的esModule模块 import
const outputFormat = format.startsWith("global") ? 'iife' : format == "cjs" ? "cjs" : "esm";

//打包之后文件存放地方
const outFile = resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`)


//esbuild
//天生就支持ts 
build({
  entryPoints: [resolve(__dirname, `../packages/${target}/src/index.ts`)],
  outfile: outFile, //输出的文件
  bundle: true, //把所有包全部打包到一起
  sourcemap: true,
  format: outputFormat, //输出格式
  globalName: pkg.buildOptions?.name, //打包全局名
  platform: format === "cjs" ? "node" : "browser",//项目运行的平台
  watch: { //监听文件变化
    onRebuild (error) {
      if (!error) {
        console.log("rebuild~~~")
      }
    }
  }
}).then(() => {
  console.log(`watch~~~~`)
})

```











## Vue的计算属性

- 新建html文件

```
const {effect,reactive, computed} = VueReactivity
const state = reactive({
    fastname:'xiao',
    lastname:'shunshi'
})

const fullName = computed(()=>{
    console.log('render')
    return state.fastname+ state.lastname
})
effect(()=>{
	document.getElementById('app').innerHTML = fullName.value
})
// const fullName = computed({
//     get(){
//         return state.fastname+ state.lastname
//     },
//     set(){}
// })
setTimeout(()=>{
	state.fastname = '宋'
},1000)
```

- 新建computed.ts,在index.ts中导出方法

```
import { isFunction } from "@vue/shared";
import { ReactiveEffect,trackEffects,triggerEffects} from "./effect";

export function computed(getterOrOptions){
    let onlyGetter = isFunction(getterOrOptions)

    let getter
    let setter

    if (onlyGetter) {
        getter = getterOrOptions
        setter = () => { console.warn('no set') }
    } else {
        getter = getterOrOptions.get
        setter = getterOrOptions.set
    }

    return new ComputedRefImpl(getter, setter)
}

class ComputedRefImpl{
    public effect
    public _dirty = true
    public __v_isReadonly = true
    public __v_isRef = true
    public _value
    public dep = new Set
    constructor(public getter,public setter){
        this.effect =  new ReactiveEffect(getter,()=>{
            if(!this._dirty){
                this._dirty = true
            }
            triggerEffects(this.dep)
        })
    }
    get value(){
        trackEffects(this.dep)
        if (this._dirty) {
            this._dirty = false
            this._value = this.effect.run()
        }
        return this._value
    }
    set value(newValue){
        this.setter(newValue)
    }
}
```

- effect.ts导出两个方法

```
export let activeEffect = undefined

export  class ReactiveEffect {
    public active = true
    public parent = null
    public deps = []
    constructor(public fn,public scheduler) { }
    run() {
        if (!this.active) {
            this.fn()
        }
        try {
            this.parent = activeEffect
            activeEffect = this

            cleanupEffect(this)
            return this.fn()
        } finally {
            activeEffect = this.parent
        }
    }
    stop(){
        if(this.active){
            this.active = false
            cleanupEffect(this)
        }
    }
}

function cleanupEffect(effect) {
    const { deps } = effect
    for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect)
    }
    effect.deps.length = 0
}

export function effect(fn, options: any = {}) {
    let _effect = new ReactiveEffect(fn,options.scheduler)
    _effect.run()
    const runner = _effect.run.bind(_effect)
    runner.effect = _effect
    return runner
}


const targetMap = new WeakMap()
export function track(target, type, key) {
    if (!activeEffect) return

    let depsMap = targetMap.get(target)

    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map()))
    }

    let dep = depsMap.get(key)

    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }

    // let shouldTrack = !dep.has(activeEffect)

    // if (shouldTrack) {
    //     dep.add(activeEffect)
    //     activeEffect.deps.push(dep)
    // }
    trackEffects(dep)
}
export function trackEffects(dep){
    let shouldTrack = !dep.has(activeEffect)
    if (shouldTrack) {
        dep.add(activeEffect)
        activeEffect.deps.push(dep)
    }
}
export function trigger(target, type, key, value, oldValue) {

    const depsMap = targetMap.get(target)

    if (!depsMap) return

    let effects = depsMap.get(key)

    // effects && effects.forEach(effect => {
    //     if(effect !== activeEffect){
    //         effect.run()
    //     }
    // });

    if (effects) {
        // effects = new Set(effects)
        // effects.forEach(effect => {
        //     if (effect !== activeEffect) {
        //         if (effect.scheduler) {
        //             effect.scheduler()
        //         } else {
        //             effect.run()
        //         }
        //     }
        // });
        triggerEffects(effects)
    }
}


export function triggerEffects(effects){
    effects = new Set(effects)
    effects.forEach(effect => {
        if (effect !== activeEffect) {
            if (effect.scheduler) {
                effect.scheduler()
            } else {
                effect.run()
            }
        }
    });
}

```