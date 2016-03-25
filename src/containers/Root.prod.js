import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import Footer from 'components/Footer';

const scrollToTop = () => window.scrollTo(0, 0);

export default function Root(props) {
  return (
    <Provider store={props.store}>
      <div style={{ height: '100%' }}>
        <Router onUpdate={scrollToTop} history={props.history}>
          {props.routes}
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};
