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