const path = require('path');
const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 8080,
    static: {
      directory: path.resolve(__dirname, '../')
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
