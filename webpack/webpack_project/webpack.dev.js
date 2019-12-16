const webpack = require("webpack");

module.exports = {
    devtool: 'cheap-module-source-map',//定位到源稳健 
    mode: 'development',
    devServer: {
        port: 9001,
        open: true,
        inline: true,
        //inline: false,   //默认为true
        hot: true,          //只使用热更新，禁止live reload
        hotOnly: true,
        // historyApiFallback:true,
        // historyApiFallback: {
        //     rewrites: [//路径重写规则
        //         {
        //             from: /^\/([ -~]+)/,
        //             to: function (context) {
        //                 console.log(context);
        //                 //return "./404.html",
        //                 return "./" + context.match[1] + ".html"
        //             },
        //         }
        //     ]
        // },
        proxy: {
            //定义转发的基本规则，请求以什么开始
            "/h5": {
                target: "http://localhost/",
                //改变请求源
                changeOrigin: true,
                // pathRewrite: {
                //     "^/smarty/test": "",
                // }
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require("autoprefixer")(),
                                require("postcss-cssnext")(),
                            ]
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },

        ]
    },

    plugins: [
        //配置了热更新插件，需要设置hot hotOnly,否则不生效
        //热更新 无刷新
        //live-reload
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedChunksPlugin(),
    ]
}
