import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

export default function IndividualCenterTree(props) {
  const { datasets, centerName } = props;
  const centerTree = { collapsed: true, assays: [], datasets: [] };
  datasets.forEach((ds) => {
    const { assay } = ds;
    if (centerName === ds.centerName) {
      centerTree.datasets.push(ds);
      if (centerTree.assays.indexOf(assay) === -1) {
        centerTree.assays.push(assay);
      }
    }
  });
  const label = <span className={styles.node}>{centerName}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        centerTree.assays.map((assayName, index) =>
          <IndividualAssayTree
            key={index}
            datasets={centerTree.datasets}
            assayName={assayName}
            centerName={centerName}
          />
        )
      }
    </Tree>
  );
}

IndividualCenterTree.propTypes = {
  datasets: PropTypes.array,
  centerName: PropTypes.string,
};
