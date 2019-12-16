
const htmlwebpackplugins = require("html-webpack-plugin");
//雪碧图
//const webpackspritesmith = require("webpack-spritesmith");

const merge = require("webpack-merge");
const dev = require("./webpack.dev.js");
const pro = require("./webpack.pro.js");


module.exports = (evn) => {
    //console.log("evn=", evn);
    function getResourcePath() {
        return evn.production ? "../img/" : "img/";
    }

    return merge({
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
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }]
                },
                {
                    test: /\.((woff2?)|eot|ttf|svg|png|jpg|jpeg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',//url-loader是file-loader,其中包含了file-loader
                            options: {
                                name: '[name].[ext]',
                                outputPath: "img",//图片输出目录
                                publicPath: getResourcePath(),//发布图片目录
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
            ]
        },
        plugins: [
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
    }, evn.production ? pro : dev);
}





