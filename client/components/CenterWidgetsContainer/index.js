import React from 'react';
import styles from './CenterWidgetsContainer.scss';
import CenterInfoWidget from 'components/CenterInfoWidget';

import centersInfo from './centers_info';

export default function CenterWidgetsContainer() {
  const centers = centersInfo.map(center =>
    <CenterInfoWidget center={center} />
  );

  return (
    <div className={styles['center-widgets-container']}>
      {centers}
    </div>
  );
}
