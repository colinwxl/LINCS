import React from 'react';
import ReactDOM from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Modal from 'react-modal';

import makeRoutes from './routes';
import Root from 'containers/Root';
import configureStore from 'store/configureStore';
// import { attemptLoginFromToken } from 'actions/auth';
import { loadDatasets } from 'actions/entities';

const historyConfig = { queryKey: false, basename: '/LINCS' };
const browserHistory = useRouterHistory(createHashHistory)(historyConfig);
const initialState = window.__INITIAL_STATE__;
const store = configureStore({ initialState, browserHistory });
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
});

// Bootstrap routes
const routes = makeRoutes(store);

// Attempt to login user from token if it exists
// const token = localStorage.getItem('token');
// if (token) {
//   store.dispatch(attemptLoginFromToken(token));
// }

// Load datasets to speed up loading of tree later
store.dispatch(loadDatasets());

const mountNode = document.getElementById('root');

// Let react-modal know where our app is mounted.
Modal.setAppElement(mountNode);

// Render to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  mountNode
);
