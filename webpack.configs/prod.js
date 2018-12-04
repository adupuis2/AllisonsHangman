const common = require('./common');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  ...common,
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      compressionOptions: {
        numiterations: 15,
      },
      filename: '[path].gz[query]',
      minRatio: 0.8,
      test: /\.tsx?$|\.jsx?$|\.css$|\.html$/,
      threshold: 0,
    }),
  ],
};
