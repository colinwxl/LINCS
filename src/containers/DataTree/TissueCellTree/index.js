import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualTissueTree from './IndividualTissueTree';

export default function TissueCellTree(props) {
  const tissues = props.entities.tissues;

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (Object.keys(tissues).length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={styles.node}>By Tissue/Cell Line</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        Object.keys(tissues).map((tissueId, index) =>
          <IndividualTissueTree
            key={index}
            entities={props.entities}
            tissueId={parseInt(tissueId, 10)}
          />
        )
      }
    </Tree>
  );
}

TissueCellTree.propTypes = {
  entities: PropTypes.object,
};
