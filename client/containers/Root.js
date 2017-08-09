import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import Footer from 'components/Footer';

const scrollToTop = () => window.scrollTo(0, 0);

/**
 * This is the highest-level component. It takes all of the routes and wraps
 * them in a <Provider /> and <Router /> component. The Footer is also included
 * here. This is to ensure that it is always at the bottom of the page.
 *
 * @param {Object} props An object with the history (used by react-router),
 * the store (used by react-redux), and the routes, which are all the routes of
 * the application.
 */
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
