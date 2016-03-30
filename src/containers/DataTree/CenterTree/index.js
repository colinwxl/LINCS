import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCenterTree from './IndividualCenterTree';

const mapStateToProps = ({ entities }) => ({
  datasets: entities.datasets,
});

export function AssayTree(props) {
  const centerNames = [];
  each(props.datasets, (ds) => {
    if (centerNames.indexOf(ds.centerName) === -1) {
      centerNames.push(ds.centerName);
    }
  });

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (centerNames.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles['outer-node']}`}>By Center</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        centerNames.map((centerName, index) =>
          <IndividualCenterTree key={index} centerName={centerName} />
        )
      }
    </Tree>
  );
}

AssayTree.propTypes = {
  datasets: PropTypes.object,
  cells: PropTypes.object,
};

export default connect(mapStateToProps, {})(AssayTree);
