import React from 'react';

import styles from './Search.scss';

export default function ResultPlaceholder() {
  return (
    <div className={styles.placeholder}>
      <div className={`${styles.meter} ${styles['meter-title']}`}>
        <span style={{ width: 200 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-subtitle']}`}>
        <span style={{ width: 85 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-desc']}`}>
        <span style={{ width: 550 }}></span>
      </div>
      <div className={`${styles.meter} ${styles['meter-links']}`}>
        <span style={{ width: 400 }}></span>
      </div>
    </div>
  );
}
