import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';
import union from 'lodash/union';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualCellTree from '../CellTree/IndividualCellTree';

const mapStateToProps = ({ entities }) => ({
  datasets: entities.datasets,
  diseases: entities.diseases,
});

export function IndividualDiseaseTree(props) {
  const { datasets, diseases, diseaseId } = props;
  const diseaseTree = { collapsed: true, cellIds: [] };
  each(datasets, (ds) => {
    const { cells } = ds;
    if (ds.diseases.indexOf(parseInt(diseaseId, 10)) !== -1) {
      diseaseTree.cellIds = union(diseaseTree.cellIds, cells);
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
  datasets: PropTypes.object,
  diseases: PropTypes.object,
  diseaseId: PropTypes.string,
};

export default connect(mapStateToProps, {})(IndividualDiseaseTree);
