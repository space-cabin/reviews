const path = require('path');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new BrotliPlugin({
      asset: '[file].br',
      test: /\.(js)$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
