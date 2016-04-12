/* @flow */
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers';
import api from 'middleware/api';

export default function configureStore(config: Object): Object {
  const { browserHistory } = config;
  const initialState = config.initialState || {};
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, api, routerMiddleware(browserHistory))
  );
}
