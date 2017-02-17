import React, { Component, PropTypes } from 'react';
import styles from './Announcement.scss';
import formatDate from 'utils/formatDate';

export default class Announcement extends Component {
  renderCard = () => {
    const ann = this.props.announcement;
    const {
      title,
      description,
      // presenter,
      eDsr,
      webinar,
      course,
      trainingProgram,
      custom,
      eventDate,
    } = ann;

    let headerText;
    let headerBack = '#0a817f';
    if (custom && custom.length > 0) {
      headerText = custom;
      headerBack = '#2b3d62';
    } else if (webinar) {
      headerText = 'LINCS Data Science Webinar';
      headerBack = '#f49e4c';
    } else if (course) {
      headerText = 'MOOC on Coursera';
      headerBack = '#942e02';
    } else if (trainingProgram) {
      headerText = 'Training Program';
      headerBack = '#6a9ccd';
    } else {
      headerText = 'Update';
    }

    return (
      <div className={styles.card}>
        <span className={styles.headerWrapper} style={{ backgroundColor: headerBack }}>
          <h5
            className={styles['card-title']}
          >
            {headerText && headerText.toUpperCase()}
          </h5>
        </span>
        <div className={styles['inner-wrap']}>
          <span className={styles.date}>
            {eventDate && formatDate(eventDate)}
          </span>
          <div className={styles.group}>
            <p className={`clearfix ${styles.left}`}>
              <span className={styles.title}><strong>{title}</strong></span>
              <span className={styles.description}>
                {description}
              </span>
              <span>
                {/* presenter */}
                {
                  (eDsr)
                    ? <span>&nbsp;<a href="http://lincs-dcic.org/#/external-dsrp#nav" target="_blank">DCIC eDSR</a></span>
                    : null
                }
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const link = this.props.announcement.link;
    if (link) {
      return (
        <div className="col-xs-12 col-md-3">
          <a href={link} style={{ textDecoration: 'none' }}>
            {this.renderCard()}
          </a>
        </div>
      );
    }
    return (
      <div className="col-xs-12 col-md-3">
        {this.renderCard()}
      </div>
    );
  }
}

Announcement.propTypes = {
  announcement: PropTypes.object,
};
