import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import AssayClassTree from './AssayClassTree';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export function AssayTree(props) {
  const { datasets } = props;
  const assayClasses = [];
  each(datasets, (ds) => {
    if (assayClasses.indexOf(ds.classification) === -1) {
      assayClasses.push(ds.classification);
    }
  });
  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (Object.keys(datasets).length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={`${styles.node} ${styles['outer-node']}`}>By Assay</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        assayClasses.map((assayClass, index) =>
          <AssayClassTree key={index} assayClass={assayClass} />
        )
      }
    </Tree>
  );
}

AssayTree.propTypes = {
  datasets: PropTypes.object,
  cells: PropTypes.object,
};

export default connect(mapStateToProps, {})(AssayTree);
