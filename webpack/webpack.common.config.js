const path = require('path');

const config = {
  entry: './src/js/index.js', // entry point for JS file for build process
  output: {
    path: path.resolve(__dirname, '../dist'), // naming build folder
    filename: 'main.js' // naming the JS file in build folder
  },
  module: {
    // each rule to import file types
    rules: [
      {
        // this object tell webpack whenever JS trying to import CSS file, please use those loaders
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = config;
