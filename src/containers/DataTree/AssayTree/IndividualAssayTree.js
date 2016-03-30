import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export function IndividualAssayTree(props) {
  const { datasets, assayName, methodName, cellId, centerName } = props;
  const assayTree = { collapsed: true, datasets: [] };
  each(datasets, (ds) => {
    const { cells, assay, method } = ds;
    if ((assayName && assay === assayName) || (methodName && method === methodName)) {
      if (cellId && cells.indexOf(parseInt(cellId, 10)) !== -1) {
        assayTree.datasets.push(ds);
      } else if (centerName && ds.centerName === centerName) {
        assayTree.datasets.push(ds);
      } else if (!centerName && !cellId) {
        assayTree.datasets.push(ds);
      }
    }
  });

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (assayTree.datasets.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  let name = '';
  if (assayName) {
    name = assayName;
  } else if (methodName) {
    name = methodName;
  }

  label = <span className={styles.node}>{name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {assayTree.datasets.map((ds, index) => <p key={index}>{ds.id}</p>)}
    </Tree>
  );
}

IndividualAssayTree.propTypes = {
  datasets: PropTypes.object,
  assayName: PropTypes.string,
  methodName: PropTypes.string,
  cellId: PropTypes.number,
  centerName: PropTypes.string,
};

export default connect(mapStateToProps, {})(IndividualAssayTree);
