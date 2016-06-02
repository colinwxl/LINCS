import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';


export default function Story20160323() {
  return (
    <Story
      title="LINCS Outreach Meeting 2016 - Video Archive"
      date="March 23rd, 2016"
    >
      <div className={styles.youtube}>
        <iframe
          src="https://www.youtube.com/embed/MwJoLfc_LuM?list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </Story>
  );
}
