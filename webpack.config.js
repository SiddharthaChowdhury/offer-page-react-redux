const webpack = require("webpack");
const path    = require('path');
const hwp     = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, '/src/index.tsx'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module:{
        rules:[
            {
                test: /\.(tsx|ts)?$/,
                loaders: ['babel-loader', 'awesome-typescript-loader'],
                exclude: /node_modules/
            },
            //    Style loading
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
        ]
    },
    plugins:[
        new hwp({template:path.join(__dirname, '/src/index.html')}),
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'errors-only'
    },
};
