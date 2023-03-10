const path = require('path');

const config = {
  entry: './src/js/index.js', // entry point for JS file for build process
  output: {
    path: path.resolve(__dirname, '../dist'), // naming build folder
    filename: 'main.js' // naming the JS file in build folder
  }
};

module.exports = config;
