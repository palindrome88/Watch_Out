var path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  stats: {
    warnings: false
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  }
};