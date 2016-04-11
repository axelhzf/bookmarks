module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: "dist/assets/",
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  },
  devServer: {
    contentBase: "src"
  }
};