import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import range from 'lodash/range';

import DataTree from 'containers/DataTree';
import PageBanner from 'components/PageBanner';
import { loadDatasets } from 'actions/entities';
import handleResponse from 'utils/handleResponse';
import SearchResult from './SearchResult';
import ResultPlaceholder from './ResultPlaceholder';
import PageNav from 'components/PageNav';
import SearchBar from 'components/SearchBar';
import styles from './Releases.scss';

const mapStateToProps = (state) => ({ datasets: state.entities.datasets });
export class Releases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      q: '',
      searchResultIds: [],
    };
  }

  componentWillMount() {
    this.props.loadDatasets();
    this._findResults(this.props.location.query.q);
  }

  componentWillReceiveProps = (props) => {
    this._findResults(props.location.query.q);
  }

  _findResults = (query) => {
    if (this.state.isSearching) {
      return;
    }
    if (!query) {
      this.setState({
        isSearching: false,
        showSearchResults: false,
      });
      return;
    }
    this.setState({ isSearching: true });
    fetch(`/LINCS/api/v1/datasets/search?q=${query}`)
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(datasets => {
        this.setState({
          searchResultIds: datasets.map(ds => ds.id),
          isSearching: false,
          showSearchResults: true,
        });
      });
  }

  render() {
    const searchQ = this.props.location.query.q;
    const { datasets } = this.props;
    const { searchResultIds, isSearching } = this.state;
    let treeClass = styles['tree-wrap'];
    if (isSearching || searchQ) {
      treeClass += ` ${styles['tree-wrap-hidden']}`;
    }
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Data&nbsp;Releases"
          subTitle="Browse or search LINCS released&nbsp;datasets"
        />
        <div className="container">
          <div className="row">
            <PageNav mainPage="Releases" isDataPage />
            <div className="col-md-9 col-md-pull-3">
              <p>
                This page provides two modes to explore the currently
                available <Link to="/centers">LINCS Phase II</Link> datasets. All
                six <Link to="/centers/data-and-signature-generating-centers">LINCS Data
                and Signature Generation Centers (DSGCs)</Link> have released data to the
                community. These data are released according to the LINCS
                consortium <Link to="/data/release-policy">data release policy</Link>. The
                browse and search features provide unified access with links to the data, metadata
                as well as <Link to="/applications">data visualization and analysis tools</Link>.
              </p>
              <p>
                <strong>
                  For more expansive access to all LINCS datasets, please visit
                  the <a href="http://lincsportal.ccs.miami.edu/datasets" target="_blank">
                  LINCS Data Portal</a>.
                </strong>
              </p>
              <div className={styles['search-wrap']}>
                <SearchBar searchQuery={searchQ || ''} />
              </div>
              {
                isSearching &&
                <div className={styles.placeholders}>
                  <div className={`row ${styles.info}`}>
                    <div className="col-xs-6">
                      <a className={styles.back} onClick={this._backToTree}>
                        <i className="fa fa-chevron-left" /> Back to Tree View
                      </a>
                    </div>
                    <div className="col-xs-6">
                      <p className={styles.count}>
                        Searching for <span className={styles.query}>{searchQ}</span>...
                      </p>
                    </div>
                  </div>
                  {range(6).map((index) => <ResultPlaceholder key={index} />)}
                </div>
              }
              {
                !isSearching && !!searchQ &&
                <div className={styles['search-results']}>
                  <div className={`row ${styles.info}`}>
                    <div className="col-xs-6">
                      <Link to="/data/releases" className={styles.back}>
                        <i className="fa fa-chevron-left" /> Back to Tree View
                      </Link>
                    </div>
                    <div className="col-xs-6">
                      {
                        !!searchResultIds.length
                        ? (
                          <p className={styles.count}>
                            {searchResultIds.length} results
                            for <span className={styles.query}>{searchQ}</span>
                          </p>
                        ) : (
                          <p className={styles.count}>
                            No results found for <span className={styles.query}>{searchQ}</span>
                          </p>
                        )
                      }
                    </div>
                  </div>
                  <div className={styles.datasets}>
                    {
                      !!searchResultIds.length && !!Object.keys(datasets).length &&
                      searchResultIds.map(id =>
                        <SearchResult key={id} dataset={datasets[id]} />
                      )
                    }
                  </div>
                </div>
              }
              <div className={treeClass}>
                <DataTree />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Releases.propTypes = {
  datasets: PropTypes.object,
  location: PropTypes.object,
  loadDatasets: PropTypes.func,
};

export default connect(mapStateToProps, { loadDatasets })(Releases);
