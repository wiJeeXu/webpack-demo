const path = require("path");
// const XwjPlugin = require("./plugin/XwjPlugin.js");
const BannerPlugin = require("./plugin/BannerPlugin.js");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    mode: "development",
    target: ['web', 'es2020'],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.xwj$/,
                use: [path.resolve(__dirname, 'loader/xwjLoader.js')],
            },
        ]
    },
    plugins: [
        new BannerPlugin()
    ],
}