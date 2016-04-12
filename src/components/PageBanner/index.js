import React, { PropTypes } from 'react';

import SearchBar from 'components/SearchBar';
import styles from './PageBanner.scss';

export default function PageBanner(props) {
  const { title, subTitle, imgSrc, imgAlt, includeSearchBar } = props;
  const hasImage = !!imgSrc && imgSrc.length;
  const alt = imgAlt && imgAlt.length ? imgAlt : 'Logo';
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
                alt={alt}
              />
            </div>
          }
          { includeSearchBar &&
            <div className="col-md-5">
              <SearchBar darkBg query={props.searchQuery || ''} />
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

PageBanner.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  searchQuery: PropTypes.string,
  includeSearchBar: PropTypes.bool,
};
