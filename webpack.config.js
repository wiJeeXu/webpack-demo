const path = require("path");
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
}