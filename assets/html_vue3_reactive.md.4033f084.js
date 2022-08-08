import{_ as s,c as a,o as n,a as e}from"./app.e952ad38.js";const D=JSON.parse('{"title":"reactivity\u548Cshared","description":"","frontmatter":{},"headers":[{"level":2,"title":"reactivity\u521D\u59CB\u5316\u9879\u76EE","slug":"reactivity\u521D\u59CB\u5316\u9879\u76EE"},{"level":2,"title":"shared","slug":"shared"},{"level":2,"title":"\u6253\u5305\u6D4B\u8BD5","slug":"\u6253\u5305\u6D4B\u8BD5"},{"level":2,"title":"Vue\u7684reactive\u65B9\u6CD5","slug":"vue\u7684reactive\u65B9\u6CD5"}],"relativePath":"html/vue3/reactive.md","lastUpdated":1659942184000}'),l={name:"html/vue3/reactive.md"},p=e(`<h1 id="reactivity\u548Cshared" tabindex="-1">reactivity\u548Cshared <a class="header-anchor" href="#reactivity\u548Cshared" aria-hidden="true">#</a></h1><h2 id="reactivity\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">reactivity\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#reactivity\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@vue/reactivity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;buildOptions&quot;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;:&quot;VueReactivity&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;formats&quot;:[</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;global&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;cjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esm-budler&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="shared" tabindex="-1">shared <a class="header-anchor" href="#shared" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;name&quot;: &quot;@vue/shared&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;description&quot;: &quot;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;main&quot;: &quot;index.ts&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;buildOptions&quot;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;formats&quot;:[</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;cjs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;esm-budler&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u6587\u4EF6\u5939\u4E0B\u65B0\u589Esrc\u6587\u4EF6\u548Cindex.ts\u5165\u53E3\u6587\u4EF6</li></ul><h2 id="\u6253\u5305\u6D4B\u8BD5" tabindex="-1">\u6253\u5305\u6D4B\u8BD5 <a class="header-anchor" href="#\u6253\u5305\u6D4B\u8BD5" aria-hidden="true">#</a></h2><ul><li>\u5728shared\u5199\u5165\u516C\u5171\u65B9\u6CD5</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export const isObject = (value: any) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return value !== null &amp;&amp; typeof value === &#39;object&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u5728reactivity\u5F15\u5165\u8BE5\u65B9\u6CD5</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isObject } from &quot;@vue/shared&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(isObject(true))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u6267\u884Cpnpm run dev</li><li>reactivity\u4E0B\u751F\u6210dist\u8BF4\u660E\u6253\u5305\u6210\u529F\uFF0C\u9879\u76EE\u914D\u7F6E\u6CA1\u95EE\u9898</li></ul><h2 id="vue\u7684reactive\u65B9\u6CD5" tabindex="-1">Vue\u7684reactive\u65B9\u6CD5 <a class="header-anchor" href="#vue\u7684reactive\u65B9\u6CD5" aria-hidden="true">#</a></h2><ul><li>index.ts</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">export { effect } from &#39;./effect&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export { reactive } from &#39;./reactive&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>src\u4E0B\u65B0\u5EFAreactive.ts</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {  isObject  } from &#39;@vue/shared&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const reactiveMap = new WeakMap()</span></span>
<span class="line"><span style="color:#A6ACCD;">const enum ReactiveFlags {</span></span>
<span class="line"><span style="color:#A6ACCD;">    IS_REACTIVE = &#39;_v_isReactive&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">export function reactive(target){</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!isObject(target)){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    if(target[ReactiveFlags.IS_REACTIVE]){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return target</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    let exisitingProxy = reactiveMap.get(target)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(exisitingProxy){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return exisitingProxy</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    const proxy = new Proxy(target,{</span></span>
<span class="line"><span style="color:#A6ACCD;">        get(target,key,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (key === ReactiveFlags.IS_REACTIVE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return true</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            return Reflect.get(target,key,receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        set(target,key,value,receiver){</span></span>
<span class="line"><span style="color:#A6ACCD;">            return Reflect.set(target,key,value,receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">    reactiveMap.set(target,proxy)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return proxy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u62BD\u53D6\u4EE3\u7406\u65B9\u6CD5\uFF0C\u65B0\u5EFAbaseHandler.ts</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { isObject } from &quot;@vue/shared&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { reactive } from &quot;./reactive&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const enum ReactiveFlags {</span></span>
<span class="line"><span style="color:#A6ACCD;">    IS_REACTIVE = &#39;_v_isReactive&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const mutableHandlers = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    get(target, key, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (key === ReactiveFlags.IS_REACTIVE) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return true</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        let res = Reflect.get(target, key, receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (isObject(res)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return reactive(res)</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        return res</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    set(target, key, value, receiver) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return Reflect.set(target, key, value, receiver)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>reactive.ts</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import {  isObject  } from &#39;@vue/shared&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { mutableHandlers,ReactiveFlags } from &#39;./baseHandler&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">const reactiveMap = new WeakMap()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export function reactive(target){</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!isObject(target)){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(target[ReactiveFlags.IS_REACTIVE]){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return target</span></span>
<span class="line"><span style="color:#A6ACCD;">    // const state1 = reactive(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // const state2 = reactive(state1)</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    let exisitingProxy = reactiveMap.get(target)</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(exisitingProxy){</span></span>
<span class="line"><span style="color:#A6ACCD;">        return exisitingProxy</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    const proxy = new Proxy(target,mutableHandlers)</span></span>
<span class="line"><span style="color:#A6ACCD;">    reactiveMap.set(target,proxy)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // const state1 = reactive(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">    // const state2 = reactive(data)</span></span>
<span class="line"><span style="color:#A6ACCD;">    return proxy</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,21),t=[p];function o(c,r,i,A,C,y){return n(),a("div",null,t)}var d=s(l,[["render",o]]);export{D as __pageData,d as default};
