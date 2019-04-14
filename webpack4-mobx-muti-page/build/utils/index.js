/**
 * @file 一些 utils
 * @author
 */

const path = require('path');
const glob = require('glob');
const HtmlWebPackPlugin = require('html-webpack-plugin');

/**
 * 获取多页面的入口
 * @param {string} globPath - 页面入口正则
 * @return {Object} entries
 *
 * @example
 */
exports.getMultiEntry = globPath => {
    const entries = {};
    let basename = '';
    let tmp = '';
    let pathname = '';
    glob.sync(globPath).forEach(entry => {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-4);
        let pathsrc = tmp[0] + '/' + tmp[2];
        if (tmp[0] === 'src') {
            pathsrc = tmp[2];
        }
        pathname = pathsrc + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
    });
    // console.log(entries);
    return entries;
};

/**
 * 获取 HtmlWebpackPlugin 模版
 * 如果 pages 下面有 index.html 则使用自己的，如果没有则使用公共模版
 *
 * @return {Object} htmlplugins
 */
exports.getHtmlWebpackPlugins = () => {
    const pages = this.getMultiEntry('./src/pages/*/index.js');
    const htmls = this.getMultiEntry('./src/pages/*/index.html');
    const plugins = Object.keys(pages).map(pathname => {
        // 判断是否存在 index.html
        const htmlTemplate = htmls.hasOwnProperty(pathname)
            ? resolve(htmls[pathname])
            : resolve('src/public/index.html');
        const config = {
            filename: pathname + '.html',
            template: htmlTemplate,
            chunks: ['manifest', 'vendor', pathname],
            hash: true
        };
        return new HtmlWebPackPlugin(config);
    });

    return plugins;
};

function resolve(dir) {
    return path.join(__dirname, '../..', dir);
}
