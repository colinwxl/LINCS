import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualDiseaseTree from './IndividualDiseaseTree';

export default function DiseaseTree(props) {
  const diseases = [];
  each(props.entities.diseases, (disease, diseaseId) => {
    diseases.push({ id: diseaseId, name: disease.name });
  });

  diseases.sort((a, b) => {
    const result = a.name.toLowerCase() > b.name.toLowerCase();
    return result ? 1 : -1;
  });

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (diseases.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles.node}`}>By Disease</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        diseases.map((disease, index) =>
          <IndividualDiseaseTree key={index} entities={props.entities} diseaseId={disease.id} />
        )
      }
    </Tree>
  );
}

DiseaseTree.propTypes = {
  entities: PropTypes.object,
};
