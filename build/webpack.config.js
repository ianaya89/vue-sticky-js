const webpack = require('webpack');
const path    = require('path');
const utils   = require('./utils');

const projectRoot = path.resolve(__dirname, '../');

module.exports = {
  entry: './docs/main.js',

  output: {
    path: './docs/build',
    publicPath: 'docs/build/',
    filename: 'docs.js'
  },

  devtool: 'source-map',

  resolve: { root: path.resolve('./') },

  module: {
    preLoaders: [
      {
        test   : /\.vue$/,
        loader : 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test   : /\.js$/,
        loader : 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=64000'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=64000'
      },
      {
        test  : /\.vue$/,
        loader: 'vue'
      },
      {
        test   : /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader : 'babel'
      },
      {
        test  : /\.css$/,
        loader: 'style-loader!css-loader?root=./docs/'
      },
      {
        test  : /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  vue: {
    loaders: utils.cssLoaders()
  }
};


if (process.env.NODE_ENV === 'production') {
  delete module.exports.devtool;

  module.exports.plugins = [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ];
}
