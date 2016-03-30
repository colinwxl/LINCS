import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

const mapStateToProps = ({ entities }) => ({
  datasets: entities.datasets,
  cells: entities.cells,
});

export function IndividualCenterTree(props) {
  const { datasets, centerName } = props;
  const centerTree = { collapsed: true, assays: [] };
  each(datasets, (ds) => {
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
          <IndividualAssayTree key={index} assayName={assayName} centerName={centerName} />
        )
      }
    </Tree>
  );
}

IndividualCenterTree.propTypes = {
  datasets: PropTypes.object,
  cells: PropTypes.object,
  centerName: PropTypes.string,
};

export default connect(mapStateToProps, {})(IndividualCenterTree);
