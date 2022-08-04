import{_ as s,c as a,o as n,a as e}from"./app.aa42310d.js";const u=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u6587\u4EF6\u5939","slug":"\u521B\u5EFA\u6587\u4EF6\u5939"},{"level":2,"title":"\u521D\u59CB\u5316\u9879\u76EE","slug":"\u521D\u59CB\u5316\u9879\u76EE"},{"level":2,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"\u7F16\u5199\u4EE3\u7801","slug":"\u7F16\u5199\u4EE3\u7801"},{"level":2,"title":"\u6DFB\u52A0\u811A\u672C","slug":"\u6DFB\u52A0\u811A\u672C"},{"level":2,"title":"\u914D\u7F6Egh-pages","slug":"\u914D\u7F6Egh-pages"}],"relativePath":"guide/installation.md","lastUpdated":1659595187000}'),l={name:"guide/installation.md"},p=e(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u6587\u4EF6\u5939" tabindex="-1">\u521B\u5EFA\u6587\u4EF6\u5939 <a class="header-anchor" href="#\u521B\u5EFA\u6587\u4EF6\u5939" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir vitepress-docs &amp;&amp; cd vitepress-docs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1">\u521D\u59CB\u5316\u9879\u76EE <a class="header-anchor" href="#\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm init -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npm install --dev vitepress vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u7F16\u5199\u4EE3\u7801" tabindex="-1">\u7F16\u5199\u4EE3\u7801 <a class="header-anchor" href="#\u7F16\u5199\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ mkdir docs &amp;&amp; echo &#39;# Hello VitePress&#39; &gt; docs/index.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u6DFB\u52A0\u811A\u672C" tabindex="-1">\u6DFB\u52A0\u811A\u672C <a class="header-anchor" href="#\u6DFB\u52A0\u811A\u672C" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u914D\u7F6Egh-pages" tabindex="-1">\u914D\u7F6Egh-pages <a class="header-anchor" href="#\u914D\u7F6Egh-pages" aria-hidden="true">#</a></h2><ul><li>\u56E0\u9700\u8981\u4F7F\u7528npm\u5305\u7F13\u5B58\uFF0C\u6240\u4EE5\u9879\u76EE\u4F7F\u7528npm\u5305\u7BA1\u7406\u5668</li></ul><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">name: vitepress-docs</span></span>
<span class="line"><span style="color:#A6ACCD;">on: # \u76D1\u542C master \u5206\u652F\u4E0A\u7684 push \u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - main</span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  build-and-deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest # \u6784\u5EFA\u73AF\u5883\u4F7F\u7528 ubuntu</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u4E0B\u8F7D\u4ED3\u5E93\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    - uses: actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u7F13\u5B58\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - name: Cache dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">      uses: actions/cache@v1</span></span>
<span class="line"><span style="color:#A6ACCD;">      with:</span></span>
<span class="line"><span style="color:#A6ACCD;">        path: ~/.npm</span></span>
<span class="line"><span style="color:#A6ACCD;">        key: \${{ runner.os }}--node-\${{ hashFiles(&#39;**/package-lock.json&#39;) }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        restore-keys:  |</span></span>
<span class="line"><span style="color:#A6ACCD;">          \${{ runner.os }}--node-</span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u5B89\u88C5\u4F9D\u8D56</span></span>
<span class="line"><span style="color:#A6ACCD;">    - run: npm ci</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u6253\u5305\u6784\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">    - run: npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # \u53D1\u5E03\u5230gitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    - name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">      uses: peaceiris/actions-gh-pages@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      env:</span></span>
<span class="line"><span style="color:#A6ACCD;">        PERSONAL_TOKEN: \${{ secrets.ACCESS_TOKNE }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        PUBLISH_BRANCH: gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        PUBLISH_DIR: ./docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[p];function c(t,i,r,A,C,d){return n(),a("div",null,o)}var h=s(l,[["render",c]]);export{u as __pageData,h as default};
