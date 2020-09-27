const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./server/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
    publicPath: "/",
  },
  target: "node",
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: `'production'`,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
