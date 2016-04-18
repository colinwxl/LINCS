import 'bootstrap';
// Import styles
import 'styles/core.scss';
import React from 'react';
import Navigation from 'components/Navigation';
// import coreStyles from './CoreLayout.scss';

function CoreLayout(props) {
  return (
    <div className="site-wrap">
      <Navigation atHome={props.location && props.location.pathname === '/'} />
      <div className="view-container">
        {props.children}
      </div>
      <div className="footer-push" />
    </div>
  );
}

CoreLayout.propTypes = {
  location: React.PropTypes.object,
  children: React.PropTypes.element,
};

export default CoreLayout;
