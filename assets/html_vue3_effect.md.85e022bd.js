import{_ as s,c as n,o as a,a as p}from"./app.e952ad38.js";const f=JSON.parse('{"title":"Vue\u4E2D\u7684effect\u65B9\u6CD5","description":"","frontmatter":{},"headers":[],"relativePath":"html/vue3/effect.md","lastUpdated":1659942184000}'),e={name:"html/vue3/effect.md"},l=p(`<h1 id="vue\u4E2D\u7684effect\u65B9\u6CD5" tabindex="-1">Vue\u4E2D\u7684effect\u65B9\u6CD5 <a class="header-anchor" href="#vue\u4E2D\u7684effect\u65B9\u6CD5" aria-hidden="true">#</a></h1><ul><li>src\u4E0B\u65B0\u589Eeffect.ts</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export let activeEffect = undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ReactiveEffect{</span></span>
<span class="line"><span style="color:#A6ACCD;">    public active = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    public parent = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    public deps = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(public fn){}</span></span>
<span class="line"><span style="color:#A6ACCD;">    run(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(!this.active){</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        try {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.parent = activeEffect</span></span>
<span class="line"><span style="color:#A6ACCD;">            activeEffect = this</span></span>
<span class="line"><span style="color:#A6ACCD;">            return this.fn()</span></span>
<span class="line"><span style="color:#A6ACCD;">        } finally {</span></span>
<span class="line"><span style="color:#A6ACCD;">            activeEffect = this.parent</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function effect(fn){</span></span>
<span class="line"><span style="color:#A6ACCD;">  let _effect =  new ReactiveEffect(fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">  _effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const targetMap = new WeakMap()</span></span>
<span class="line"><span style="color:#A6ACCD;">export function track(target, type, key){</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!activeEffect) return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let depsMap = targetMap.get(target)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!depsMap){</span></span>
<span class="line"><span style="color:#A6ACCD;">        targetMap.set(target,(depsMap = new Map()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let dep = depsMap.get(key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!dep){</span></span>
<span class="line"><span style="color:#A6ACCD;">        depsMap.set(key,(dep = new Set()))</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let shouldTrack = !dep.has(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(shouldTrack){</span></span>
<span class="line"><span style="color:#A6ACCD;">        dep.add(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeEffect.deps.push(dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function trigger(target,type,key,value,oldValue){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const depsMap = targetMap.get(target)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!depsMap) return</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const effects = depsMap.get(key)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    effects &amp;&amp; effects.forEach(effect =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(effect !== activeEffect){</span></span>
<span class="line"><span style="color:#A6ACCD;">            effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    });</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>baseHandler.ts</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { track, trigger } from &quot;./effect&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { isObject } from &quot;@vue/shared&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { reactive } from &quot;./reactive&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const enum ReactiveFlags {</span></span>
<span class="line"><span style="color:#A6ACCD;">    IS_REACTIVE = &#39;_v_isReactive&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export const mutableHandlers =   {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get(target,key,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (key === ReactiveFlags.IS_REACTIVE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        track(target,&#39;get&#39;,key)</span></span>
<span class="line"><span style="color:#A6ACCD;">        let res = Reflect.get(target, key, receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isObject(res)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return reactive(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return res</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set(target,key,value,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">        let oldValue = target[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">        let result = Reflect.set(target, key, value, receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(oldValue !== value){</span></span>
<span class="line"><span style="color:#A6ACCD;">            trigger(target,&#39;set&#39;,key,value,oldValue)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return result</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),c=[l];function t(o,r,A,C,i,y){return a(),n("div",null,c)}var u=s(e,[["render",t]]);export{f as __pageData,u as default};
