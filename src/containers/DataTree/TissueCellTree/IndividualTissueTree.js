import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCellTree from './IndividualCellTree';

export default function IndividualTissueTree(props) {
  const { entities, tissueId } = props;
  const diseaseTree = { collapsed: true, cellIds: [] };
  each(entities.cells, (cell) => {
    if (cell.tissues.indexOf(parseInt(tissueId, 10)) !== -1) {
      diseaseTree.cellIds.push(cell.id);
    }
  });
  const disease = entities.tissues[tissueId];
  const label = <span className={styles.node}>{disease.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        diseaseTree.cellIds.map((cellId, index) =>
          <IndividualCellTree
            key={index}
            entities={entities}
            cellId={cellId}
          />
        )
      }
    </Tree>
  );
}

IndividualTissueTree.propTypes = {
  entities: PropTypes.object,
  tissueId: PropTypes.number,
};
