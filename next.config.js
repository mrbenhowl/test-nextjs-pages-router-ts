const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    });
    config.plugins.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin({
        // without these Next.js will look for the generated stylesheets from the wrong place
        filename: "static/chunks/[chunkhash].css",
        chunkFilename: "static/chunks/[chunkhash].css"
      })
    );
    return config;
  }
};
