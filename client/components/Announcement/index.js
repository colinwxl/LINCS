import React, { PropTypes } from 'react';
import styles from './Announcement.scss';
import formatDate from 'utils/formatDate';

export default function Announcement(props) {
  const ann = props.announcement;
  const {
    title,
    description,
    presenter,
    eDsr,
    webinar,
    course,
    trainingProgram,
    custom,
    eventDate,
    link,
    linkText,
  } = ann;

  let headerText;
  let headerBack = '#e1447e';
  if (custom && custom.length > 0) {
    headerText = custom;
  } else if (webinar) {
    headerText = 'Webinar';
    headerBack = '#007CBE';
  } else if (course) {
    headerText = 'Course';
    headerBack = '#283f62';
  } else if (trainingProgram) {
    headerText = 'Training Program';
    headerBack = '#058488';
  } else {
    headerText = 'Update';
  }

  return (
    <div className="col-xs-12 col-md-3">
      <div className={styles.card}>
        <h5
          className={styles['card-title']}
          style={{ backgroundColor: headerBack }}
        >
          {headerText && headerText.toUpperCase()}
        </h5>
        <br />
        <div className={styles.group}>
          <span className={styles.date}>
            {eventDate && formatDate(eventDate)}
          </span>
          <p className={`clearfix ${styles.left}`}>
            <span className={styles.title}><strong>{title}</strong></span>
            <span className={styles.description}>
              {description}
            </span>
            <span>
              {presenter}
              {
                (eDsr)
                  ? <span>&nbsp;<a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">DCIC eDSR</a></span>
                  : null
              }
            </span>
          </p>
          <a href={link} target="_blank">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}

Announcement.propTypes = {
  announcement: PropTypes.object,
};
