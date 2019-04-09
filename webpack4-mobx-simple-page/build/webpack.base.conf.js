/**
 * @file
 * @author Cyseria <xcyseria@gmail.com>
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

console.log('devMode', devMode);

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            '@': resolve('src'),
            assets: resolve('src/assets'),
            routers: resolve('src/routers'),
            components: resolve('src/components'),
            utils: resolve('src/utils'),
            api: resolve('src/services/api.js')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // require('postcss-import'),
                                require('autoprefixer')
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                            /* antd 需要开启的 */
                            // javascriptEnabled: true,
                            // modifyVars: {
                            //     // at.alicdn 禁用了 baidu 域，部署地址换成百度云
                            //     '@icon-url':
                            //         '"https://bj.bcebos.com/v1/hi-static/common/iconfont"'
                            // }
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        sideEffects: false,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            cacheGroups: {
                // 这里开始设置缓存的 chunks
                vendors: {
                    name: 'common',
                    test: /node_modules/,
                    chunks: 'initial',
                    priority: -10,
                    enforce: true
                },
                styles: {
                    name: 'styles',
                    test: /(\.less|\.css)$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, 'src'),
            manifest: path.resolve(__dirname, '../dll', 'manifest.json')
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};
