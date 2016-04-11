/* @flow */
import { applyMiddleware, createStore } from 'redux';
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
  return createStore(
    rootReducer,
    initialState,
<<<<<<< HEAD
    applyMiddleware(thunk, api, routerMiddleware(browserHistory))
=======
    applyMiddleware(thunk, api, routerMiddleware(history))
>>>>>>> 63245816f13db8e9ffd73634b0f858a48a5ba3e1
  );
}
