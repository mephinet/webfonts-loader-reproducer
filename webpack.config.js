const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webfontsGenerator = require("@vusion/webfonts-generator");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.font\.js/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "sass-loader",
          {
            loader: "webfonts-loader",
            options: {
              // TO TEST CSS
              cssTemplate: webfontsGenerator.templates.css,
              // TO TEST SCSS
              // cssTemplate: webfontsGenerator.templates.scss,
            },
          },
        ],
      },
    ],
  },
};
