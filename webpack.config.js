let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将样式文件以Link标签的形式插入到html模板
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    devServer: {
        port: 3000,
        progress: true, // 进度条
        contentBase: './build',
        compress: true, // 压缩
    },
    optimization: {
        minimizer: [
            new OptimizeCss(), // 为了压缩css
            new UglifyJsPlugin() // 压缩js
        ]
    },
    mode: 'development', // production development
    entry: './src/index.js', // 入口
    output: {
        filename: 'bundle.[hash:4].js', // 打包后的文件名
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
            filename: 'asset/css/main.css'
        }),
        new ESLintPlugin()
    ],
    module: {
        // 模块
        rules: [
            { // html里直接引图片
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            { // js里引图片
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      esModule: false, // 不设false上面的html-withimg-loader图片路径会有问题会输出{default:xxx.png}
                      limit: 2*1024, // 小于4k的图转成base64,大于4k的作为文件引入
                      outputPath: 'asset/image/',
                      name: '[name].[ext]'
                    },
                  },
                ],
              },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
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
                    {
                        loader:MiniCssExtractPlugin.loader, // 提取css到文件
                        options: {
                            publicPath: '../../',
                        }
                    }, 'css-loader',
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
};