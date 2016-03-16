import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from 'containers/DevTools';

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <div style={{ height: '100%' }}>
        <Router history={props.history}>
          {props.routes}
        </Router>
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};
