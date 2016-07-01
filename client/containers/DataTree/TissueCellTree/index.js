import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualTissueTree from './IndividualTissueTree';

export default function TissueCellTree(props) {
  const tissueObj = props.entities.tissues;
  const tissues = Object.keys(tissueObj).map((id) => tissueObj[id]);
  tissues.sort((a, b) => {
    const result = a.name > b.name;
    return result ? 1 : -1;
  });

  const label = <span className={styles.node}>By Tissue/Cell Line</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        tissues.map((tissue, index) =>
          <IndividualTissueTree
            key={index}
            entities={props.entities}
            tissueId={parseInt(tissue.id, 10)}
          />
        )
      }
    </Tree>
  );
}

TissueCellTree.propTypes = {
  entities: PropTypes.object,
};
