
const path = require('path');
const context = path.resolve(__dirname);

module.exports = function (api) {
    api.cache(true);

    const presets = [
        "@babel/preset-env",
        "@babel/preset-react"
    ];
    const plugins = [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-transform-async-to-generator",
        // Note that legacy: true is specifically needed if you want to get the same behavior as transform-decorators-legacy because there are newer versions of the decorator specification coming out, and they do not behave the same way as this plugin does.
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        [
            "react-css-modules",
            {
                "context": context,
                "exclude": "node_modules",
                "filetypes": {
                    ".less": {
                        "syntax": "postcss-less"
                    }
                },
                "generateScopedName": "[name]_[local]_[hash:base64:5]"
            }
        ]];

    return {
        presets,
        plugins
    };
}