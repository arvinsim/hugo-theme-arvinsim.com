const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    __dirname + "/src/styles/main.scss"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader", // compiles Sass to CSS
              options: {
                includePaths: [
                  path.resolve(__dirname, "node_modules/include-media/dist/")
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("styles.css")]
}
