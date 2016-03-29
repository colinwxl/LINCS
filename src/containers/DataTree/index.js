import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';

import styles from './DataTree.scss';
import Tree from './Tree';
import { fetchDatasets } from 'actions/entities';

const mapStateToProps = ({ entities }) => ({
  datasets: entities.datasets,
  cells: entities.cells,
  tissues: entities.tissues,
  diseases: entities.diseases,
  smallMolecules: entities.smallMolecules,
});

export class DataTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: {
        'By General Classification': {},
        // 'By Assay': {},
        // 'By Cell Line': {},
      },
    };
  }

  componentWillMount() {
    this.props.fetchDatasets();
  }

  componentDidMount = () => {
    this._buildTree(this.props);
  }

  componentWillReceiveProps(props) {
    this._buildTree(props);
  }

  _buildTree = ({ datasets }) => {
    const tree = extend(true, {}, this.state.tree);
    const classes = {};
    datasets.forEach(ds => {
      const dataset = extend(true, {}, ds);
      const { classification, assay } = dataset;
      const key = classification.length ? classification : 'No classification';
      dataset.collapsed = true;
      if (classes.hasOwnProperty(key)) {
        if (classes[key].datasets.hasOwnProperty(assay)) {
          classes[key].datasets[assay].push(dataset);
        } else {
          classes[key].datasets[assay] = [dataset];
        }
      } else {
        classes[key] = {
          collapsed: true,
          datasets: {
            [assay]: [dataset],
          },
        };
      }
    });
    tree['By General Classification'] = classes;
    this.setState({ tree });
  }

  _handleClick = (i) => {
    const [...collapsedBook] = this.state.collapsedBook;
    collapsedBook[i] = !collapsedBook[i];
    this.setState({ collapsedBook });
  }

  _collapseAll = () => {
    this.setState({
      collapsedBook: this.state.collapsedBook.map(() => true),
    });
  }

  render() {
    const { tree } = this.state;
    return (
      <div className={styles.wrapper}>
        {
          Object.keys(tree).map((category, index) => {
            const outerLabel = <span className={styles.node}>{category}</span>;
            return (
              <Tree key={`${category}|${index}`} nodeLabel={outerLabel} defaultCollapsed>
                {
                  Object.keys(tree[category]).map((dsClass, i) => {
                    const { datasets } = tree[category][dsClass];
                    const label = <span className={styles.node}>{dsClass}</span>;
                    return (
                      <Tree key={`${dsClass}|${i}`} nodeLabel={label} defaultCollapsed>
                        {
                          Object.keys(datasets).map((assay, ind) => {
                            const dSets = datasets[assay];
                            const innerLabel = (
                              <span className={styles.node}>
                                {!!assay ? assay : 'No assay specified'}
                              </span>
                            );
                            return (
                              <Tree nodeLabel={innerLabel} key={ind} defaultCollapsed>
                                {
                                  dSets.map(ds => {
                                    const innerL = (
                                      <span className={styles.node}>{ds.lincsId}</span>
                                    );
                                    return (
                                      <Tree nodeLabel={innerL} key={ds.id} defaultCollapsed>
                                        <div>{ds.fullAssayName}</div>
                                      </Tree>
                                    );
                                  })
                                }
                              </Tree>
                            );
                          })
                        }
                      </Tree>
                    );
                  })
                }
              </Tree>
            );
          })
        }
      </div>
    );
  }
}

DataTree.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  fetchDatasets: PropTypes.func.isRequired,
  datasets: PropTypes.array,
  cells: PropTypes.array,
  tissues: PropTypes.array,
  diseases: PropTypes.array,
  smallMolecules: PropTypes.array,
};

export default connect(mapStateToProps, { fetchDatasets })(DataTree);
