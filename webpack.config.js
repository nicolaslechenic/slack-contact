let webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new webpack.DefinePlugin({
      MY_API_KEY: process.env.MY_API_KEY || 'plop'
    })
  ]
};