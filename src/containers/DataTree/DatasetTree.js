import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from './DataTree.scss';
import Tree from './Tree';

const mapStateToProps = ({ entities }) => ({
  datasets: entities.datasets,
});

export function DatasetTree(props) {
  const dataset = props.datasets[props.datasetId];
  const label = <span className={styles.node}>{dataset.fullAssayName}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      <div className={styles.dataset}>
        <p>Dataset!</p>
      </div>
    </Tree>
  );
}

DatasetTree.propTypes = {
  datasets: PropTypes.object,
  datasetId: PropTypes.number,
};

export default connect(mapStateToProps, {})(DatasetTree);
