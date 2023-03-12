const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const config = {
  entry: './src/js/index.js', // entry point for JS file for build process
  output: {
    path: path.resolve(__dirname, '../dist'), // naming build folder
    // filename: 'main.js' // naming the JS file in build folder
    filename: '[name].[contenthash].js' // naming the JS file in build folder
    // clean: true, // this clean have a bug from webpack for dev server
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    // each rule to import file types
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader', // postcss-loader + autoprefixer can make sure CSS more compatible with old browser versions
          'less-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: 'style.css', // naming the CSS file in build folder
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: [
        '**/*',
        path.join(process.cwd(), '/build/**/*') // this allow us to clean other folders as well. build is an example folder
      ]
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`, {
        nodir: true
      })
    })
  ]
};

module.exports = config;
