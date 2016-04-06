import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCellTree from './IndividualCellTree';

const mapStateToProps = ({ entities }) => ({
  cells: entities.cells,
  tissues: entities.tissues,
});

export function IndividualTissueTree(props) {
  const { cells, tissues, tissueId } = props;
  const diseaseTree = { collapsed: true, cellIds: [] };
  each(cells, (cell) => {
    if (cell.tissues.indexOf(parseInt(tissueId, 10)) !== -1) {
      diseaseTree.cellIds.push(cell.id);
    }
  });
  const disease = tissues[tissueId];
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

IndividualTissueTree.propTypes = {
  cells: PropTypes.object,
  tissues: PropTypes.object,
  tissueId: PropTypes.string,
};

export default connect(mapStateToProps, {})(IndividualTissueTree);
