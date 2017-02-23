import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';

import Event20170404 from './Events/Event20170404';
import Event20170516 from './Events/Event20170516';
import Event20160119 from './Events/Event20160119';
import Event20170301 from './Events/Event20170301';
import Event20160310 from './Events/Event20160310';
import Event20170220 from './Events/Event20170220';
import Event20160726 from './Events/Event20160726';
import Event20170126 from './Events/Event20170126';
import EventBD2KCrowdSourcing from './Events/EventBD2KCrowdSourcing';
import Event2017Webinar from './Events/Event2017Webinar';

const events = [
  {
    eventItem: Event20170404,
    category: 'Conference',
    date: '2017-04-04',
  },
  {
    eventItem: Event2017Webinar,
    category: 'Webinar',
    date: '2017-02-28',
  },
  {
    eventItem: Event20170516,
    category: 'Symposia',
    date: '2017-05-16',
  },
  {
    eventItem: Event20170301,
    category: 'Training',
    date: '2017-03-01',
  },
  {
    eventItem: Event20170220,
    category: 'Course',
    date: '2017-02-20',
  },
  {
    eventItem: Event20170126,
    category: 'Challenge',
    date: '2017-07-26',
  },
  {
    eventItem: Event20160726,
    category: 'Challenge',
    date: '2016-07-26',
  },
  {
    eventItem: EventBD2KCrowdSourcing,
    category: 'Challenge',
    date: '2016-03-11',
  },
  {
    eventItem: Event20160310,
    category: 'Symposia',
    date: '2016-03-10',
  },
  {
    eventItem: Event20160119,
    category: 'Symposia',
    date: '2016-01-19',
  },
];

// Categories are used for the filtering events
const cats = [
  'All',
  'Challenge',
  'Conference',
  'Course',
  'Symposia',
  'Training',
  'Webinar',
];

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = { cat: 'All' };
  }

  componentDidMount() {
    // Render the Google+ Follow Button
    // https://developers.google.com/+/web/follow/#javascript_api
    if (window && window.gapi) {
      window.gapi.follow.go(styles.wrapper);
    }
  }

  setCat(cat) {
    this.setState({ cat });
  }

  sortEvents(eventsArr) {
    return eventsArr.sort((ev1, ev2) => {
      const ev1Date = new Date(ev1.date);
      const ev2Date = new Date(ev2.date);
      if (ev1Date < ev2Date) {
        return 1;
      } else if (ev1Date > ev2Date) {
        return -1;
      }
      return 0;
    });
  }

  filterDate(eventsArr) {
    // upcoming is ordered soonest to latest
    const upcoming = [];
    // past is ordered most recent to oldest
    const past = [];
    const today = new Date();
    eventsArr.forEach(ev => {
      const evDate = new Date(ev.date);
      if (today <= evDate) {
        upcoming.unshift(ev);
      } else {
        past.push(ev);
      }
    });
    return { past, upcoming };
  }

  filterEvents(eventsArr, state) {
    if (state === 'All') return eventsArr;
    return eventsArr.filter(ev => (state === ev.category));
  }

  render() {
    // Filter for relevant events first
    const filteredEvents = this.filterEvents(events, this.state.cat);
    // Preprocess the events by sorting by date
    const sortedEvents = this.sortEvents(filteredEvents);
    // Discriminate between upcoming events and past events
    const { upcoming, past } = this.filterDate(sortedEvents);
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="The LINCS Community"
          subTitle={
            'The consortium engages the biomedical research ' +
            'communities through various outreach activities'
          }
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Overview" />
            <div className="col-md-9 col-md-pull-3">
              <h1 className={styles.title}>Overview</h1>
              <p>
                Access to and utilization of LINCS resources by the biomedical and data science
                research communities is one of the major aims of the LINCS program.
                The <a href="http://lincs-dcic.org/#/">BD2K-LINCS Data Coordination and Integration Center</a>,
                together with the <Link to="/centers/data-and-signature-generating-centers/">
                data and signature generation centers</Link>, use approaches like webinars,
                courses, training seminars, challenges, workshops and symposia to foster
                an active LINCS community.
              </p>
            </div>
            <div className="col-md-9 col-md-pull-3">
              <h4>Filter Community Events</h4>
              {
                // this is buggy when resizing. need to make this responsive
                cats.map((cat, idx) => (
                  <span
                    key={idx}
                    className={styles.cat}
                    onClick={() => this.setCat(cat)}
                  >
                    {cat}
                  </span>
                  )
                )
              }
            </div>
          </div>
          {
            upcoming && upcoming.length > 0 ?
            (<div>
              <h5>Upcoming Events</h5>
              {upcoming.map((ev, idx) => (<ev.eventItem key={idx} />))}
            </div>) :
            (<div>
              <h5>There are no upcoming events.</h5>
            </div>)
          }
          {
            past && past.length > 0 ?
            (<div>
              <h5>Past Events</h5>
              {past.map((ev, idx) => (<ev.eventItem key={idx} />))}
            </div>) :
            null
          }
        </div>
      </div>
    );
  }
}
