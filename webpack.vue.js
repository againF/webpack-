const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'production', // development production
    entry: {
        vue: ['vue']
    },
    output: {
        filename: '_dll_[name].js', // 产生的文件名
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]', // _dll_vue
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]', // 要和output里的library同名
            path: path.resolve(__dirname, 'dist', 'manifest.json')
        })
    ]
};