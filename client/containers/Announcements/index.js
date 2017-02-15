import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
    if (this.state.annOp === 'recent') {
      anns = anns.slice(0, 4).reverse();
    }
    return (
      <div className={styles.ann}>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
              <h3 className={styles.title} style={{ display: 'inline-block' }}>Announcements</h3>
              <div className={styles.announcementOptions}>
                {}
              </div>
              <div className="row">
                {/* <Carousel> */}
                {
                  anns.map((ann, idx) => <Announcement key={idx} announcement={ann} />)
                }
                {/* </Carousel> */}
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
