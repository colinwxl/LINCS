import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import range from 'lodash/range';

import { loadDatasets } from 'actions/entities';
import handleResponse from 'utils/handleResponse';
import SearchResult from './SearchResult';
import ResultPlaceholder from './ResultPlaceholder';
import SearchBar from 'components/SearchBar';
import styles from './Search.scss';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});
// export function Search(/* props */) {
export class Search extends Component {
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
    this.setState({ isSearching: true });
    fetch(`/LINCS/api/v1/datasets/search?q=${query}`)
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(datasets => {
        this.setState({
          searchResultIds: datasets.map(ds => ds.id),
          isSearching: false,
        });
      });
  }

  render() {
    const searchQ = this.props.location.query.q;
    const { datasets } = this.props;
    const { searchResultIds, isSearching } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles['search-bar-wrap']}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <SearchBar searchQuery={searchQ} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
                {
                  isSearching
                  ? (
                    <div className={styles.placeholders}>
                      {range(6).map((index) => <ResultPlaceholder key={index} />)}
                    </div>
                  )
                  : (
                    <div className={styles['search-results']}>
                      <p className={styles.count}>
                        {searchResultIds.length} results
                        for <span className={styles.query}>{searchQ}</span>
                      </p>
                      <div className={styles.datasets}>
                        {
                          searchResultIds.map(id =>
                          <SearchResult key={id} dataset={datasets[id]} />)
                        }
                      </div>
                    </div>
                  )
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  datasets: PropTypes.object,
  location: PropTypes.object,
  loadDatasets: PropTypes.func,
};

export default connect(mapStateToProps, { loadDatasets })(Search);
