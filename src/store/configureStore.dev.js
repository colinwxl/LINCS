/* @flow */
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
import api from 'middleware/api';

export default function configureStore(config: Object): Object {
<<<<<<< HEAD
  const { browserHistory } = config;
=======
  const { history } = config;
>>>>>>> 63245816f13db8e9ffd73634b0f858a48a5ba3e1
  const initialState = config.initialState || {};

  // Compose final middleware and use devtools
  const devTools = window.devToolsExtension
    ? window.devToolsExtension()
    : require('containers/DevTools').default.instrument();

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(
    rootReducer,
    initialState,
    compose(
<<<<<<< HEAD
      applyMiddleware(thunk, api, routerMiddleware(browserHistory)),
=======
      applyMiddleware(thunk, api, routerMiddleware(history)),
>>>>>>> 63245816f13db8e9ffd73634b0f858a48a5ba3e1
      devTools
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
