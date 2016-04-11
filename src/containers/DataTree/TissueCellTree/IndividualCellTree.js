import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from '../AssayTree/IndividualAssayTree';

export default function IndividualCellTree(props) {
  const { entities, cellId } = props;
  const cellTree = { collapsed: true, assays: [] };
  each(entities.datasets, (ds) => {
    const { assay, cells } = ds;
    if (cells.indexOf(parseInt(cellId, 10)) !== -1 && cellTree.assays.indexOf(assay) === -1) {
      cellTree.assays.push(assay);
    }
  });
  const cell = entities.cells[cellId];
  const label = <span className={styles.node}>{cell.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        cellTree.assays.map((assayName, index) =>
          <IndividualAssayTree
            key={index}
            entities={entities}
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
  cellId: PropTypes.number,
};
