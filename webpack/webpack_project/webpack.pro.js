const webpack = require("webpack");
const extractcss = require("extract-text-webpack-plugin");
//min-css-extract-plugin    //文件名支持hash
module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s?css$/,
                //抽取样式，DEV 时可以不用抽取样式
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
            },
        ]
    },
    optimization: {
        minimize: false,
        // splitChunks: {
        //     chunks: 'initial',
        //     //公共模块文件大小大于minsize才分拆
        //     // minsize: 30,
        //     //同时出现规定minChunks的次数，才提取
        //     // minChunks:2,

        //     // cacheGroups:{

        //     // },
        //     //automaticNameDelimiter：'~', //auto设置分割符
        // },
        // runtimeChunk: true
        // runtimeChunk: {
        //     name: 'runtime'
        // }
    },
    plugins: [
        new extractcss({
            filename: './css/[name].min.css',
        }),
    ]
}