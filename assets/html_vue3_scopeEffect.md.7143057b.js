import{_ as s,c as n,o as a,a as l}from"./app.e952ad38.js";const f=JSON.parse('{"title":"Vue\u4E2D\u7684\u8C03\u5EA6\u5668scopeEffect","description":"","frontmatter":{},"headers":[],"relativePath":"html/vue3/scopeEffect.md","lastUpdated":1659942184000}'),p={name:"html/vue3/scopeEffect.md"},e=l(`<h1 id="vue\u4E2D\u7684\u8C03\u5EA6\u5668scopeeffect" tabindex="-1">Vue\u4E2D\u7684\u8C03\u5EA6\u5668scopeEffect <a class="header-anchor" href="#vue\u4E2D\u7684\u8C03\u5EA6\u5668scopeeffect" aria-hidden="true">#</a></h1><ul><li>\u65B0\u5EFAhtml\uFF0C\u5199\u5165\u5982\u4E0B\u4EE3\u7801</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">const {</span></span>
<span class="line"><span style="color:#A6ACCD;">    effect,</span></span>
<span class="line"><span style="color:#A6ACCD;">    reactive</span></span>
<span class="line"><span style="color:#A6ACCD;">} = VueReactivity</span></span>
<span class="line"><span style="color:#A6ACCD;"> const state = reactive({</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &#39;xiaoshunshi&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    age: 13,</span></span>
<span class="line"><span style="color:#A6ACCD;">    flag: true</span></span>
<span class="line"><span style="color:#A6ACCD;"> })</span></span>
<span class="line"><span style="color:#A6ACCD;"> let ruuner = effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    document.getElementById(&#39;app&#39;).innerHTML = state.age</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ruuner.effect.stop()</span></span>
<span class="line"><span style="color:#A6ACCD;">  setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      state.age = 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">       setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">           ruuner()</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, 1000)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>stop\uFF08\uFF09\u65B9\u6CD5\u963B\u6B62\u4E86\u66F4\u65B0\uFF0C\u9875\u9762\u8FD8\u662F\u663E\u793A13</li><li>\u4FEE\u6539effect</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">class ReactiveEffect {</span></span>
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
<span class="line"><span style="color:#A6ACCD;">    stop(){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(this.active){</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.active = false</span></span>
<span class="line"><span style="color:#A6ACCD;">            cleanupEffect(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function effect(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _effect = new ReactiveEffect(fn)</span></span>
<span class="line"><span style="color:#A6ACCD;">    _effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const runner = _effect.run.bind(_effect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    runner.effect = _effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    return runner</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4FEE\u6539html\uFF0C\u4F20\u5165options\u53C2\u6570\uFF0C\u6309\u7167\u53C2\u6570\u7684\u65B9\u5F0F\u6267\u884Ceffect</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    let waiting = false</span></span>
<span class="line"><span style="color:#A6ACCD;">    const {</span></span>
<span class="line"><span style="color:#A6ACCD;">        effect,</span></span>
<span class="line"><span style="color:#A6ACCD;">        reactive</span></span>
<span class="line"><span style="color:#A6ACCD;">    } = VueReactivity</span></span>
<span class="line"><span style="color:#A6ACCD;">    const state = reactive({</span></span>
<span class="line"><span style="color:#A6ACCD;">        name: &#39;zcf&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        age: 13,</span></span>
<span class="line"><span style="color:#A6ACCD;">        flag: true</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    let ruuner = effect(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">        document.getElementById(&#39;app&#39;).innerHTML = state.age</span></span>
<span class="line"><span style="color:#A6ACCD;">    }, {</span></span>
<span class="line"><span style="color:#A6ACCD;">        scheduler() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(&#39;run&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!waiting) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                waiting = true</span></span>
<span class="line"><span style="color:#A6ACCD;">                setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    ruuner()</span></span>
<span class="line"><span style="color:#A6ACCD;">                    waiting = false</span></span>
<span class="line"><span style="color:#A6ACCD;">                }, 1000);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // ruuner.effect.stop()</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 1000</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 10001</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 10002</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 10003</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 10004</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 10005</span></span>
<span class="line"><span style="color:#A6ACCD;">    state.age = 10006</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u4FEE\u6539effect\u7684\u51FD\u6570\uFF0C\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  class ReactiveEffect {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  		constructor(public fn,public scheduler) { }</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function effect(fn, options: any = {}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let _effect = new ReactiveEffect(fn,options.scheduler)</span></span>
<span class="line"><span style="color:#A6ACCD;">    _effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">    const runner = _effect.run.bind(_effect)</span></span>
<span class="line"><span style="color:#A6ACCD;">    runner.effect = _effect</span></span>
<span class="line"><span style="color:#A6ACCD;">    return runner</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;">.....................</span></span>
<span class="line"><span style="color:#A6ACCD;"> function trigger(target, type, key, value, oldValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> .....................</span></span>
<span class="line"><span style="color:#A6ACCD;"> 	if (effects) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        effects = new Set(effects)</span></span>
<span class="line"><span style="color:#A6ACCD;">        effects.forEach(effect =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (effect !== activeEffect) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (effect.scheduler) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    effect.scheduler()</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    effect.run()</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        });</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    .....................</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),c=[e];function o(t,A,C,i,r,y){return a(),n("div",null,c)}var u=s(p,[["render",o]]);export{f as __pageData,u as default};
