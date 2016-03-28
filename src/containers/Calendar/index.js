import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import { fetchWebinars } from 'actions/community';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const mapStateToProps = ({ community }) => ({ community });

export class Calendar extends Component {
  componentWillMount() {
    this.props.fetchWebinars();
  }

  get events() {
    const { community } = this.props;
    console.log(community);
    const events = [];
    if (community.webinars) {
      community.webinars.forEach(webinar => {
        events.push({
          title: webinar.title,
          allDay: true,
          start: webinar.date,
          end: webinar.date,
        });
      });
    }
    return events;
  }

  render() {
    return (
      <BigCalendar
        events={this.events}
      />
    );
  }
}

Calendar.propTypes = {
  community: PropTypes.object,
  fetchWebinars: PropTypes.func,
};

export default connect(mapStateToProps, {
  fetchWebinars,
})(Calendar);
