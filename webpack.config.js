const path = require("path")

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
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
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
      }
    ]
  }
}
