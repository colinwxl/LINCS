import React from 'react';

import styles from './Search.scss';

export default function ResultPlaceholder() {
  return (
    <div className={styles.placeholder}>
      <div className={`${styles.meter} ${styles['meter-title']}`}>
        <span style={{ width: 250 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-subtitle']}`}>
        <span style={{ width: 150 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-date']}`}>
        <span style={{ width: 100 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-desc']}`}>
        <span style={{ width: 500 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-links']}`}>
        <span style={{ width: 400 }}></span>
      </div>
    </div>
  );
}
