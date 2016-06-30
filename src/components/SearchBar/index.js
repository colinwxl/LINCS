import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';

import styles from './SearchBar.scss';
import icoSearchImg from './ico-search.svg';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: props.searchQuery || '',
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ q: props.searchQuery });
  }

  handleSearch = (e) => {
    this.setState({ q: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.push(`/data/releases?q=${this.state.q}`);
  }

  render() {
    return (
      <div className={styles['search-wrap']}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.search}>
            <div className={styles['search-bar']}>
              <div style={{ position: 'relative' }}>
                <input
                  name="q"
                  value={this.state.q}
                  onChange={this.handleSearch}
                  type="search"
                  placeholder="Search LINCS datasets"
                  autoCapitalize="off"
                  itemProp="query-input"
                  autoComplete="off"
                />
              </div>
            </div>
            <button
              style={{ backgroundImage: `url(${icoSearchImg})` }}
              className={`btn ${styles.submit} ${this.props.darkBg ? '' : styles.teal}`}
              type="submit"
            />
          </div>
        </form>
        <p className="text-xs-center">
          <strong>Examples: </strong>
          <Link to="/data/releases?q=MCF7">MCF7</Link>, <Link to="/data/releases?q=Imatinib">
          Imatinib</Link>, <Link to="/data/releases?q=HMS">
          HMS</Link>, <Link to="/data/releases?q=L1000">L1000</Link>
        </p>
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
