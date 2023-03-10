const path = require('path');
const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // modules: true // enough but if we want more hash for production, we can use below options
              modules: {
                localIdentName: '[local]--[md4:hash:7]'
              }
            }
          }
        ] // style-loader making into 1 one --> long time to load
      }
    ]
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, '../dist/index.html')
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true
    },
    client: {
      overlay: true
    },
    liveReload: false
  }
});
