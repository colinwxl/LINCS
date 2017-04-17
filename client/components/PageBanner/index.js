import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from 'components/SearchBar';
import styles from './PageBanner.scss';

export default function PageBanner(props) {
  const { title, subTitle, imgSrc, imgAlt, includeSearchBar } = props;
  const hasImage = !!imgSrc && imgSrc.length;
  const alt = imgAlt && imgAlt.length ? imgAlt : 'Logo';
  let titleClass = 'col-xs-12';
  if (includeSearchBar) {
    titleClass = 'col-md-7';
  } else if (hasImage) {
    titleClass = 'col-md-8';
  }
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={`row ${styles.flex}`}>
          {
            !!title &&
              <div className={titleClass}>
                <h1>{title}</h1>
                {!!subTitle && <p className={styles.subtitle}>{subTitle}</p>}
              </div>
          }
          {
            hasImage &&
              <div className={`col-md-4 text-xs-center ${styles.flex}`}>
                <img
                  className={styles.logo}
                  src={imgSrc}
                  alt={alt}
                />
              </div>
          }
          {
            includeSearchBar &&
              <div className="col-md-5">
                <SearchBar query={props.searchQuery || ''} />
              </div>
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
