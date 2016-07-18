import React, { PropTypes } from 'react';
import moment from 'moment';
import DatasetContainer from '../../../containers/Dataset';

import styles from './Releases.scss';

export default function SearchResult(props) {
  const ds = props.dataset;
  if (!ds) {
    return null;
  }
  return (
    <div className={styles.dataset}>
      <div className={styles['ds-header']}>
        <h5>{DatasetContainer.getLink(ds, ds.method)}</h5>
        <p>Center: <span className={styles.creator}>{ds.center.name}</span></p>
      </div>
      <p className={`text-muted ${styles['info-date']}`}>
        Release date: <em>{moment(ds.dateReleased).format('MMM Do, YYYY')}</em>
      </p>
      <p className={styles.description}>Summary: {ds.description}</p>
      {DatasetContainer.getLink(ds, 'Click here to view dataset page')}
    </div>
  );
}

SearchResult.propTypes = {
  dataset: PropTypes.object,
};
