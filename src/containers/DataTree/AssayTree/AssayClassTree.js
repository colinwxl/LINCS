import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import each from 'lodash/each';

import styles from '../DataTree.scss';
import Tree from '../Tree';
import IndividualAssayTree from './IndividualAssayTree';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export function AssayClassTree(props) {
  const { datasets, assayClass } = props;
  const assayClassTree = { collapsed: true, methods: [] };
  each(datasets, (ds) => {
    const { classification, method } = ds;
    if (assayClass === classification && assayClassTree.methods.indexOf(method) === -1) {
      assayClassTree.methods.push(method);
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
          <IndividualAssayTree key={index} methodName={methodName} />
        )
      }
    </Tree>
  );
}

AssayClassTree.propTypes = {
  datasets: PropTypes.object,
  assayClass: PropTypes.string,
};

export default connect(mapStateToProps, {})(AssayClassTree);
