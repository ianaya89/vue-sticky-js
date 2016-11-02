const path   = require('path');
const config = require('./webpack.config');

config.entry = { 'vue-sticky': './src/index.js' };

config.output = {
  filename     :'vue-sticky.js',
  path         : path.join(__dirname, '../dist'),
  library      : 'vue-sticky',
  libraryTarget: 'umd'
};


module.exports = config;
