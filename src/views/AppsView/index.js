import React, { Component } from 'react';

import PageBanner from 'components/PageBanner';
import styles from './AppsView.scss';

export default class AppsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'biologist',
    };
  }

  _handleBiologistClicked = () => {
    this.setState({ category: 'biologist' });
  }

  _handleBioinfClicked = () => {
    this.setState({ category: 'bioinformatician' });
  }

  render() {
    const isBiologist = this.state.category === 'biologist';
    const isBioinf = this.state.category === 'bioinformatician';
    return (
      <div className={styles.wrapper}>
        <PageBanner title="Workflows & Applications" />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2>Workflows</h2>
              <div className={`btn-group ${styles.categories}`} data-toggle="buttons">
                <label
                  onClick={this._handleBiologistClicked}
                  className={`btn ${styles['category-check']} ${isBiologist ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="biologist"
                    defaultChecked={isBiologist}
                  />
                  For a Biologist
                </label>
                <label
                  onClick={this._handleBioinfClicked}
                  className={`btn ${styles['category-check']} ${isBioinf ? styles.active : ''}`}
                >
                  <input
                    type="radio"
                    name="bioinformatician"
                    defaultChecked={isBioinf}
                  />
                  For a Bioinformatician
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
