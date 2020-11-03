let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 将样式文件以Link标签的形式插入到html模板
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 编译时先删除build
const CopyPlugin = require('copy-webpack-plugin'); // 把文件拷贝到build
const webpack = require('webpack');

module.exports = {

    resolve: {
        alias: {
            Css: path.resolve(__dirname, 'src/asset/css/'),
            Image: path.resolve(__dirname, 'src/asset/image/'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    optimization: {
        minimizer: [
            new OptimizeCss(), // 为了压缩css
            new UglifyJsPlugin({
                sourceMap: true
            }) // 压缩js
        ],
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'all',
                }
            }
        }
    },
    // entry: './src/index.js', // 入口
    // output: {
    //     filename: 'bundle.[hash:4].js', // 打包后的文件名
    //     path: path.resolve(__dirname, 'build'), // 必须是绝对路径
    // },
    entry: {
        home: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: '[name].[hash:4].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/, // 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹，例如 node_modules
        poll: 1000, // 每秒检查一次变动
        aggregateTimeout: 600 // 当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'index.html',
        //     // minify: {
        //     //     removeAttributeQuotes: true, // 删除双引号
        //     //     collapseWhitespace: true, // 折叠空行
        //     // },
        //     hash: true
        // }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'home.html',
            // minify: {
            //     removeAttributeQuotes: true, // 删除双引号
            //     collapseWhitespace: true, // 折叠空行
            // },
            chunks: ['home'],
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: './src/other.html',
            filename: 'other.html',
            // minify: {
            //     removeAttributeQuotes: true, // 删除双引号
            //     collapseWhitespace: true, // 折叠空行
            // },
            chunks: ['other'],
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'asset/css/main.css'
        }),
        // new ESLintPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './README.md', to: './' },
            ],
        }),
        new webpack.BannerPlugin({
            banner: 'By Alan'
        }),
        new webpack.DefinePlugin({ // 定义全局变量
            MODE: JSON.stringify("dev")
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, 'dist', 'manifest.json')
        })
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
                            limit: 2 * 1024, // 小于4k的图转成base64,大于4k的作为文件引入
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
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
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
                        loader: MiniCssExtractPlugin.loader, // 提取css到文件
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