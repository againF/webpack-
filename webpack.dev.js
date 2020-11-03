const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        port: 3000,
        progress: true, // 进度条
        openPage: 'other.html',
        // contentBase: path.join(__dirname, 'build'), // './build'
        compress: true, // 压缩
        proxy: {
            '/api': 'http://localhost:8000'
        }
    },
});