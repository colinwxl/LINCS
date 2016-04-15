import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import Dataset from 'containers/Dataset';

export default function PopularityTree(props) {
  const datasets = Object.keys(props.datasets).map(dsId => props.datasets[dsId]);
  datasets.sort((a, b) => {
    const result = a.clicks < b.clicks;
    return result ? 1 : -1;
  });

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (datasets.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={styles.node}>By Popularity</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {datasets.map((ds, i) => <Dataset key={`dataset ${i}`} datasetId={ds.id} />)}
    </Tree>
  );
}

PopularityTree.propTypes = {
  datasets: PropTypes.object,
  incrementDatasetClicks: PropTypes.func,
};
