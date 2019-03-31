/**
 * @file
 * @author Cyseria <xcyseria@gmail.com>
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            '@': resolve('src'),
            'assets': resolve('src/assets'),
            'routers': resolve('src/routers'),
            'components': resolve('src/components'),
            'utils': resolve('src/utils'),
            'api': resolve('src/services/api.js')
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
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
            cacheGroups: { // 这里开始设置缓存的 chunks
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
            manifest: path.resolve(__dirname, 'dll', 'manifest.json')
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};

module.exports = (env, argv) => {
    // 开发环境
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        config.module.rules.push({
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')()
                        ]
                    }
                },
                {
                    loader: 'less-loader'
                }]
        });
        config.devServer = {
            inline: true, // 打包后加入一个websocket客户端
            hot: true, // 热加载
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true,
            port: 9000,
            compress: true // 开发服务器是否启动gzip等压缩
        };
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin() // 用户名替代id
        );
    }

    // 生产环境
    if (argv.mode === 'production') {
        config.output.filename = 'js/[name].[chunkhash:5].js';
        config.module.rules.push({
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        minimize: {
                            autoprefixer: {
                                add: true,
                                remove: true,
                                browsers: ['last 2 versions']
                            },
                            discardComments: {
                                removeAll: true
                            },
                            discardUnused: false,
                            mergeIdents: false,
                            reduceIdents: false,
                            safe: true
                        }
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')()
                        ]
                    }
                },
                {
                    loader: 'less-loader'
                }
            ]
        });
        config.plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/main.[chunkhash:5].css',
                chunkFilename: 'css/main.[contenthash:5].css'
            })
        );
    }
    return config;
};
