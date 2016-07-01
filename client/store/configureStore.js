/* eslint global-require:0 */
// Depending on the environment, load the proper store.
// The only different is that the production one does not have the DevTools.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
