import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchWebinars } from 'actions/community';
import { loadAnnouncements } from 'actions/announcements';
import Collapsible from 'react-collapsible';

import formatDate from 'utils/formatDate';
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
import Event20170302 from './Events/Event20170302';
import EventBD2KCrowdSourcing from './Events/EventBD2KCrowdSourcing';

const featuredEvents = [
  {
    eventItem: EventBD2KCrowdSourcing,
    category: 'Crowdsourcing Challenge',
    date: '2022-12-01 00:00:00',
  },
];

const events = [
  {
    eventItem: Event20170302,
    category: 'Seminar',
    date: '2017-03-02',
  },
  {
    eventItem: Event20170404,
    category: 'Conference',
    date: '2017-04-04',
  },
  {
    eventItem: Event20170516,
    category: 'Symposia',
    date: '2017-05-16',
  },
  {
    eventItem: Event20170301,
    category: 'Training Program',
    date: '2017-06-05 00:00:00',
  },
  {
    eventItem: Event20170126,
    category: 'Crowdsourcing Challenge',
    date: '2017-01-26 00:00:00',
  },
  {
    eventItem: Event20160726,
    category: 'Crowdsourcing Challenge',
    date: '2016-07-26 00:00:00',
  },
  {
    eventItem: Event20160310,
    category: 'Symposia',
    date: '2016-03-10 00:00:00',
  },
  {
    eventItem: Event20160119,
    category: 'Symposia',
    date: '2016-01-19 00:00:00',
  },
];

// Categories are used for the filtering events
// const cats = [
//   'All',
//   'Crowdsourcing Challenge',
//   'Conference',
//   'Course',
//   'Symposia',
//   'Training Program',
//   'Webinar',
// ];

const mapStateToProps = (state) => ({
  webinars: state.community.webinars,
  announcements: state.announcements.announcements,
});


class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = { cat: 'All' };
  }

  componentWillMount() {
    this.props.loadAnnouncements();
    this.props.fetchWebinars();
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

  createWebinarCard(web) {
    const hasVideo = web.url && !!web.url.length;
    return (
      <div className={styles['ann-card']}>
        <h6 className={`${styles['ann-group']} ${styles.webinar}`}>{formatDate(web.date)}</h6>
        <div className={styles['ann-content']}>
          <h3>
            Webinar: <Link to="/community/webinars" style={{ textDecoration: 'none' }}>
              {web.title}
            </Link>
          </h3>
          {
            web.presenterUrl && !!web.presenterUrl.length
              ? <span><a href={web.presenterUrl}>{web.presenterName}</a></span>
            : <span>{web.presenterName}</span>
          }
          ,&nbsp;
          {
            web.presenterAffiliation &&
            !!web.presenterAffiliation.length &&
              web.presenterAffiliation
          }
          {
            web.abstract &&
            web.abstract.length &&
              <Collapsible trigger="▸ Abstract" triggerWhenOpen="▾ Abstract">
                <span>{web.abstract}</span>
              </Collapsible>
          }
          {
            hasVideo
              ? <span><a href={web.url}>Watch webinar on YouTube</a></span>
            : <span></span>
          }
          <br />
          <Link to="/community/webinars/">Learn More</Link>
        </div>
      </div>
    );
  }

  findUpcomingWebinarsAndGenerateCard(webinars) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const webs = webinars.filter(web => new Date(web.date) >= yesterday);
    return webs.map(web => {
      const webComp = this.createWebinarCard(web);
      return {
        eventItem: () => (webComp),
        category: 'Webinar',
        date: web.date,
      };
    });
  }

  mapEventsToMonth(eventsList) {
    const eventsMonthMapping = {
      January: [],
      February: [],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: [],
    };
    eventsList.forEach(ev => {
      const date = new Date(ev.date);
      const month = date.toLocaleString('en-us', { month: 'long' });
      eventsMonthMapping[month].push(ev);
    });
    return eventsMonthMapping;
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
    let course = {};
    const latestCourse = this.latestSort(this.props.announcements)[0];
    if (latestCourse) {
      course = {
        eventItem: () => Event20170220({announcements: this.props.announcements}),
        category: 'Course',
        date: latestCourse.eventDate,
      };
    }
    const webinars = this.findUpcomingWebinarsAndGenerateCard(this.props.webinars);
    const allEvents = events.concat(webinars);
    if (course.eventItem) {
      allEvents.push(course);
    }
    const filteredEvents = this.filterEvents(allEvents, this.state.cat);
    const sortedEvents = this.sortEvents(filteredEvents);
    const { upcoming } = this.filterDate(sortedEvents);


    const featured = featuredEvents.filter(ev => (
      this.state.cat === 'All' || this.state.cat === ev.category
    ));

    const mappedEventsToMonth = this.mapEventsToMonth(upcoming);
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
          </div>
          <div className="row">
            <div className="col-md-3 col-md-push-9">
              <div className={styles.wrapper}>
                {
                  // <h7 className={styles['filter-title']}>Filter Events</h7>
                  // cats.map((cat, idx) => (
                  //   <span
                  //     key={idx}
                  //     className={styles.cat}
                  //     onClick={() => this.setCat(cat)}
                  //   >
                  //     {cat}
                  //   </span>
                  //   )
                  // )
                }
              </div>
            </div>
            <div className="col-md-9 col-md-pull-3">
              {
                Object.keys(mappedEventsToMonth).map((monthName, idx) => (
                  !!mappedEventsToMonth[monthName].length && (
                    <div key={idx}>
                      <h3>{monthName}</h3>
                      {
                        mappedEventsToMonth[monthName].map((monthEv, idx2) => (
                          <monthEv.eventItem key={idx2} />
                        ))
                      }
                    </div>
                  )
                ))
              }
              {
                featured && !!featured.length && (
                  <div>
                    <h3>ONGOING EVENTS</h3>
                    {
                      featured.map((ev, idx) => {
                        if (this.state.cat === 'All' || this.state.cat === ev.category) {
                          return (<ev.eventItem key={idx} />);
                        }
                        return null;
                      })
                    }
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  fetchWebinars: PropTypes.func,
  webinars: PropTypes.array,
  loadAnnouncements: PropTypes.func,
  announcements: PropTypes.array,
};

export default connect(mapStateToProps, {
  fetchWebinars,
  loadAnnouncements,
})(Overview);
