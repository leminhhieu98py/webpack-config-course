const path = require('path');

const config = {
  entry: './src', // entry point for JS file for build process
  output: {
    path: path.resolve(__dirname, 'dist'), // naming build folder
    filename: 'main.js' // naming the JS file in build folder
  },
  mode: 'production'
};

module.exports = config;
