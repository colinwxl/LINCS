import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

export default function IndividualCellTree(props) {
  const { datasets, cells, cellId } = props;
  const cellTree = { collapsed: true, assays: [], datasets: [] };
  datasets.forEach((ds) => {
    const { assay } = ds;
    if (ds.cells.indexOf(parseInt(cellId, 10)) !== -1 && cellTree.assays.indexOf(assay) === -1) {
      cellTree.assays.push(assay);
      cellTree.datasets.push(ds);
    }
  });
  const cell = cells[cellId];
  const label = <span className={styles.node}>{cell.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        cellTree.assays.map((assayName, index) =>
          <IndividualAssayTree
            key={index}
            datasets={cellTree.datasets}
            assayName={assayName}
            cellId={cellId}
          />
        )
      }
    </Tree>
  );
}

IndividualCellTree.propTypes = {
  datasets: PropTypes.array,
  cells: PropTypes.object,
  cellId: PropTypes.number,
};
