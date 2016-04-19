var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "bundle_webpack.js"
    },
    module: {
    },
    plugins: [new HTMLWebpackPlugin({
        title: 'HTML Webpack Plugin',
        filename: 'index_htmlwebpackplugin.html'
    })]
};

module.exports = webpackConfig;
