import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

export default function IndividualCellTree(props) {
  const { entities, cells, cellId } = props;
  const assays = [];
  const datasets = [];
  each(entities.datasets, (ds) => {
    const { assay } = ds;
    if (ds.cells.indexOf(parseInt(cellId, 10)) !== -1) {
      datasets.push(ds);
      if (assays.indexOf(assay) === -1) {
        assays.push(assay);
      }
    }
  });
  const cell = !!entities ? entities.cells[cellId] : cells[cellId];
  const label = <span className={styles.node}>{cell.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        assays.map((assayName, index) =>
          <IndividualAssayTree
            key={index}
            datasets={datasets}
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
  cells: PropTypes.object,
  cellId: PropTypes.number,
};
