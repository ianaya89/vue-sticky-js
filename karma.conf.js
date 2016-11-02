const path       = require('path');
const merge      = require('webpack-merge');

const baseConfig = require('./webpack.config');

const webpackConfig = merge(baseConfig, {
  devtool: '#inline-source-map'
});

delete webpackConfig.entry;

webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || [];

webpackConfig.module.preLoaders.unshift({
  test   : /\.js$/,
  loader : 'isparta',
  include: path.resolve('src/')
});

webpackConfig.module.loaders.some((loader, i) => {
  if (loader.loader === 'babel') {
    loader.include = path.resolve('test/');
    return true;
  }

  return false;
});

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    reporters: ['spec', 'coverage'],
    files: ['test/index.js'],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true },
    colors: true,
    logLevel: config.LOG_DISABLE,
    coverageReporter: {
      dir      : './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  });
};
