# 前端基础脚手架 

[![build status](https://img.shields.io/travis/cyseria/boilerplate/master.svg?style=flat-square)](https://travis-ci.org/cyseria/boilerplate)

自己整理的脚手架 & 简单配置记录

* 技术栈：
    - react
    - mobx
    - react-router
    - webpack4
    - babel7

* 目录/模块 结构：主要有三个模块，分别对应几种技术栈的主要使用
    * Home（简单 react 启动，组件引入）
    * Topic（react-router 实现多层级路由）
    * Activities（mobx 状态管理）

## [webpack4-mobx-simple-page](https://manyu.site/boilerplate/dist) 
> 典型的单页面应用，接下来的一些都是以此模版为基础做一些改造的，


## webpack4-mobx-muti-page (多页面)
> 主要是针对业务复杂的场景，为提高页面加载速度，需要配置多页面。

webpack 配置中 `loader`、`output`、`plugins` 这些基本都不需要改动，需要改动的一般都是入口文件 `entry`。
常见的如果你用到了 `html-webpack-plugin`，还需要做一些稍微的改动（如有有 `extract-text-webpack-plugin`也要，可自行参阅其他资料）

### 多入口单出口
1.写成数组的方式就可以打出多入口文件，不过这里打包后的文件都合成了一个，不在讨论范围
```
entry: ['./src/index.js', './src/login.js'],
```

### 多入口多出口（Demo）
1. entry

```javascript
// 单页面
entry: 'src/home/index.js'
// => 多页面
entry: {
    home: 'src/pages/home/index.js',
    about: 'src/pages/topic/index.js'
},
```

2. HtmlWebPackPlugin
有几个页面，就加几个配置即可
```
new HtmlWebpackPlugin({
   filename: 'home/index.html',
   template: 'src/pages/home/index.html',
   ...
 })
 new HtmlWebpackPlugin({
   filename: 'topic/index.html',
   template: 'src/pages/topic/index.html',
   ...
 })
```
3. extract-text-webpack-plugin
主要是为了抽离css样式，因为存在多个入口文件以及对应的多个页面，每个页面都有自己的 css样式，所以需要为每个页面各自配置一下：

```
plugins: [
	new ExtractTextPlugin('home/[name].[contenthash].css'),
	new ExtractTextPlugin('about/[name].[contenthash].css')
]
```

[基础更改变更历史](https://github.com/cyseria/boilerplate/commit/54e2d97dbc81c671c6779c74b5c0ae58aa19508c)

但是当页面多了改起来还是很麻烦的，通常写点小函数自动生成，具体可直接参照Demo [变更历史](https://github.com/cyseria/boilerplate/commit/38cf1e80d6fe9f30689dabac1b7c1332bb934574)

* 入口文件为 `src/pages/*/index.js`，
* 加载的 `html` 默认为 `src/public/index.html`，页面中可以自行覆盖，需要添加的文件为 `src/pages/*/index.html`
* 如需更改路径主要关注 `build/utils/index` 文件
* 页面打开的路径为 `http://localhost:9000/xx/index.html`

## webpack4-mobx-antd-page (Ant Design 引入)
第三方库的引入
1. 官方支持 react 版的，直接 `import`，antd 这里是因为有一些小坑做特殊说明
2. 需要全局注入的，比如 jquery

## webpack4-react-typescript-page (typescript)
拥抱 `ts` 大法，拒绝 996。

## 附加
* webpack4 配置注意事项
    * process.env.NODE_ENV 的值不需要再定义，但是如果前端要引用，definePlugin 还是要有的