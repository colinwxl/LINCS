import React, { PropTypes } from 'react';

import styles from './PageBanner.scss';

export default function PageBanner({ title, subTitle, imgSrc, imgAlt }) {
  return (
    <div className={styles.wrapper}>
      <div className={`container ${styles.inner}`}>
        <div className="row">
          <div className="col-md-8">
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </div>
          {
            !!imgSrc && !!imgSrc.length &&
            <div className="col-md-4 text-xs-center">
              <img
                className={styles.logo}
                src={imgSrc}
                alt={imgAlt && imgAlt.length ? imgAlt : 'Logo'}
              />
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
};
