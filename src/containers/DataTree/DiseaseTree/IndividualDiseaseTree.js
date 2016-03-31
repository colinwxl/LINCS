import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCellTree from '../CellTree/IndividualCellTree';

const mapStateToProps = ({ entities }) => ({
  cells: entities.cells,
  diseases: entities.diseases,
});

export function IndividualDiseaseTree(props) {
  const { cells, diseases, diseaseId } = props;
  const diseaseTree = { collapsed: true, cellIds: [] };
  each(cells, (cell) => {
    if (cell.diseases.indexOf(parseInt(diseaseId, 10)) !== -1) {
      diseaseTree.cellIds.push(cell.id);
    }
  });
  const disease = diseases[diseaseId];
  const label = <span className={styles.node}>{disease.name}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        diseaseTree.cellIds.map((cellId, index) =>
          <IndividualCellTree key={index} cellId={cellId} />
        )
      }
    </Tree>
  );
}

IndividualDiseaseTree.propTypes = {
  cells: PropTypes.object,
  diseases: PropTypes.object,
  diseaseId: PropTypes.string,
};

export default connect(mapStateToProps, {})(IndividualDiseaseTree);
