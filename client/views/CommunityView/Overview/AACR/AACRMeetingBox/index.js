import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './AACRMeetingBox.scss';

// {
//   time: '5:00 - 5:15 PM',
//   talkTitle: 'Introduction to the NIH LINCS Program',
//   speaker: 'Peter K. Sorger PhD',
//   speakerImg: sorger,
//   centerName: 'HMS LINCS',
//   centerPath: 'LINCS/centers/data-and-signature-generating-centers/hms-lincs',
//   abstractLink: 'http://www.abstractsonline.com/pp8/#!/4292/presentation/11723',
// },

export default function AACRMeetingBox(props) {
  const { scheduleItem } = props;
  return (
    <div className={styles.widget}>
      <div className={`${styles['widget-inner']}`}>
        <p className={styles['widget-description']}>
          <img
            src={scheduleItem.speakerImg}
            className={`${styles.thumbnail} ${styles['inline-img-left']}`}
            alt={scheduleItem.speaker}
          />
          <strong>Presenter:</strong> <br />{scheduleItem.speaker} <br />
          <i><Link to={scheduleItem.centerPath}>{scheduleItem.centerName}</Link></i> <br />
          <strong>Time:</strong> <br />{scheduleItem.time} <br />
          <strong>Presentation:</strong> <br />
          <a
            href={scheduleItem.abstractLink}
            target="_blank"
            className={styles['no-style-link']}
          >
            {scheduleItem.talkTitle}
          </a>
          <br />
        </p>

      </div>
    </div>
  );
}

AACRMeetingBox.propTypes = {
  scheduleItem: PropTypes.object,
};
