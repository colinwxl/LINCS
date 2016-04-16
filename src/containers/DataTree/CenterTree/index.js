import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCenterTree from './IndividualCenterTree';


export default function CenterTree(props) {
  const label = <span className={styles.node}>By Center</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        props.centerNames.map((centerName, index) =>
          <IndividualCenterTree
            key={index}
            datasets={props.datasets}
            centerName={centerName}
          />
        )
      }
    </Tree>
  );
}

CenterTree.propTypes = {
  centerNames: PropTypes.array,
  datasets: PropTypes.array,
};
