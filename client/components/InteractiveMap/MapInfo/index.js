import React from 'react';
import styles from './MapInfo.scss';

export default function MapInfo() {
  return (
    <div className={styles['map-info']} id="map-info">
      <div className={styles['map-title']}>
        Learn about LINCS Centers
      </div>

      <div className={styles['map-img-container']}>
      </div>
      <div className={styles['map-content']}>
        Select a center to display info.
      </div>
    </div>
  );
}
