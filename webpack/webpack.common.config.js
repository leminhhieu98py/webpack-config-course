const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: './src/js/index.js', // entry point for JS file for build process
  output: {
    path: path.resolve(__dirname, '../dist'), // naming build folder
    // filename: 'main.js' // naming the JS file in build folder
    filename: '[name].[contenthash].js' // naming the JS file in build folder
    // clean: true, // this clean have a bug from webpack for dev server
  },
  module: {
    // each rule to import file types
    rules: [
      {
        // this object tell webpack whenever JS trying to import CSS file, please use those loaders
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] // style-loader making into 1 one --> long time to load
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
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
    })
  ]
};

module.exports = config;
