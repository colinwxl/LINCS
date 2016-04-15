import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import AssayClassTree from './AssayClassTree';

export default function AssayTree(props) {
  const { entities } = props;
  const assayClasses = [];
  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (Object.keys(entities.datasets).length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }
  each(entities.datasets, (ds) => {
    if (assayClasses.indexOf(ds.classification) === -1) {
      assayClasses.push(ds.classification);
    }
  });

  assayClasses.sort();

  label = <span className={`${styles.node} ${styles.node}`}>By Assay</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        assayClasses.map((assayClass, index) =>
          <AssayClassTree key={index} entities={entities} assayClass={assayClass} />
        )
      }
    </Tree>
  );
}

AssayTree.propTypes = {
  entities: PropTypes.object,
};
