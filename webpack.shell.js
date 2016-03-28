var Webpack = require("webpack");
var ReactToHtmlPlugin = require("react-to-html-webpack-plugin");
var Handlebars = require("handlebars");
var fs = require("fs");
// var eval = require("eval");

// function ShellBuilder(filename, jsSource) {
//   this.filename = filename;
//   this.jsSource = jsSource;
// }
//
// ShellBuilder.prototype.apply = function (compiler) {
//   compiler.plugin("emit", function (compiler, done) {
//     var stats = compiler.getStats().toJson();
//     console.log(this.jsSource);
//     console.log("");
//     // console.log(stats);
//     // console.log(compiler.assets);
//     // console.log("");
//
//     var asset = compiler.assets[this.jsSource];
//     console.log("asset", asset);
//     console.log("");
//     if (!asset) {
//       return done(new Error("Could not find asset " + this.jsSource))
//     }
//
//     var source = asset.source();
//     // console.log("source", source)
//     // console.log("");
//
//     var Component = eval(source, undefined, undefined, true);
//     console.log("Component", Component);
//
//     done();
//   }.bind(this));
// };

module.exports = {
  entry: {
    shell: "./src/shell.js",
  },
  output: {
    filename: "shell.js",
    path: "dist",
    /* IMPORTANT!
     * You must compile to UMD or CommonJS
     * so it can be required in a Node context: */
    library: "App",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.json$/, exclude: /node_modules/, loader: "json" }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
    new Webpack.DefinePlugin({
      __CLIENT__: false
    }),
    new ReactToHtmlPlugin("200.html", "shell.js", {
      template: function (data) {
        var applyTemplate = Handlebars.compile(fs.readFileSync("./src/templates/index.html").toString());
        return applyTemplate({ markup: data.html });
      }
    }),
    new ReactToHtmlPlugin("index.html", "shell.js", {
      template: function (data) {
        var applyTemplate = Handlebars.compile(fs.readFileSync("./src/templates/index.html").toString());
        return applyTemplate({ markup: data.html });
      }
    })
  ]
};
