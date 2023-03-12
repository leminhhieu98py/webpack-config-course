const path = require('path');
const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', // improve development experience
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
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // if the image is < 10kB, webpack will inline this file into JS as a data URL
            // if the image is > 10kB, the webpack will put this file into the output directory
          }
        },
        generator: {
          filename: '[name].[ext]' //output for the images
        },
        use: [
          // we comment this since we will use ImageMinimizerPlugin
          {
            // using image-webpack-loader
            loader: 'image-webpack-loader',
            options: {
              mozjepg: {
                //JEPG
                quality: 40 // it can 0 - 100 but 40 gives balance between quality and size
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4 // speed of compression, 4 is default
              }
            }
          }
        ]
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
