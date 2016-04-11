import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCenterTree from './IndividualCenterTree';

export default function CenterTree(props) {
  const centerNames = [];
  each(props.entities.datasets, (ds) => {
    if (centerNames.indexOf(ds.centerName) === -1) {
      centerNames.push(ds.centerName);
    }
  });

  centerNames.sort();

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (centerNames.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles.node}`}>By Center</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        centerNames.map((centerName, index) =>
          <IndividualCenterTree key={index} entities={props.entities} centerName={centerName} />
        )
      }
    </Tree>
  );
}

CenterTree.propTypes = {
  entities: PropTypes.object,
};
