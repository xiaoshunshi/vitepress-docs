import{_ as s,c as n,o as a,a as p}from"./app.e952ad38.js";const D=JSON.parse('{"title":"Vue3\u4E2D\u7684\u5206\u652F\u5207\u6362\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65B0\u5EFAhtml\uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801","slug":"\u65B0\u5EFAhtml\uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801"}],"relativePath":"html/vue3/cleanEffect.md","lastUpdated":1659942184000}'),l={name:"html/vue3/cleanEffect.md"},e=p(`<h1 id="vue3\u4E2D\u7684\u5206\u652F\u5207\u6362\u539F\u7406" tabindex="-1">Vue3\u4E2D\u7684\u5206\u652F\u5207\u6362\u539F\u7406 <a class="header-anchor" href="#vue3\u4E2D\u7684\u5206\u652F\u5207\u6362\u539F\u7406" aria-hidden="true">#</a></h1><h2 id="\u65B0\u5EFAhtml\uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801" tabindex="-1">\u65B0\u5EFAhtml\uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801 <a class="header-anchor" href="#\u65B0\u5EFAhtml\uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> const {effect,reactive } = VueReactivity</span></span>
<span class="line"><span style="color:#A6ACCD;">        const state = reactive({</span></span>
<span class="line"><span style="color:#A6ACCD;">            name:&#39;xiaonshunshi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">            age:33,</span></span>
<span class="line"><span style="color:#A6ACCD;">            flag:true</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;">        effect(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;render&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">            document.getElementById(&#39;app&#39;).innerHTML = state.flag ? state.name:state.age</span></span>
<span class="line"><span style="color:#A6ACCD;">        })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(()=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">            state.flag = false</span></span>
<span class="line"><span style="color:#A6ACCD;">            setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                console.log(&#39;\u4FEE\u6539name\uFF0C\u539F\u5219\u4E0A\u66F4\u65B0\u4E00\u6B21&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                state.name = &#39;song&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span></span>
<span class="line"><span style="color:#A6ACCD;">        },1000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4E0A\u8FF0\u4EE3\u7801\u539F\u5219\u4E0A\u8981\u8F93\u51FA</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539name\uFF0C\u539F\u5219\u4E0A\u66F4\u65B0\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5C31\u662F\u66F4\u6539name\uFF0C\u4E0D\u9700\u8981\u518D\u6B21runder\u66F4\u65B0\u89C6\u56FE</li><li>\u5B9E\u9645\u8F93\u51FA\u4E3A</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;">\u4FEE\u6539name\uFF0C\u539F\u5219\u4E0A\u66F4\u65B0\u4E00\u6B21</span></span>
<span class="line"><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u8981\u4FEE\u6539effect\u7684\u4EE3\u7801\uFF0C\u6BCF\u6B21\u6267\u884Ceffect\uFF0C\u5C31\u6E05\u7A7Adeps</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export let activeEffect = undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class ReactiveEffect {</span></span>
<span class="line"><span style="color:#A6ACCD;">    public active = true</span></span>
<span class="line"><span style="color:#A6ACCD;">    public parent = null</span></span>
<span class="line"><span style="color:#A6ACCD;">    public deps = []</span></span>
<span class="line"><span style="color:#A6ACCD;">    constructor(public fn) { }</span></span>
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
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// \u65B0\u589E\u6E05\u9664effect\u7684deps</span></span>
<span class="line"><span style="color:#A6ACCD;">function cleanupEffect(effect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const { deps } = effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i &lt; deps.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        deps[i].delete(effect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    effect.deps.length = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function effect(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _effect = new ReactiveEffect(fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">    _effect.run()</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    let shouldTrack = !dep.has(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if (shouldTrack) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        dep.add(activeEffect)</span></span>
<span class="line"><span style="color:#A6ACCD;">        activeEffect.deps.push(dep)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
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
<span class="line"><span style="color:#A6ACCD;">        // \u8981\u5FAA\u73AF\u4E00\u4E0B\u65B0\u7684effect\uFF0C\u907F\u514D\u6B7B\u5FAA\u73AF</span></span>
<span class="line"><span style="color:#A6ACCD;">        effects = new Set(effects)</span></span>
<span class="line"><span style="color:#A6ACCD;">        effects.forEach(effect =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (effect !== activeEffect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),c=[e];function t(o,A,C,r,i,y){return a(),n("div",null,c)}var d=s(l,[["render",t]]);export{D as __pageData,d as default};
