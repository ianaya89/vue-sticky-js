const path   = require('path');
const config = require('./webpack.config');

config.entry = { 'vue-sticky-js': './src/index.js' };

config.output = {
  filename     :'vue-sticky-js.js',
  path         : path.join(__dirname, '../dist'),
  library      : 'vue-sticky-js',
  libraryTarget: 'umd'
};


module.exports = config;
