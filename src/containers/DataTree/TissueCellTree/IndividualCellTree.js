import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

export default function IndividualCellTree(props) {
  const { entities, datasets, cells, cellId } = props;
  const cellTree = { collapsed: true, assays: [], datasets: [] };
  if (datasets) {
    datasets.forEach((ds) => {
      const { assay } = ds;
      if (ds.cells.indexOf(parseInt(cellId, 10)) !== -1) {
        cellTree.datasets.push(ds);
        if (cellTree.assays.indexOf(assay) === -1) {
          cellTree.assays.push(assay);
        }
      }
    });
  } else {
    each(entities.datasets, (ds) => {
      const { assay } = ds;
      if (ds.cells.indexOf(parseInt(cellId, 10)) !== -1) {
        cellTree.datasets.push(ds);
        if (cellTree.assays.indexOf(assay) === -1) {
          cellTree.assays.push(assay);
        }
      }
    });
  }
  const cell = !!entities ? entities.cells[cellId] : cells[cellId];
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
  entities: PropTypes.object,
  datasets: PropTypes.array,
  cells: PropTypes.object,
  cellId: PropTypes.number,
};
