/* eslint global-require:0 */
// Load a different file in webpack depending on the NODE_ENV environemt variable.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./main.prod');
} else {
  module.exports = require('./main.dev');
}
