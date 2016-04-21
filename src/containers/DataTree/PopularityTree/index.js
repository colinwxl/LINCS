import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import Dataset from 'containers/Dataset';

export default function PopularityTree(props) {
  const label = <span className={styles.node}>By Popularity</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        props.datasetIds.map((dsId, i) =>
          <Dataset key={`dataset ${i}`} datasetId={dsId} showClicks />
        )
      }
    </Tree>
  );
}

PopularityTree.propTypes = {
  datasetIds: PropTypes.array,
};
