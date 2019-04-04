const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve:{
    alias:{
      app_constants: path.resolve(__dirname, 'src/redux/constants/'),
      app_styles: path.resolve(__dirname, 'src/styles/'),
      app_actions: path.resolve(__dirname, 'src/redux/actions/'),
      app_reducers: path.resolve(__dirname, 'src/redux/reducers/'),
      app_redux: path.resolve(__dirname, 'src/redux/'),
      app_components: path.resolve(__dirname, 'src/components/'),
      app_common: path.resolve(__dirname, 'src/components/Common'),
      app_icons: path.resolve(__dirname, 'src/icons'),
    }
  }
};