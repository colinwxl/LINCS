import React from 'react';
import PropTypes from 'prop-types';

// import WorkflowsModule from './WorkflowsModule';
import AppsContainerModule from './ToolsAndTutorials/AppsContainerModule';
import PageBanner from 'components/PageBanner';
import styles from './AppsView.scss';

const sub = 'Tutorials, walkthroughs, and tools to help you be more productive with LINCS datasets';

export default function AppsView(props) {
  return (
    <div className={styles.wrapper}>
      <PageBanner title="LINCS tools Marketplace" subTitle={sub} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
          {/*
            <WorkflowsModule />
          */}
            <AppsContainerModule
              initialTab={props.location.query.initialTab}
              initialCenter={props.location.state}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

AppsView.propTypes = {
  location: PropTypes.object,
};
