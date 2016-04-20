import React, { PropTypes } from 'react';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from './IndividualAssayTree';

export default function AssayClassTree(props) {
  const { assayClass } = props;
  const label = <span className={styles.node}>{assayClass}</span>;
  const methods = [];
  const datasets = [];
  props.datasets.forEach(ds => {
    if (ds.classification === assayClass && methods.indexOf(ds.method) === -1) {
      methods.push(ds.method);
      datasets.push(ds);
    }
  });
  return (
    <Tree nodeLabel={label} defaultCollapsed>
      {
        methods.map((methodName, index) =>
          <IndividualAssayTree
            key={index}
            methodName={methodName}
            datasets={datasets}
          />
        )
      }
    </Tree>
  );
}

AssayClassTree.propTypes = {
  datasets: PropTypes.array,
  assayClass: PropTypes.string,
};
