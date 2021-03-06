const path    = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react']
    },
    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: '[name].dll.[hash:5].js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(__dirname, '../dll', 'manifest.json'),
             // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
            context: process.cwd()
        })
    ]
};