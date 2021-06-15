const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/src/',
    filename: 'main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    watchContentBase: true,
  },
};
