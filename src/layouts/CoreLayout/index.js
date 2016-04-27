import 'bootstrap';
// Import styles
import 'styles/core.scss';
import React from 'react';
import Navigation from 'components/Navigation';
import CitationsModal from 'containers/CitationsModal';
import Clustergram from 'containers/Clustergram';
// import coreStyles from './CoreLayout.scss';

export default function CoreLayout(props) {
  return (
    <div className="site-wrap">
      <Navigation atHome={props.location && props.location.pathname === '/'} />
      <CitationsModal />
      <Clustergram />
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
