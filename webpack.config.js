const path = require("path");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  mode: "development", // 打包的模式, production | development
  plugins: [
    // 将HTML也托管到内存中
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      //加载css
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      //加载less
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }
    ]
  }
};
