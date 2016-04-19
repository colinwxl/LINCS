import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import handleResponse from 'utils/handleResponse';
import DataTree from 'containers/DataTree';
import Dataset from 'containers/Dataset';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
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
      searchResultIds: [],
      showSearchResults: false,
    };
  }

  _handleSearch = (e) => {
    this.setState({ q: e.target.value });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/LINCS/api/v1/datasets/search?q=${this.state.q}`)
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(datasets => {
        this.setState({
          searchResultIds: datasets.map(ds => ds.id),
          showSearchResults: true,
        });
      });
  }

  _backToTreeView = () => {
    this.setState({ showSearchResults: false });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner title="LINCS Datasets" />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Overview" isDataPage />
            <div className="col-md-9 col-md-pull-3">
              <h2 className={styles.title}>Introduction</h2>
              <p>
                The <Link to="/centers/data-and-signature-generating-centers">
                  LINCS Data and Signature Generation Centers
                </Link> produce
                a variety of data for the library. For such data to be standardized,
                integrated, and coordinated in a manner that promotes consistency
                and allows comparison across different cell types, assays and conditions,
                the <Link to="/centers/dcic">BD2K-LINCS DCIC</Link> together with the DSGCs
                develop and employ data standards.
              </p>
              <form onSubmit={this._handleSubmit}>
                <div className={styles.search}>
                  <div className={styles['search-bar']}>
                    <div style={{ position: 'relative' }}>
                      <input
                        name="q"
                        value={this.state.q}
                        onChange={this._handleSearch}
                        type="search"
                        placeholder="Search LINCS datasets"
                        autoCapitalize="off"
                        itemProp="query-input"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <button
                    style={{ backgroundImage: `url(${require('./ico-search.svg')})` }}
                    className={`btn ${styles.submit}`}
                    type="submit"
                  />
                </div>
              </form>
              <div className="row">
                <div className="col-xs-12">
                  {
                    !this.state.showSearchResults
                    ? <DataTree />
                    : (
                      <div className={styles['search-results']}>
                        <a onClick={this._backToTreeView}>{'<'} Back to Tree View</a>
                        <h4>
                          {this.state.searchResultIds.length} results found
                          for <span className={styles.query}>{this.state.q}</span>
                        </h4>
                        <div className={styles.datasets}>
                          {
                            this.state.searchResultIds.map(id =>
                              <Dataset key={id} className={styles.dataset} datasetId={id} />
                            )
                          }
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
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
