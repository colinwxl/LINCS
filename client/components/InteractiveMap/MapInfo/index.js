import React from 'react';
import styles from './MapInfo.scss';

export default function MapInfo() {
  return (
    <div className={styles['map-info']} id="map-info">
      <div className={styles['map-title']}>
        Learn about BD2K Centers
      </div>

      <div className={styles['map-img-container']}>
        <img alt="img" />
      </div>
      <div className={styles['map-content']}>
        Mouse over a center to display info. Click to select.
        <br />
        <br />
          A list of all BD2K Centers is available
        <a href="">here</a>.
      </div>
    </div>
  );
}
