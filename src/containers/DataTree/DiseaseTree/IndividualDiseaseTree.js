import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCellTree from '../CellTree/IndividualCellTree';

export default function IndividualDiseaseTree(props) {
  const { entities, diseaseId } = props;
  const diseaseTree = { collapsed: true, cellIds: [] };
  each(entities.cells, (cell) => {
    if (cell.diseases.indexOf(parseInt(diseaseId, 10)) !== -1) {
      diseaseTree.cellIds.push(cell.id);
    }
  });
  const disease = entities.diseases[diseaseId];
  const label = <span className={styles.node}>{disease.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        diseaseTree.cellIds.map((cellId, index) =>
          <IndividualCellTree key={index} entities={props.entities} cellId={cellId} />
        )
      }
    </Tree>
  );
}

IndividualDiseaseTree.propTypes = {
  entities: PropTypes.object,
  diseaseId: PropTypes.string,
};
