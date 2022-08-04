# 安装
## 创建文件夹
```
mkdir vitepress-docs && cd vitepress-docs
```
## 初始化项目
```
npm init -y
```

## 安装依赖
```
npm install --dev vitepress vue
```
## 编写代码
```
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```
## 添加脚本
```
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

## 配置gh-pages
- 因需要使用npm包缓存，所以项目使用npm包管理器
```
name: vitepress-docs
on: # 监听 master 分支上的 push 事件
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # 构建环境使用 ubuntu
    steps:
    # 下载仓库代码
    - uses: actions/checkout@v2

    # 缓存依赖


    - name: Cache dependencies
      uses: actions/cache@v1
      with:
        path: ~/.npm
        key: ${{ runner.os }}--node-${{ hashFiles('**/package-lock.json') }}
        restore-keys:  |
          ${{ runner.os }}--node-
    # 安装依赖
    - run: npm ci

    # 打包构建
    - run: npm run docs:build

    # 发布到gitHub Pages


    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2
      env:
        PERSONAL_TOKEN: ${{ secrets.ACCESS_TOKNE }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: ./docs/.vitepress/dist
```