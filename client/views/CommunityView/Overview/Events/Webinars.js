import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadAnnouncements } from 'actions/announcements';
import styles from '../Overview.scss';

import formatDate from 'utils/formatDate';

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

export class Event2017Webinar extends Component {
  componentDidMount() {
    this.props.loadAnnouncements();
  }

  // latestSort(anns) {
  //   let latestAnnsIdx = anns.length;
  //   const yesterday = new Date();
  //   yesterday.setDate(yesterday.getDate() - 1);
  //   for (let i = 0; i < anns.length; i++) {
  //     const annDate = new Date(anns[i].eventDate);
  //     if (annDate < yesterday) {
  //       latestAnnsIdx = i;
  //       break;
  //     }
  //   }
  //   const latestAnns = anns.slice(0, latestAnnsIdx).reverse();
  //   const remainingAnns = anns.slice(latestAnnsIdx).reverse();
  //   return latestAnns.concat(remainingAnns);
  // }

  findUpcomingWebinars(anns) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return anns.filter(ann => ann.webinar && (new Date(ann.eventDate) >= yesterday));
  }

  render() {
    const webinars = this.findUpcomingWebinars(this.props.announcements);

  }
}
// 
// Event2017Webinar.propTypes = {
//   loadAnnouncements: PropTypes.func,
//   announcements: PropTypes.array,
// };
//
// export default connect(mapStateToProps, {
//   loadAnnouncements,
// })(Event2017Webinar);
