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

export function IndividualCellTree(props) {
  const { datasets, cellId } = props;
  const cellTree = { collapsed: true, assays: [] };
  each(datasets, (ds) => {
    const { assay, cells } = ds;
    if (cells.indexOf(parseInt(cellId, 10)) !== -1 && cellTree.assays.indexOf(assay) === -1) {
      cellTree.assays.push(assay);
    }
  });
  const cell = props.cells[cellId];
  const label = <span className={styles.node}>{cell.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        cellTree.assays.map((assayName, index) =>
          <IndividualAssayTree key={index} assayName={assayName} cellId={cellId} />
        )
      }
    </Tree>
  );
}

IndividualCellTree.propTypes = {
  datasets: PropTypes.object,
  cells: PropTypes.object,
  cellId: PropTypes.number,
};

export default connect(mapStateToProps, {})(IndividualCellTree);
