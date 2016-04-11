import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

export default function IndividualCenterTree(props) {
  const { entities, centerName } = props;
  const centerTree = { collapsed: true, assays: [] };
  each(entities.datasets, (ds) => {
    const { assay } = ds;
    if (centerName === ds.centerName && centerTree.assays.indexOf(assay) === -1) {
      centerTree.assays.push(assay);
    }
  });
  const label = <span className={styles.node}>{centerName}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        centerTree.assays.map((assayName, index) =>
          <IndividualAssayTree
            key={index}
            entities={entities}
            assayName={assayName}
            centerName={centerName}
          />
        )
      }
    </Tree>
  );
}

IndividualCenterTree.propTypes = {
  entities: PropTypes.object,
  centerName: PropTypes.string,
};
