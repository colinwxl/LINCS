import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadAnnouncements } from 'actions/announcements';

import styles from '../Overview.scss';
import dcicImg from '../dcic.png';

import formatDate from 'utils/formatDate';

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

export class Event20170220 extends Component {
  latestSort(anns) {
    let latestAnnsIdx = anns.length;
    const today = new Date();
    for (let i = 0; i < anns.length; i++) {
      const annDate = new Date(anns[i].eventDate);
      if (annDate < today) {
        latestAnnsIdx = i;
        break;
      }
    }
    const latestAnns = anns.slice(0, latestAnnsIdx).reverse();
    const remainingAnns = anns.slice(latestAnnsIdx).reverse();
    return latestAnns.concat(remainingAnns);
  }

  findUpcomingMoocs(anns) {
    return anns.filter(ann => ann.course && (new Date(ann.eventDate) >= new Date()));
  }

  render() {
    const moocs = this.findUpcomingMoocs(this.props.announcements);
    const upcomingMoocs = this.latestSort(moocs);
    const latestMooc = upcomingMoocs.shift();
    return (
      <div className={styles['ann-card']}>
        <h6 className={`${styles['ann-group']} ${styles.course}`}>MOOC ON COURSERA</h6>
        <div className={styles['ann-content']}>
          <h3>
            Big Data Science with the BD2K-LINCS Data Coordination and Integration Center
          </h3>
          <div>
            <a href="http://lincs-dcic.org/#/summer-research-app#nav">
              <img
                className={styles['inline-img-left']}
                src={dcicImg}
                alt="dcic"
                width="231"
                height="173"
              />
            </a>
            <h6><strong>
              Next session of this course begins on Coursera {latestMooc && formatDate(latestMooc.eventDate)}!
            </strong></h6>
          </div>
          <p>
            This course covers various methods of analysis including:
            unsupervised clustering, gene-set enrichment analyses,
            data visualization, and supervised machine learning
            applications to LINCS data. This course also covers
            basic data processing and data normalization methods to
            clean and harmonize LINCS data and other relevant data.&nbsp;
            <a href="https://www.coursera.org/course/bd2klincs">Enroll Now</a>
          </p>
          <br />
          <strong>Future session start dates:&nbsp;</strong>
          {upcomingMoocs && upcomingMoocs.map((uc) => (formatDate(uc.eventDate))).join(", ")}
        </div>
      </div>
    );
  }
}


Event20170220.propTypes = {
  loadAnnouncements: PropTypes.func,
  announcements: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadAnnouncements,
})(Event20170220);
