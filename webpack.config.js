var webpack = require('webpack')
    , path = require('path');

module.exports = {
  context : path.join(__dirname, './'),
  entry: './src/Calculator.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx','.styl']
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style-loader','css-loader','stylus-loader'],
        include: path.join(__dirname, 'src/styl')
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
