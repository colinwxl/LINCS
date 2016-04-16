import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import AssayClassTree from './AssayClassTree';

export default function AssayTree(props) {
  const { datasets, assayClasses, assayMethods } = props;
  const label = <span className={styles.node}>By Assay</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        assayClasses.map((assayClass, index) =>
          <AssayClassTree
            key={index}
            datasets={datasets}
            assayClass={assayClass}
            assayMethods={assayMethods}
          />
        )
      }
    </Tree>
  );
}

AssayTree.propTypes = {
  datasets: PropTypes.array,
  assayClasses: PropTypes.array,
  assayMethods: PropTypes.array,
};
