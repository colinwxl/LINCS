import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import styles from './PageBanner.scss';

export class PageBanner extends Component {
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
    const { title, subTitle, imgSrc, imgAlt, includeSearchBar } = this.props;
    const hasImage = !!imgSrc && imgSrc.length;
    return (
      <div className={styles.wrapper}>
        <div className={`container ${styles.inner}`}>
          <div className={`row ${styles.flex}`}>
            <div className={includeSearchBar ? 'col-md-7' : 'col-md-8'}>
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </div>
            {
              hasImage &&
              <div className="col-md-4 text-xs-center">
                <img
                  className={styles.logo}
                  src={imgSrc}
                  alt={imgAlt && imgAlt.length ? imgAlt : 'Logo'}
                />
              </div>
            }
            { includeSearchBar &&
              <div className="col-md-5">
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
              </div>
            }
            {
              !hasImage && !includeSearchBar && <div className="col-md-4"></div>
            }
          </div>
        </div>
      </div>
    );
  }
}

PageBanner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  searchQuery: PropTypes.string,
  includeSearchBar: PropTypes.bool,
  push: PropTypes.func,
};

export default connect(null, { push })(PageBanner);
