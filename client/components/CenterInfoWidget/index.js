import React, { PropTypes } from 'react';

import styles from './CenterInfoWidget.scss';

export default function CenterInfoWidget(props) {
  const { center } = props;

  return (
    <div className={styles.tool}>
      <a href={center.url} className={styles['tool-link']} target="_blank">
        <div className={styles['tool-inner']}>
          <div className={styles['tool-logo']}>
            <img src={center.iconUrl} className={styles.thumbnail} alt={center.name} />
          </div>

          <div className={styles['tool-details']}>
            <label className={styles['tool-title']}>{center.name}</label>
            <div className={styles['tool-description']}>
              {center.description}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
//
// name: 'Test',
// url: 'http://google.com',
// iconUrl: 'http://google.com',
// description: 'This is a test description',

CenterInfoWidget.propTypes = {
  center: PropTypes.object,
};
