import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
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
      customColor,
      eventDate,
    } = ann;

    let headerText;
    let headerBack = '#0a817f';
    if (custom && custom.length > 0) {
      const safeColor = (customColor && customColor[0] === '#') ? customColor : `#${customColor}`;
      headerText = custom;
      headerBack = safeColor.length > 1 ? safeColor : '#2b3d62';
    } else if (webinar) {
      headerText = 'LINCS Data Science Webinar';
      headerBack = '#f39134';
    } else if (course) {
      headerText = 'MOOC on Coursera';
      headerBack = '#f16b6c';
    } else if (trainingProgram) {
      headerText = 'Training Program';
      headerBack = '#6a9ccd';
    } else {
      headerText = 'Update';
    }

    // #942e02

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
    // This is logic handling whether to use react-router's
    // Link or to use an anchor tag for external link.
    const link = this.props.announcement.link;
    if (link) {
      if (link.indexOf('lincsproject.org/') !== -1) {
        const linkTo = link.split('lincsproject.org/')[1];
        return (
          <div className="col-xs-12 col-md-3">
            <Link
              to={linkTo}
              style={{ textDecoration: 'none', color: '#757575' }}
            >
              {this.renderCard()}
            </Link>
          </div>
        );
      }
      return (
        <div className="col-xs-12 col-md-3">
          <a
            href={link}
            target="_blank"
            style={{ textDecoration: 'none', color: '#757575' }}
          >
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
