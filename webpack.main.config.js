module.exports = {
  entry: './src/index.ts',
  target: ['electron-main', 'es2020'],
  devtool: 'source-map',
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
};
