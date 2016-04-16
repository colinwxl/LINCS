import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from './IndividualAssayTree';

export default function AssayClassTree(props) {
  const label = <span className={styles.node}>{props.assayClass}</span>;
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        props.assayMethods.map((methodName, index) =>
          <IndividualAssayTree
            key={index}
            methodName={methodName}
            datasets={props.datasets}
          />
        )
      }
    </Tree>
  );
}

AssayClassTree.propTypes = {
  datasets: PropTypes.array,
  assayClass: PropTypes.string,
  assayMethods: PropTypes.array,
};
