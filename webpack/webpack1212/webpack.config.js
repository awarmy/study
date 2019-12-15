const extractcss = require("extract-text-webpack-plugin");
//min-css-extract-plugin    //文件名支持hash
const htmlwebpackplugins = require("html-webpack-plugin");
//雪碧图
//const webpackspritesmith = require("webpack-spritesmith");
module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        // index: ["./src/index.js", "babel-polyfill"]
        /**
         *仅仅方便使用而已
        */
        index: "./src/js/index.js",
        hello: "./src/js/hello.js",
        // nextcss: "./src/js/nextcss.js",
    },
    output: {
        filename: "./js/[name].js",
        publicPath: ""//文件的引用 css js
    },
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg|jpeg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: "img",//图片输出目录
            //                 publicPath: "../img/",//发布图片目录
            //             }
            //         }
            //     ]
            // },

            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {}
                }
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            // {
            //     test: /\.css$/,
            //     use: extractcss.extract({
            //         fallback: {
            //             loader: 'style-loader',
            //         },
            //         use: [
            //             // {
            //             //     loader: 'style-loader',
            //             //     //指定样式插入页面的地址
            //             //     // options: {
            //             //     //     insert: "body",
            //             //     // }
            //             // },
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     //modules: true,   //CSS模块化操作
            //                     // modules: {
            //                     //     // localIdentName: "[path]_[name]_[local]_[hash]"
            //                     //     localIdentName: "[name]"
            //                     // }
            //                 }
            //             }
            //         ]
            //     })
            // },
            {
                test: /\.s?css$/,
                use: extractcss.extract({
                    fallback: {
                        loader: 'style-loader',
                    },
                    use: [
                        {
                            loader: "css-loader",
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require("autoprefixer")(),
                                    //require("postcss-cssnext")(),
                                ]
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                }),
                // use: [
                //     {
                //         loader: "style-loader",
                //     },
                //     {
                //         loader: "css-loader",
                //     },
                //     {
                //         loader: "postcss-loader",
                //         options: {
                //             ident: 'postcss',
                //             plugins: [
                //                 require("autoprefixer")(),
                //                 require("postcss-cssnext")(),
                //             ]
                //         }
                //     },
                //     {
                //         loader: "sass-loader"
                //     }
                // ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',//url-loader是file-loader,其中包含了file-loader
                        options: {
                            name: '[name].[ext]',
                            outputPath: "img",//图片输出目录
                            publicPath: "../img/",//发布图片目录
                            limit: 1000
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            plugins: [
                                require('imagemin-pngquant')({
                                    speed: 3,   //值得范围1-11
                                }),
                                require('imagemin-mozjpeg')({
                                    quality: 30
                                }),
                                require('imagemin-gifsicle')({
                                    optimizationLevel: 3,   //值范围 1-3
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [
                            'img:data-src'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new extractcss({
            filename: './css/[name].min.css',
        }),
        new htmlwebpackplugins({
            template: "./src/index.html",
            filename: './index.html',
            chunks: ['index'],//指定引入JS
        }),
        new htmlwebpackplugins({
            template: "./src/hello.html",
            filename: './hello.html',
            chunks: ['hello']
        }),
    ],
    //"browsers": ["> 1%", "last 2 versions", "not ie <=8"]
}
//增加webpack不具备的功能是使用插件
//处理其他文件，需要使用loader


//任何一个单独的文件都是一个模块 css js imgage
//最终产出的为chunk

//babel 只能处理语法，不能处理方法和对象
//async promise 等等
//生成一个全局垫片，在垫片中去实现这些想法，实现es5的方法等
//在写项目的时候使用babel-polyfill
//babel-runtime 生成一个局部垫片，用哪个实现哪个

//babel-runtime 是一个插件，跟babel/core息息相关，所以需要注意版本


