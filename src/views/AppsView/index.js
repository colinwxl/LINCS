import React, { Component } from 'react';

import PageBanner from 'components/PageBanner';
import styles from './AppsView.scss';

export default class AppsView extends Component {
  constructor(props) {
    super(props);
    this.state = { category: 'exp' };
  }

  _handleExpClicked = () => { this.setState({ category: 'exp' }); }
  _handleCompBioClicked = () => { this.setState({ category: 'compBio' }); }

  render() {
    const isExp = this.state.category === 'exp';
    const isCompBio = this.state.category === 'compBio';
    return (
      <div className={styles.wrapper}>
        <PageBanner title="LINCS Workflows & Applications" />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Workflows</h2>
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
              <h2>Applications</h2>
              <div className={styles.tools}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
