var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
    entry: "./src/main.js",
    output: {
        path: "./dist/",
        filename: "bundle_webpacked.js"
    },
    module: {
    },
    plugins: [new HTMLWebpackPlugin({
        title: 'HTML Webpack Plugin',
        filename: 'index_htmlwebpackplugin.html'
    })]
};

module.exports = webpackConfig;
