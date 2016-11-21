import React, { PropTypes } from 'react';
import styles from './CenterWidgetsContainer.scss';
import CenterInfoWidget from 'components/CenterInfoWidget';

import centersInfo from './centers_info';

// Probably best to make this database-driven
export default function CenterWidgetsContainer(props) {
  // const { highlightedCards } = props;
  const highlightedCards = ['BD2K-LINCS DCIC'];

  const centers = centersInfo
  .sort((c1, c2) => {
    if (c1.name < c2.name) {
      return -1;
    }
    if (c1.name > c2.name) {
      return 1;
    }
    return 0;
  })
  .map((center, idx) =>
    <li key={idx} className={styles['li-widget']}>
      <CenterInfoWidget highlighted={highlightedCards.includes(center.name)} center={center} />
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

CenterWidgetsContainer.propTypes = {
  highlightedCards: PropTypes.array,
};
