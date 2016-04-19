import React, { Component } from 'react';

import PageBanner from 'components/PageBanner';
import handleResponse from 'utils/handleResponse';
import ExpWorkflows from './ExpWorkflows';
import CompBioWorkflows from './CompBioWorkflows';
import Tool from './Tool';
import styles from './AppsView.scss';

export default class AppsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingTools: true,
      workflowCategory: 'exp',
      tools: [],
    };
  }

  componentDidMount() {
    fetch('/LINCS/api/v1/tools')
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(tools => {
        this.setState({
          fetchingTools: false,
          tools,
        });
      });
  }

  _handleExpClicked = () => { this.setState({ workflowCategory: 'exp' }); }
  _handleCompBioClicked = () => { this.setState({ workflowCategory: 'compBio' }); }

  render() {
    const isExp = this.state.workflowCategory === 'exp';
    const isCompBio = this.state.workflowCategory === 'compBio';
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflows & Applications"
          subTitle="Tutorials, walkthroughs, and tools to help you be more productive."
        />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className={styles['wf-title']}>Workflows</h2>
              <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
                <label
                  onClick={this._handleExpClicked}
                  className={`btn ${styles['category-check']} ${isExp ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="exp"
                    defaultChecked={isExp}
                  />
                  For an Experimentalist
                </label>
                <label
                  onClick={this._handleCompBioClicked}
                  className={`btn ${styles['category-check']} ${isCompBio ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="compBio"
                    defaultChecked={isCompBio}
                  />
                  For a Computational Biologist
                </label>
              </div>
              {isExp ? <ExpWorkflows /> : <CompBioWorkflows />}
              <h2>Applications</h2>
              <div className={styles.tools}>
                {this.state.tools.map(tool => <Tool key={tool.id} tool={tool} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
