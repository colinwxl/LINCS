import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import Dataset from 'containers/Dataset';

export default function AlphabeticalTree(props) {
  const label = <span className={styles.node}>By Alphabetical Order</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        props.datasetIds.map((dsId, i) =>
          <Dataset key={`dataset ${i}`} datasetId={dsId} />
        )
      }
    </Tree>
  );
}

AlphabeticalTree.propTypes = {
  datasetIds: PropTypes.array,
};
