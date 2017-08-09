import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Announcement from 'components/Announcement';
import { loadAnnouncements } from 'actions/announcements';

import styles from './Announcements.scss';

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

export class Announcements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annOp: 'Recent',
    };
  }

  componentWillMount = () => {
    this.props.loadAnnouncements();
  }

  setAnnOp = (annOp) => {
    this.setState({ annOp });
  }

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

  render() {
    let anns = this.latestSort(this.props.announcements);
    const { annOp } = this.state;
    if (annOp === 'Recent') {
      anns = anns.slice(0, 4);
    } else if (annOp === 'LINCS Data Science Webinar') {
      anns = anns.filter(ann => ann.webinar);
    } else if (annOp === 'MOOC on Coursera') {
      anns = anns.filter(ann => ann.course);
    } else if (annOp === 'Other') {
      anns = anns.filter(ann => !ann.course && !ann.webinar);
    }

    return (
      <div className={styles.ann}>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
              <h3 className={styles.title} style={{ display: 'inline-block' }}>Announcements</h3>
              <div className={styles.announcementOptions}>
                <span
                  className={styles.announcementOption}
                  onClick={() => this.setAnnOp('Recent')}
                >
                  Recent
                </span>
                <span
                  className={styles.announcementOption}
                  onClick={() => this.setAnnOp('All')}
                >
                  All
                </span>
                <span
                  className={styles.announcementOption}
                  onClick={() => this.setAnnOp('LINCS Data Science Webinar')}
                >
                  LINCS Data Science Webinar
                </span>
                <span
                  className={styles.announcementOption}
                  onClick={() => this.setAnnOp('MOOC on Coursera')}
                >
                  MOOC on Coursera
                </span>
                <span
                  className={styles.announcementOption}
                  onClick={() => this.setAnnOp('Other')}
                >
                  Other
                </span>
              </div>
              <div className="row">
                {anns.map((ann, idx) => <Announcement key={idx} announcement={ann} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Announcements.propTypes = {
  loadAnnouncements: PropTypes.func,
  announcements: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadAnnouncements,
})(Announcements);
