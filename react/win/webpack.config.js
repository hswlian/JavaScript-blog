var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    entry: { // 打包入口
        index: "./src/index.js",
        vendor: [  // 将react和react-dom这些单独打包出来，减小打包文件体积
            "react",
            "react-dom"
        ]
    },
    output: { // 打包目标路径
        path: "./dist",
        filename: "js/[name].js"
    },
    resolve: {
        "extentions": ["", "js"]//当requrie的模块找不到时，添加这些后缀
    }
}

module.exports = config;