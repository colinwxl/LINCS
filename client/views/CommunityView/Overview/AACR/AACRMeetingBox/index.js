import React, { PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
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
          <div className={`${styles.presenter} ${styles['inline-img-left']}`}>
            <img
              src={scheduleItem.speakerImg}
              className={`${styles.thumbnail}`}
              alt={scheduleItem.speaker}
            />
          </div>
          <i>{scheduleItem.speaker}</i><br />
          <strong>Time:</strong> <i>{scheduleItem.time}</i>
          <br />
          <div className={styles['desc-limit']}>
            <a
              href={scheduleItem.abstractLink}
              target="_blank"
              className={`${styles['no-style-link']}`}
            >
              {
                scheduleItem.talkTitle.length > 65 ?
                  <span
                    data-tip="Information is not available at this time."
                    data-for={scheduleItem.time}
                  >
                    {scheduleItem.talkTitle.slice(0, 62)}...
                  </span>
                  : <span>{scheduleItem.talkTitle}</span>
              }
            </a>
            <ReactTooltip
              id={scheduleItem.time}
              place="right"
              type="dark"
              effect="float"
            >
              <div style={{ maxWidth: '10rem' }}>
                {scheduleItem.talkTitle}
              </div>
            </ReactTooltip>
          </div>
          <br />
        </p>
      </div>
    </div>
  );
}

// <i
//   className={`fa fa-info-circle ${styles['info-icon']}`}
//   aria-hidden="true"
//   data-tip="Information is not available at this time."
//   data-for={center.name}
// />


AACRMeetingBox.propTypes = {
  scheduleItem: PropTypes.object,
};
