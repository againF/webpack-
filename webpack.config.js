let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devServer: {
        port: 3000,
        progress: true, // 进度条
        contentBase: './build',
        compress: true, // 压缩
    },
    mode: 'production', // production development
    entry: './src/index.js', // 入口
    output: {
        filename: 'bundle.[hash:8].js', // 打包后的文件名
        path: path.resolve(__dirname, 'build'), // 必须是绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true, // 删除双引号
                collapseWhitespace: true, // 折叠空行

            },
            hash: true
        })
    ]
}