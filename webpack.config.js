let webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  plugins: [
    new webpack.DefinePlugin({
      SLACK_TOKEN: JSON.stringify(process.env.SLACK_TOKEN)
    })
  ]
};
