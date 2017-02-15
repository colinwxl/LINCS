import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Announcement from 'components/Announcement';
import { loadAnnouncements } from 'actions/announcements';

import styles from './Announcements.scss';

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

// const ANN_OPTIONS = {
//   'Recent': 4,
//   'Webinar': ,
//   'Course': ,
//   'Update': ,
// }

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

  render() {
    let anns = this.props.announcements;
    const { annOp } = this.state;
    if (annOp === 'Recent') {
      anns = anns.slice(0, 4).reverse();
    } else if (annOp === 'Webinar') {
      anns = anns.filter(ann => ann.webinar)
    } else if (annOp === 'Course') {
      anns = anns.filter(ann => ann.course)
    } else if (annOp === 'Other') {
      anns = anns.filter(ann => !ann.course && !ann.webinar)
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
                  onClick={() => this.setAnnOp('Webinar')}
                >
                  Webinar
                </span>
                <span
                  className={styles.announcementOption}
                  onClick={() => this.setAnnOp('Course')}
                >
                  Course
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
