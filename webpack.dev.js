const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        progress: true, // 进度条
        contentBase: './build',
        compress: true, // 压缩
        proxy: {
            '/api': 'http://localhost:8000'
        }
    },
});