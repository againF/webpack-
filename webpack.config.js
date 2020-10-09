let path = require('path')
module.exports = {
    mode: 'development', // production development
    entry: './src/index.js', // 入口
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'build'), // 必须是绝对路径
    }
}