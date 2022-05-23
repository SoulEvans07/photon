const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
  test: /\.(scss|sass)$/,
  exclude: /\.module\.(scss|sass)$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'sass-loader', options: { sourceMap: true } },
  ],
  sideEffects: true,
});

module.exports = {
  target: ['electron-renderer', 'es2020'],
  devtool: 'source-map',
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
};
