var path = require('path');

module.exports = function(config) {
  return config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: ['test/spec/**/*.js'],
    plugins: [
      require('karma-webpack'),
      require('karma-phantomjs-launcher'),
      require('karma-mocha'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-ie-launcher'),
      require('karma-safari-launcher')
    ],
    exclude: ['node_modules/'],
    preprocessors: {
      './test/**/*.js': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
        root: __dirname,
        modulesDirectories: ['', 'src', 'node_modules']
      },
      module: {
        loaders: [
          {
            test: /\.js[x*]?$/,
            loaders: ['inject-loader!babel-loader'],
            exclude: path.join(__dirname, 'node_modules')
          }, {
            test: /\.json$/,
            loaders: ['json-loader']
          }
        ]
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.INFO,
    autoWatch: true,
    browsers: win ? ['PhantomJS', 'Chrome', 'IE', 'Firefox'] : ['PhantomJS', 'Chrome', 'Safari', 'Firefox'],
    singleRun: false
  });
};

var win = /^win/.test(process.platform);
