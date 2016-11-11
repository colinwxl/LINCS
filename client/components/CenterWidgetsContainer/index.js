import styles from './CenterWidgetsContainer.scss';
import CenterInfoWidget from '../CenterInfoWidget';

import centersInfo from './centers_info.json';

export default function CenterWidgetsContainer() {
  const centers = centersInfo.map(center => {
    return {
      <CentersInfoWidget center={center} />
    }
  });

  return (
      <div className={styles['center-widgets-container']}>
        {centers}
      </div>
  );
};
