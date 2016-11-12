import React from 'react';
import styles from './CenterWidgetsContainer.scss';
import CenterInfoWidget from 'components/CenterInfoWidget';

import centersInfo from './centers_info';

export default function CenterWidgetsContainer() {
  const centers = centersInfo.map((center, idx) =>
    <li key={idx} className={styles['li-widget']}>
      <CenterInfoWidget center={center} />
    </li>
  );

  return (
    <div className={styles['center-widgets-container']}>
      <ul className={styles['ul-widgets']}>
        {centers}
      </ul>
    </div>
  );
}
