import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import Dataset from 'containers/Dataset';

export default function PopularityTree(props) {
  let label = <span className={styles['loading-node']}>Loading...</span>;
  const dsKeys = Object.keys(props.datasets);
  if (dsKeys.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }
  const datasets = dsKeys.map(dsId => props.datasets[dsId]);
  datasets.sort((a, b) => {
    const result = a.clicks < b.clicks;
    return result ? 1 : -1;
  });

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
