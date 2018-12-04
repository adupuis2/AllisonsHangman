const path = require('path');
const dir = path.dirname(__dirname);

module.exports = {
  src: path.join(dir, 'src'),
  build: path.join(dir, 'target/dist'),
  images: path.join(dir, 'src/images'),
  components: path.join(dir, 'src/components'),
  util: path.join(dir, 'src/util'),
  node_modules: path.join(dir, 'node_modules'),
  test: path.join(dir, 'test'),
  translations: path.join(dir, 'translations'),
};
