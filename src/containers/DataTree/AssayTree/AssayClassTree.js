import React, { PropTypes } from 'react';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from './IndividualAssayTree';

export default function AssayClassTree(props) {
  const { entities, assayClass } = props;
  const assayClassTree = { collapsed: true, methods: [], datasets: [] };
  each(entities.datasets, (ds) => {
    const { classification, method } = ds;
    if (assayClass === classification) {
      assayClassTree.datasets.push(ds);
      if (assayClassTree.methods.indexOf(method) === -1) {
        assayClassTree.methods.push(method);
      }
    }
  });

  assayClassTree.methods.sort();

  let label = <span className={styles['loading-node']}>Loading...</span>;
  if (assayClassTree.methods.length === 0) {
    return <Tree nodeLabel={label} defaultCollapsed />;
  }

  label = <span className={styles.node}>{assayClass}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        assayClassTree.methods.map((methodName, index) =>
          <IndividualAssayTree
            key={index}
            datasets={assayClassTree.datasets}
            methodName={methodName}
          />
        )
      }
    </Tree>
  );
}

AssayClassTree.propTypes = {
  entities: PropTypes.object,
  assayClass: PropTypes.string,
};
