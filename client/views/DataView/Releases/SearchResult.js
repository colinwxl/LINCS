import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import styles from './Releases.scss';

export default function SearchResult(props) {
  const ds = props.dataset;
  if (!ds) {
    return null;
  }
  return (
    <div className={styles.dataset}>
      <div className={styles['ds-header']}>
        <h5>
          <Link to={`/data/releases/${ds.id}`}>{ds.lincsId} - {ds.method}</Link>
        </h5>
        <p>Center: <span className={styles.creator}>{ds.center.name}</span></p>
      </div>
      <p className={`text-muted ${styles['info-date']}`}>
        Release date: <em>{moment(ds.dateReleased).format('MMM Do, YYYY')}</em>
      </p>
      <p className={styles.description}>Summary: {ds.description}</p>
      <Link to={`/data/releases/${ds.id}`} className={styles.link}>
        Click here to view dataset page
      </Link>
    </div>
  );
}

SearchResult.propTypes = {
  dataset: PropTypes.object,
};
