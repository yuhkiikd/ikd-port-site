const path = require('path')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/*.scss'),
      ]
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'ikeda-port-site'
    }
  }
}