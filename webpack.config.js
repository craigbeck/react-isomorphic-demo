var Webpack = require("webpack");

var OUTPUT_DIR = "./dist";


module.exports = {
  entry: {
    app: ["./src/client.js"]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel"] }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new Webpack.DefinePlugin({
      __CLIENT__: true
    })
  ]
};
