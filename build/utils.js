const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.cssLoaders = function(options) {
  options = options || {};

  function generateLoaders(loaders) {
    const sourceLoader = loaders.map((loader) => {
      let extraParamChar;

      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, '-loader?');
        extraParamChar = '&';
      } else {
        loader += '-loader';
        extraParamChar = '?';
      }

      return loader + (options.sourceMap ? `${extraParamChar}sourceMap` : '');
    }).join('!');

    if (options.extract) {
      return ExtractTextPlugin.extract('vue-style-loader', sourceLoader);
    }

    return ['vue-style-loader', sourceLoader].join('!');
  }

  return {
    css    : generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less   : generateLoaders(['css', 'less']),
    sass   : generateLoaders(['css', 'sass?indentedSyntax']),
    scss   : generateLoaders(['css', 'sass']),
    stylus : generateLoaders(['css', 'stylus']),
    styl   : generateLoaders(['css', 'stylus'])
  };
};

exports.styleLoaders = function(options) {
  const output = [];
  const loaders = exports.cssLoaders(options);

  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test  : new RegExp(`\\.${extension}$`),
      loader
    });
  }

  return output;
};
