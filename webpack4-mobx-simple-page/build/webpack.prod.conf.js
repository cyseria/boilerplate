/**
 * @file
 * @author Cyseria <xcyseria@gmail.com>
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBase = require('./webpack.base.conf.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackBase, {
    // devtool: 'cheap-module-source-map',
    mode: 'production',
    optimization: {
        sideEffects: false,
        splitChunks: {
            // 默认打包node_modules到venders.js
            chunks: 'all',
            minSize: 30000, // 形成一个新代码块最小的体积
            minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数（译注：保证代码块复用性，默认配置的策略是不需要多次引用也可以被分割）
            cacheGroups: {
                // 这里开始设置缓存的 chunks, 将第三方模块提取出来
                vendors: {
                    name: 'common',
                    test: /node_modules/,
                    chunks: 'initial',
                    priority: -1,
                    enforce: true
                },
                styles: {
                    name: 'styles',
                    test: /(\.less|\.css)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            // 对比 uglify 能编译 es6
            new TerserPlugin({
                exclude: /node_modules/,
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            // 用于优化css文件
            new OptimiseCssAssetsPlugin({
                cssProcessorOptions: {
                    safe: true,
                    autoprefixer: { disable: true }, // 这是个大坑，这货把我们通过 autoprefixer 加好了前缀给移除了...
                    mergeLonghand: false,
                    discardComments: {
                        removeAll: true // 移除注释
                    }
                }
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.[chunkhash:5].css',
            chunkFilename: 'css/main.[contenthash:5].css'
        })
    ]
});
