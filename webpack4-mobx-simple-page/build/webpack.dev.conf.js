/**
 * @file
 * @author Cyseria <xcyseria@gmail.com>
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf.js');
const path = require('path');

module.exports = merge(webpackBase, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        inline: true, // 打包后加入一个websocket客户端
        hot: true, // 热加载
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 9000,
        compress: true // 开发服务器是否启动gzip等压缩
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin() // 用户名替代id
    ]
});
