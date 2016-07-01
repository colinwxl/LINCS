// Import bootstrap globally
import 'bootstrap';

// Import styles globally
import 'styles/core.scss';
import React from 'react';
import Navigation from 'components/Navigation';
import CitationsModal from 'containers/CitationsModal';

export default function CoreLayout(props) {
  return (
    <div className="site-wrap">
      <Navigation atHome={props.location && props.location.pathname === '/'} />
      <CitationsModal />
      <div className="view-container">
        {
          /**
          * props.children are the child routes passed depending on what the endpoint is.
          * For example. Props.children will be the <About /> component if the url is
          * '/about'. These routes are specified in the routes/index.js
          */
        }
        {props.children}
      </div>
      {/* http://ryanfait.com/resources/footer-stick-to-bottom-of-page/ */}
      <div className="footer-push" />
    </div>
  );
}

CoreLayout.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.element,
};
