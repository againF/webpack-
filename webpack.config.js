let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将样式文件以Link标签的形式插入到html模板
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    devServer: {
        port: 3000,
        progress: true, // 进度条
        contentBase: './build',
        compress: true, // 压缩
    },
    optimization: {
        minimizer: [
            new OptimizeCss(),
            new UglifyJsPlugin()
        ]
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
            // minify: {
            //     removeAttributeQuotes: true, // 删除双引号
            //     collapseWhitespace: true, // 折叠空行
            // },
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        // 模块
        rules: [
            {
                test: /\.css$/,
                use: [
                    // {
                    // loader: 'style-loader',
                    // options: {
                    //     insert: function insertAtTop(element) {
                    //         var parent = document.querySelector('head');
                    //         // eslint-disable-next-line no-underscore-dangle
                    //         var lastInsertedElement =
                    //             window._lastElementInsertedByStyleLoader;

                    //         if (!lastInsertedElement) {
                    //             parent.insertBefore(element, parent.firstChild);
                    //         } else if (lastInsertedElement.nextSibling) {
                    //             parent.insertBefore(element, lastInsertedElement.nextSibling);
                    //         } else {
                    //             parent.appendChild(element);
                    //         }

                    //         // eslint-disable-next-line no-underscore-dangle
                    //         window._lastElementInsertedByStyleLoader = element;
                    //     },
                    // }
                    // }
                    MiniCssExtractPlugin.loader
                    , 'css-loader',
                    'postcss-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     // options: {
                    //     //     postcssOptions: {
                    //     //         plugins: [
                    //     //             [
                    //     //                 'autoprefixer',
                    //     //                 {
                    //     //                     // Options
                    //     //                 },
                    //     //             ],
                    //     //         ],
                    //     //     },
                    //     // }
                    // }
                ]
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         // {
            //         //     loader: 'style-loader',
            //         //     options: {
            //         //         insert: function insertAtTop(element) {
            //         //             var parent = document.querySelector('head');
            //         //             // eslint-disable-next-line no-underscore-dangle
            //         //             var lastInsertedElement =
            //         //                 window._lastElementInsertedByStyleLoader;

            //         //             if (!lastInsertedElement) {
            //         //                 parent.insertBefore(element, parent.firstChild);
            //         //             } else if (lastInsertedElement.nextSibling) {
            //         //                 parent.insertBefore(element, lastInsertedElement.nextSibling);
            //         //             } else {
            //         //                 parent.appendChild(element);
            //         //             }

            //         //             // eslint-disable-next-line no-underscore-dangle
            //         //             window._lastElementInsertedByStyleLoader = element;
            //         //         },
            //         //     }
            //         // },
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',

            //         // {
            //         //     loader: 'postcss-loader',
            //         //     // options: {
            //         //     //     postcssOptions: {
            //         //     //         plugins: [
            //         //     //             [
            //         //     //                 'autoprefixer',
            //         //     //                 {
            //         //     //                     // Options
            //         //     //                 },
            //         //     //             ],
            //         //     //         ],
            //         //     //     },
            //         //     // }
            //         // },
            //         'less-loader',
            //         'postcss-loader',
            //     ]
            // }
        ]

    }
}