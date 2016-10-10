import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ExpWorkflows from './Workflows/ExpWorkflows/ExpWorkflows';
import CompBioWorkflows from './Workflows/CompBioWorkflows/CompBioWorkflows';
import styles from './AppsView.scss';


export default class WorkflowsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workflowCategory: 'exp',
    };
  }
  handleExpClicked = () => { this.setState({ workflowCategory: 'exp' }); }
  handleCompBioClicked = () => { this.setState({ workflowCategory: 'compBio' }); }

  render() {
    const { workflowCategory } = this.state;
    const isExp = workflowCategory === 'exp';
    const isCompBio = workflowCategory === 'compBio';

    return (
      <div>
        <h2 className={styles['wf-title']}>Workflows</h2>
        <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
          <label
            onClick={this.handleExpClicked}
            className={`btn ${styles['category-check']} ${isExp ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="exp"
              defaultChecked={isExp}
            />
            For Experimentalists
          </label>
          <label
            onClick={this.handleCompBioClicked}
            className={`btn ${styles['category-check']} ${isCompBio ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="compBio"
              defaultChecked={isCompBio}
            />
            For Computational Biologists
          </label>
        </div>
        <div className={styles.workflow}>
          <ReactCSSTransitionGroup
            transitionName={{ enter: styles.enter, enterActive: styles['enter-active'] }}
            transitionEnterTimeout={750}
            transitionLeave={false}
          >
            {isExp ? <ExpWorkflows key="exp" /> : <CompBioWorkflows key="compBio" />}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
