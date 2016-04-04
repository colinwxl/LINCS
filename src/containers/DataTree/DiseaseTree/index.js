import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualDiseaseTree from './IndividualDiseaseTree';

const mapStateToProps = ({ entities }) => ({
  diseases: entities.diseases,
});

export function DiseaseTree(props) {
  const { diseases } = props;
  const diseaseKeys = Object.keys(diseases);
  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (diseaseKeys.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles.node}`}>By Disease</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        diseaseKeys.map((diseaseId, index) =>
          <IndividualDiseaseTree key={index} diseaseId={diseaseId} />
        )
      }
    </Tree>
  );
}

DiseaseTree.propTypes = {
  diseases: PropTypes.object,
};

export default connect(mapStateToProps, {})(DiseaseTree);
