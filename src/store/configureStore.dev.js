// This file creates the redux store to be used in development.
// Some examples:
// https://github.com/reactjs/redux/blob/master/examples/real-world/store/configureStore.dev.js
// https://github.com/reactjs/react-router-redux/blob/master/examples/server/store.js

import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
import api from 'middleware/api';

export default function configureStore(config: Object): Object {
  const { browserHistory } = config;
  const initialState = config.initialState || {};

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(
    rootReducer,
    initialState,
    // http://redux.js.org/docs/api/compose.html
    // This applies the thunk, api, and router middleware used by the app.
    compose(
      applyMiddleware(thunk, api, routerMiddleware(browserHistory)),
      // You must have the Redux DevTools Chrome Extenstion installed.
      // https://github.com/zalmoxisus/redux-devtools-extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // Webpack hot module replacement. This allows us to live reload the data and
  // even perform 'time traveling'. For more information on this, visit the docs
  // on react-transform-hmr: https://github.com/gaearon/react-transform-hmr
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint global-require:0 */
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
