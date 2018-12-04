const webpack = require('webpack');
const common = require('./common');

module.exports = {
  ...common,
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    port: 8080,
  },
  plugins: [
    ...common.plugins,
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    // Uncomment to analyze stuff
    // new BundleAnalyzerPlugin(),
  ],
};
