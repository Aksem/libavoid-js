const path = require("path")

module.exports = {
  context: path.resolve('src/'),
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "libavoid",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // wasm files should not be processed but just be emitted and we want
      // to have their public URL.
      {
        test: /\.(wasm)$/,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          publicPath: "dist/"
        }
      }
    ],
  },
//   optimization:{
//       minimize: false,
//       concatenateModules: false,
//   },
  // resolve: {
  //   modules: [path.resolve(__dirname, './src/') , path.resolve(__dirname, 'node_modules') ],
  //   extensions: ['js', 'wasm'],
  // },
  experiments: {
    asyncWebAssembly: true,
  },
//   mode: "development",
}
