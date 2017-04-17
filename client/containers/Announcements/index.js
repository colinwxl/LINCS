import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Announcement from 'components/Announcement';
import Carousel from 'components/Carousel';
import { loadAnnouncements } from 'actions/announcements';

import styles from './Announcements.scss';

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

export class Announcements extends Component {
  componentWillMount = () => {
    this.props.loadAnnouncements();
  }

  // latestSort(anns) {
  //   let latestAnnsIdx = anns.length;
  //   const pastDate = new Date();
  //   pastDate.setDate(pastDate.getDate() - 30);
  //   for (let i = 0; i < anns.length; i++) {
  //     const annDate = new Date(anns[i].eventDate);
  //     if (annDate < pastDate) {
  //       latestAnnsIdx = i;
  //       break;
  //     }
  //   }
  //   const latestAnns = anns.slice(0, latestAnnsIdx).reverse();
  //   const remainingAnns = anns.slice(latestAnnsIdx).reverse();
  //   return latestAnns.concat(remainingAnns);
  // }

  latestAnns(anns) {
    let latestAnnsIdx = anns.length;
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    for (let i = 0; i < anns.length; i++) {
      const annDate = new Date(anns[i].eventDate);
      if (annDate < pastDate) {
        latestAnnsIdx = i;
        break;
      }
    }
    return anns.slice(0, latestAnnsIdx).reverse();
  }

  sortAnns(anns) {
    return anns.sort((ann1, ann2) => {
      const ann1Date = new Date(ann1.eventDate);
      const ann2Date = new Date(ann2.eventDate);
      if (ann1Date > ann2Date) {
        return 1;
      } else if (ann1Date < ann2Date) {
        return -1;
      }
      return 0;
    }).reverse();
  }

  latestInQuartets(anns) {
    const latestAnns = this.latestAnns(anns);
    if (latestAnns.length <= 4) {
      return [this.sortAnns(anns).slice(0, 4)];
    }
    const quartets = [];
    for (let i = 0; i < latestAnns.length; i += 4) {
      quartets.push(latestAnns.slice(i, i + 4));
    }
    return quartets;
  }

  render() {
    const anns = this.latestInQuartets(this.props.announcements);
    return (
      <div className={styles.ann}>
        <div className="container">
          <div className="row">
            <div className={`col-xs-12 ${styles.section} ${styles['ann-section']}`}>
              <h3 className={styles.title} style={{ display: 'inline-block' }}>Announcements</h3>
              <div className="row">
                <Carousel infinite={false}>
                  {
                    anns.map((quar, idx) =>
                    (<div key={idx}>
                      {
                        quar.map((ann, idx2) =>
                          (<div key={idx2}>
                            <Announcement announcement={ann} />
                          </div>))
                      }
                    </div>))
                  }
                </Carousel>
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
