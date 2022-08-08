import{_ as s,c as n,o as a,a as p}from"./app.e952ad38.js";const D=JSON.parse('{"title":"Vue\u7684\u8BA1\u7B97\u5C5E\u6027","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B0\u5EFAhtml\u6587\u4EF6","slug":"\u65B0\u5EFAhtml\u6587\u4EF6"},{"level":2,"title":"\u65B0\u5EFAcomputed.ts,\u5728index.ts\u4E2D\u5BFC\u51FA\u65B9\u6CD5","slug":"\u65B0\u5EFAcomputed-ts-\u5728index-ts\u4E2D\u5BFC\u51FA\u65B9\u6CD5"},{"level":2,"title":"effect.ts\u5BFC\u51FA\u4E24\u4E2A\u65B9\u6CD5","slug":"effect-ts\u5BFC\u51FA\u4E24\u4E2A\u65B9\u6CD5"}],"relativePath":"html/vue3/computed.md","lastUpdated":1659942184000}'),l={name:"html/vue3/computed.md"},e=p(`<h1 id="vue\u7684\u8BA1\u7B97\u5C5E\u6027" tabindex="-1">Vue\u7684\u8BA1\u7B97\u5C5E\u6027 <a class="header-anchor" href="#vue\u7684\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a></h1><h2 id="\u65B0\u5EFAhtml\u6587\u4EF6" tabindex="-1">\u65B0\u5EFAhtml\u6587\u4EF6 <a class="header-anchor" href="#\u65B0\u5EFAhtml\u6587\u4EF6" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const {effect,reactive, computed} = VueReactivity</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u65B0\u5EFAcomputed-ts-\u5728index-ts\u4E2D\u5BFC\u51FA\u65B9\u6CD5" tabindex="-1">\u65B0\u5EFAcomputed.ts,\u5728index.ts\u4E2D\u5BFC\u51FA\u65B9\u6CD5 <a class="header-anchor" href="#\u65B0\u5EFAcomputed-ts-\u5728index-ts\u4E2D\u5BFC\u51FA\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isFunction } from &quot;@vue/shared&quot;;</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="effect-ts\u5BFC\u51FA\u4E24\u4E2A\u65B9\u6CD5" tabindex="-1">effect.ts\u5BFC\u51FA\u4E24\u4E2A\u65B9\u6CD5 <a class="header-anchor" href="#effect-ts\u5BFC\u51FA\u4E24\u4E2A\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export let activeEffect = undefined</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),c=[e];function t(o,C,A,r,i,y){return a(),n("div",null,c)}var d=s(l,[["render",t]]);export{D as __pageData,d as default};
