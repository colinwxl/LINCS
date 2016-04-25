import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Modal from 'react-modal';

import makeRoutes from './routes';
import Root from 'containers/Root';
import configureStore from 'store/configureStore';

// browserHistory uses the HTML5 history API to keep track of the URL.
// This allows the app to read the URL and determine the correct component on
// page refreshes, etc.
const historyConfig = { basename: '/LINCS' };
const browserHistory = useRouterHistory(createBrowserHistory)(historyConfig);
// If using server-side rendering, the initial state of the app may be set on the window.
const initialState = window.__INITIAL_STATE__;

// Initialize the store using the browserHistory we created and the initialState if it
// exists
const store = configureStore({ initialState, browserHistory });
// Sync the history with the store for react-router, react-redux, and react-router-redux
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
});

// Bootstrap routes
const routes = makeRoutes(store);

// This node exists in the index.html file.
// This is where the application will be mounted.
const mountNode = document.getElementById('root');

// Let react-modal know where our app is mounted so it may create an overlay.
Modal.setAppElement(mountNode);

// Render to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  mountNode
);
