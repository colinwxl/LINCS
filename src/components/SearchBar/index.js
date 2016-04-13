import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import styles from './SearchBar.scss';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: props.searchQuery || '',
    };
  }

  _handleSearch = (e) => {
    this.setState({ q: e.target.value });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.push(`/data/search?q=${this.state.q}`);
  }

  render() {
    return (
      <div className={styles['search-wrap']}>
        <form onSubmit={this._handleSubmit}>
          <div className={styles.search}>
            <div className={styles['search-bar']}>
              <div style={{ position: 'relative' }}>
                <input
                  name="q"
                  value={this.state.q}
                  onChange={this._handleSearch}
                  type="search"
                  placeholder="Search datasets (ex. MCF7, Vandetanib, HMS, L1000)"
                  autoCapitalize="off"
                  itemProp="query-input"
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              style={{
                backgroundImage: `url(${require('./ico-search.svg')})`,
              }}
              className={`btn ${styles.submit} ${this.props.darkBg ? '' : styles.teal}`}
              type="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  searchQuery: PropTypes.string,
  darkBg: PropTypes.bool,
  push: PropTypes.func,
};

export default connect(null, { push })(SearchBar);
