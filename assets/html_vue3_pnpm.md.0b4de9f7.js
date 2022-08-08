import{_ as s,c as n,o as a,a as l}from"./app.e952ad38.js";const D=JSON.parse('{"title":"vue3\u7684\u54CD\u5E94\u5F0F\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u642D\u5EFA\u9879\u76EE","slug":"\u642D\u5EFA\u9879\u76EE"},{"level":2,"title":"\u62CD\u5E73\u4F9D\u8D56\u5305","slug":"\u62CD\u5E73\u4F9D\u8D56\u5305"},{"level":2,"title":"\u7528\u6765\u642D\u5EFAmonorepo\u7BA1\u7406\u9879\u76EE","slug":"\u7528\u6765\u642D\u5EFAmonorepo\u7BA1\u7406\u9879\u76EE"},{"level":2,"title":"ts \u914D\u7F6E","slug":"ts-\u914D\u7F6E"},{"level":2,"title":"\u6DFB\u52A0\u811A\u672C\u547D\u4EE4","slug":"\u6DFB\u52A0\u811A\u672C\u547D\u4EE4"},{"level":2,"title":"\u811A\u672C\u7F16\u8BD1","slug":"\u811A\u672C\u7F16\u8BD1"},{"level":2,"title":"Vue\u7684\u8BA1\u7B97\u5C5E\u6027","slug":"vue\u7684\u8BA1\u7B97\u5C5E\u6027"}],"relativePath":"html/vue3/pnpm.md","lastUpdated":1659942184000}'),p={name:"html/vue3/pnpm.md"},e=l(`<h1 id="vue3\u7684\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1">vue3\u7684\u54CD\u5E94\u5F0F\u539F\u7406 <a class="header-anchor" href="#vue3\u7684\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a></h1><h2 id="\u642D\u5EFA\u9879\u76EE" tabindex="-1">\u642D\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u642D\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h2><ul><li>npm i pnpm@6 -g</li><li>pnpm init</li><li>pnpm install esbuild minimist typescript -S</li></ul><h2 id="\u62CD\u5E73\u4F9D\u8D56\u5305" tabindex="-1">\u62CD\u5E73\u4F9D\u8D56\u5305 <a class="header-anchor" href="#\u62CD\u5E73\u4F9D\u8D56\u5305" aria-hidden="true">#</a></h2><ul><li>\u65B0\u5EFA.npmrc</li><li>shamefully-hoist = true</li><li>\u4E4B\u540E\u5173\u95ED\u9879\u76EE\u91CD\u65B0\u6253\u5F00\uFF0C\u5426\u5219\u53EF\u80FD\u4E0D\u751F\u6548</li></ul><h2 id="\u7528\u6765\u642D\u5EFAmonorepo\u7BA1\u7406\u9879\u76EE" tabindex="-1">\u7528\u6765\u642D\u5EFAmonorepo\u7BA1\u7406\u9879\u76EE <a class="header-anchor" href="#\u7528\u6765\u642D\u5EFAmonorepo\u7BA1\u7406\u9879\u76EE" aria-hidden="true">#</a></h2><ul><li>\u65B0\u5EFApnpm-workspace.yaml</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">packages:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - &#39;packages/*&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="ts-\u914D\u7F6E" tabindex="-1">ts \u914D\u7F6E <a class="header-anchor" href="#ts-\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u65B0\u5EFAtsconfig.json</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;outDir&quot;: &quot;dist&quot;, //\u8F93\u51FA\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;sourceMap&quot;: true, //\u91C7\u7528sourceMap</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;target&quot;: &quot;es2016&quot;, //\u76EE\u6807\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;module&quot;: &quot;esnext&quot;, //\u6A21\u5757\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;moduleResolution&quot;: &quot;node&quot;, //\u6A21\u5757\u89E3\u6790\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;strict&quot;: false, //\u4E25\u683C\u6A21\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;resolveJsonModule&quot;: true, //\u89E3\u6790JSON\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;esModuleInterop&quot;: true, //\u5141\u8BB8es6\u8BED\u6CD5\u5F15\u5165commonjs\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;jsx&quot;: &quot;preserve&quot;, //js\u4E0D\u8F6C\u8BD1</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;], //\u652F\u6301\u7684\u7C7B\u5E93esnext\u53CAdom</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;@vue/*&quot;: [&quot;packages/*/src&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6DFB\u52A0\u811A\u672C\u547D\u4EE4" tabindex="-1">\u6DFB\u52A0\u811A\u672C\u547D\u4EE4 <a class="header-anchor" href="#\u6DFB\u52A0\u811A\u672C\u547D\u4EE4" aria-hidden="true">#</a></h2><ul><li>package.json</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;dev&quot;: &quot;node scripts/dev.js reactivity -f global&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u811A\u672C\u7F16\u8BD1" tabindex="-1">\u811A\u672C\u7F16\u8BD1 <a class="header-anchor" href="#\u811A\u672C\u7F16\u8BD1" aria-hidden="true">#</a></h2><ul><li>\u65B0\u5EFAsrcipts\u6587\u4EF6</li><li>\u65B0\u5EFAdev.js</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const args = require(&quot;minimist&quot;)(process.argv.slice(2)) // node scripts/dev.js reactivity -f global</span></span>
<span class="line"><span style="color:#A6ACCD;">const { build } = require(&quot;esbuild&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// console.log(args)</span></span>
<span class="line"><span style="color:#A6ACCD;">const { resolve } = require(&#39;path&#39;);// node \u5185\u7F6E\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const target = args._[0] || &quot;reactivity&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const format = args.f || &#39;global&#39;;// \u6253\u5305\u7684\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const pkg = require(resolve(__dirname, \`../packages/\${target}/package.json\`));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// iife \u7ACB\u5373\u6267\u884C\u51FD\u6570 (function(){})();</span></span>
<span class="line"><span style="color:#A6ACCD;">// cjs node\u4E2D\u7684\u6A21\u5757 module.exports</span></span>
<span class="line"><span style="color:#A6ACCD;">// esm \u6D4F\u89C8\u5668\u4E2D\u7684esModule\u6A21\u5757 import</span></span>
<span class="line"><span style="color:#A6ACCD;">const outputFormat = format.startsWith(&quot;global&quot;) ? &#39;iife&#39; : format == &quot;cjs&quot; ? &quot;cjs&quot; : &quot;esm&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//\u6253\u5305\u4E4B\u540E\u6587\u4EF6\u5B58\u653E\u5730\u65B9</span></span>
<span class="line"><span style="color:#A6ACCD;">const outFile = resolve(__dirname, \`../packages/\${target}/dist/\${target}.\${format}.js\`)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//esbuild</span></span>
<span class="line"><span style="color:#A6ACCD;">//\u5929\u751F\u5C31\u652F\u6301ts </span></span>
<span class="line"><span style="color:#A6ACCD;">build({</span></span>
<span class="line"><span style="color:#A6ACCD;">  entryPoints: [resolve(__dirname, \`../packages/\${target}/src/index.ts\`)],</span></span>
<span class="line"><span style="color:#A6ACCD;">  outfile: outFile, //\u8F93\u51FA\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  bundle: true, //\u628A\u6240\u6709\u5305\u5168\u90E8\u6253\u5305\u5230\u4E00\u8D77</span></span>
<span class="line"><span style="color:#A6ACCD;">  sourcemap: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">  format: outputFormat, //\u8F93\u51FA\u683C\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">  globalName: pkg.buildOptions?.name, //\u6253\u5305\u5168\u5C40\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">  platform: format === &quot;cjs&quot; ? &quot;node&quot; : &quot;browser&quot;,//\u9879\u76EE\u8FD0\u884C\u7684\u5E73\u53F0</span></span>
<span class="line"><span style="color:#A6ACCD;">  watch: { //\u76D1\u542C\u6587\u4EF6\u53D8\u5316</span></span>
<span class="line"><span style="color:#A6ACCD;">    onRebuild (error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      if (!error) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(&quot;rebuild~~~&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(\`watch~~~~\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vue\u7684\u8BA1\u7B97\u5C5E\u6027" tabindex="-1">Vue\u7684\u8BA1\u7B97\u5C5E\u6027 <a class="header-anchor" href="#vue\u7684\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a></h2><ul><li>\u65B0\u5EFAhtml\u6587\u4EF6</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const {effect,reactive, computed} = VueReactivity</span></span>
<span class="line"><span style="color:#A6ACCD;">const state = reactive({</span></span>
<span class="line"><span style="color:#A6ACCD;">    fastname:&#39;xiao&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    lastname:&#39;shunshi&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const fullName = computed(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(&#39;render&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return state.fastname+ state.lastname</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	document.getElementById(&#39;app&#39;).innerHTML = fullName.value</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">// const fullName = computed({</span></span>
<span class="line"><span style="color:#A6ACCD;">//     get(){</span></span>
<span class="line"><span style="color:#A6ACCD;">//         return state.fastname+ state.lastname</span></span>
<span class="line"><span style="color:#A6ACCD;">//     },</span></span>
<span class="line"><span style="color:#A6ACCD;">//     set(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">// })</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">	state.fastname = &#39;\u5B8B&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">},1000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u65B0\u5EFAcomputed.ts,\u5728index.ts\u4E2D\u5BFC\u51FA\u65B9\u6CD5</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isFunction } from &quot;@vue/shared&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ReactiveEffect,trackEffects,triggerEffects} from &quot;./effect&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function computed(getterOrOptions){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let onlyGetter = isFunction(getterOrOptions)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let getter</span></span>
<span class="line"><span style="color:#A6ACCD;">    let setter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (onlyGetter) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        getter = getterOrOptions</span></span>
<span class="line"><span style="color:#A6ACCD;">        setter = () =&gt; { console.warn(&#39;no set&#39;) }</span></span>
<span class="line"><span style="color:#A6ACCD;">    } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        getter = getterOrOptions.get</span></span>
<span class="line"><span style="color:#A6ACCD;">        setter = getterOrOptions.set</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return new ComputedRefImpl(getter, setter)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ComputedRefImpl{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    public _dirty = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    public __v_isReadonly = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    public __v_isRef = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    public _value</span></span>
<span class="line"><span style="color:#A6ACCD;">    public dep = new Set</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(public getter,public setter){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.effect =  new ReactiveEffect(getter,()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            if(!this._dirty){</span></span>
<span class="line"><span style="color:#A6ACCD;">                this._dirty = true</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            triggerEffects(this.dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    get value(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        trackEffects(this.dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (this._dirty) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this._dirty = false</span></span>
<span class="line"><span style="color:#A6ACCD;">            this._value = this.effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return this._value</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    set value(newValue){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.setter(newValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>effect.ts\u5BFC\u51FA\u4E24\u4E2A\u65B9\u6CD5</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export let activeEffect = undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export  class ReactiveEffect {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public active = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    public parent = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    public deps = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(public fn,public scheduler) { }</span></span>
<span class="line"><span style="color:#A6ACCD;">    run() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (!this.active) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.parent = activeEffect</span></span>
<span class="line"><span style="color:#A6ACCD;">            activeEffect = this</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            cleanupEffect(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">        } finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">            activeEffect = this.parent</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    stop(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(this.active){</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.active = false</span></span>
<span class="line"><span style="color:#A6ACCD;">            cleanupEffect(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function cleanupEffect(effect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { deps } = effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i &lt; deps.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        deps[i].delete(effect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    effect.deps.length = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function effect(fn, options: any = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _effect = new ReactiveEffect(fn,options.scheduler)</span></span>
<span class="line"><span style="color:#A6ACCD;">    _effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const runner = _effect.run.bind(_effect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    runner.effect = _effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    return runner</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const targetMap = new WeakMap()</span></span>
<span class="line"><span style="color:#A6ACCD;">export function track(target, type, key) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!activeEffect) return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let depsMap = targetMap.get(target)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!depsMap) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        targetMap.set(target, (depsMap = new Map()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let dep = depsMap.get(key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!dep) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        depsMap.set(key, (dep = new Set()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // let shouldTrack = !dep.has(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // if (shouldTrack) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     dep.add(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     activeEffect.deps.push(dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // }</span></span>
<span class="line"><span style="color:#A6ACCD;">    trackEffects(dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export function trackEffects(dep){</span></span>
<span class="line"><span style="color:#A6ACCD;">    let shouldTrack = !dep.has(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (shouldTrack) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dep.add(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeEffect.deps.push(dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export function trigger(target, type, key, value, oldValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const depsMap = targetMap.get(target)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!depsMap) return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let effects = depsMap.get(key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // effects &amp;&amp; effects.forEach(effect =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     if(effect !== activeEffect){</span></span>
<span class="line"><span style="color:#A6ACCD;">    //         effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">    //     }</span></span>
<span class="line"><span style="color:#A6ACCD;">    // });</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (effects) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // effects = new Set(effects)</span></span>
<span class="line"><span style="color:#A6ACCD;">        // effects.forEach(effect =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //     if (effect !== activeEffect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //         if (effect.scheduler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //             effect.scheduler()</span></span>
<span class="line"><span style="color:#A6ACCD;">        //         } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        //             effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">        //         }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //     }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // });</span></span>
<span class="line"><span style="color:#A6ACCD;">        triggerEffects(effects)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function triggerEffects(effects){</span></span>
<span class="line"><span style="color:#A6ACCD;">    effects = new Set(effects)</span></span>
<span class="line"><span style="color:#A6ACCD;">    effects.forEach(effect =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (effect !== activeEffect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (effect.scheduler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                effect.scheduler()</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,24),t=[e];function o(c,r,i,C,A,y){return a(),n("div",null,t)}var f=s(p,[["render",o]]);export{D as __pageData,f as default};
