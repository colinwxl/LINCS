import React, { Component, PropTypes } from 'react';
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
  }

  componentWillMount = () => {
    this.props.loadAnnouncements();
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
    const anns = this.latestSort(this.props.announcements).slice(0, 4);
    return (
      <div className={styles.ann}>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
              <h3 className={styles.title} style={{ display: 'inline-block' }}>Announcements</h3>
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
