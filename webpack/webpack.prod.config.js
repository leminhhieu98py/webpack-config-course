const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // improve development experience
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerWebpackPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['imagemin-mozjpeg', { quality: 40 }],
              ['imagemin-pngquant', { quality: [0.65, 0.9], speed: 4 }],
              ['imagemin-gifsicle', { interlaced: true }],
              [
                'imagemin-svgo',
                {
                  plugins: [
                    {
                      name: 'preset-default',
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: 'http://www.w3.org/2000/svg' }
                              ]
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            ]
          }
        },
        generator: [
          {
            type: 'asset',
            preset: 'webp-custom-name',
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ['imagemin-webp']
            }
          }
        ]
      })
    ]
  },
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
                localIdentName: '[hash:base64]'
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
          filename: '[name].[contenthash:12][ext]' //output for the images
        }
        // use: [
        //   // we comment this since we will use ImageMinimizerPlugin
        //   {
        //     // using image-webpack-loader
        //     loader: 'image-webpack-loader',
        //     options: {
        //       mozjepg: {
        //         //JEPG
        //         quality: 40 // it can 0 - 100 but 40 gives balance between quality and size
        //       },
        //       pngquant: {
        //         quality: [0.65, 0.9],
        //         speed: 4 // speed of compression, 4 is default
        //       }
        //     }
        //   }
        // ]
      }
    ]
  }
});
