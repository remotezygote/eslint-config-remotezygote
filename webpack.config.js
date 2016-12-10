/* eslint-disable */
var webpack = require('webpack')
var PackageConfig = require('./package.json')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'remotezygote.min.js',
    library: true,
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
/* eslint-enable */
