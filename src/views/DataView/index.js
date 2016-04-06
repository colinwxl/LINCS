import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DataTree from 'containers/DataTree';
import styles from './DataView.scss';

const mapStateToProps = (state) => ({
  entities: state.entities,
});
// export function DataView(/* props */) {
export class DataView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: '',
      showSearchResults: false,
    };
  }

  _handleSearch = (e) => {
    this.setState({ q: e.target.value });
  }

  _handleFormSubmit = () => {
    // const { q } = this.state;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <div className={`container ${styles.inner}`}>
            <h1>LINCS Datasets</h1>
            {/* <div className={styles.search}>
              <form
                className={styles['search-form']}
                itemProp="potentialAction"
                itemScope=""
                itemType="http://schema.org/SearchAction"
                onSubmit={this._handleFormSubmit}
              >
                <div className={styles['search-bar']}>
                  <input
                    name="q"
                    value={this.state.q}
                    onChange={this._handleSearch}
                    type="search"
                    id="site-search"
                    placeholder="Search datasets"
                    autoCapitalize="off"
                    itemProp="query-input"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
            <input className={styles.submit} type="submit" /> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {!this.state.showSearchResults && <DataTree />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DataView.propTypes = {
  loginUser: PropTypes.func,
  entities: PropTypes.object,
};

export default connect(mapStateToProps, {})(DataView);
