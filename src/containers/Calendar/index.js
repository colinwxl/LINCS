import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import EventCalendar from 'react-event-calendar';
import moment from 'moment';

import styles from './Calendar.scss';
import { fetchWebinars } from 'actions/community';

const mapStateToProps = ({ community }) => ({ community });

export class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moment: moment(),
    };
  }

  componentWillMount() {
    this.props.fetchWebinars();
  }

  setCalendar = (calendarComponent) => {
    this.eventCalendar = calendarComponent;
  }

  handlePrevMonth = () => {
    this.setState({ moment: this.state.moment.subtract(1, 'M') });
  }

  handleNextMonth = () => {
    this.setState({ moment: this.state.moment.add(1, 'M') });
  }

  handleEventMouseOver = (target, data) => {
    this.setState({
      showPopover: true,
      popoverTarget: () => ReactDOM.findDOMNode(target),
      popoverTitle: data.title,
      popoverContent: data.description,
    });
  }

  handleEventMouseOut = () => {
    this.setState({ showPopover: false });
  }

  handleEventClick = (/* ref, data */) => {

  }

  get humanDate() {
    return [moment.months('MM', this.state.moment.month()), this.state.moment.year()].join(' ');
  }

  get events() {
    const { community } = this.props;
    const events = [];
    if (community.webinars) {
      community.webinars.forEach(({ title, date }) => {
        const desc = `${title} - Starts at 3PM EST.`;
        const dateObj = new Date(date);
        const dateStr = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`;
        events.push({
          title: 'Webinar',
          description: desc,
          start: dateStr,
          end: dateStr,
        });
      });
    }
    return events;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={`row ${styles.header}`}>
          <div className="col-xs-3">
            <a onClick={this.handlePrevMonth} className={styles.left} />
          </div>
          <div className="col-xs-6 text-xs-center">
            <h3>{this.humanDate}</h3>
          </div>
          <div className="col-xs-3">
            <a onClick={this.handleNextMonth} className={styles.right} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <EventCalendar
              ref={this.setCalendar}
              month={this.state.moment.month()}
              year={this.state.moment.year()}
              events={this.events}
              onEventClick={this.handleEventClick}
              onEventMouseOver={this.handleEventMouseOver}
              onEventMouseOut={this.handleEventMouseOut}
            />
          </div>
        </div>
      </div>
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
