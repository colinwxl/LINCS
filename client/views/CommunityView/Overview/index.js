import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchWebinars } from 'actions/community';
import { loadAnnouncements } from 'actions/announcements';
import Collapsible from 'react-collapsible';

import eventCourseraMOOC from '../Events/EventCourseraMOOC';
import formatDate from 'utils/formatDate';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';

import { featuredEvents, events } from '../Events';

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

// Functions for organizing MOOCS
/* eslint-disable */
  filterForUpcomingMoocs(anns) {
    return anns.filter(
      ann => ann.course && (new Date(ann.eventDate) >= new Date())
    );
  }
/* eslint-enable */

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

  getLatestMOOCS(anns) {
    const moocs = this.filterForUpcomingMoocs(anns);
    const latest = this.latestSort(moocs);
    return latest.map(mooc => ({
      eventItem: () => eventCourseraMOOC({ mooc }),
      category: 'Course',
      date: mooc.eventDate,
    }));
  }

// General events functions

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

  filterEvents(eventsArr, state) {
    if (state === 'All') return eventsArr;
    return eventsArr.filter(ev => (state === ev.category));
  }

  filterDate(eventsArr) {
    // upcoming is ordered soonest to latest
    const upcoming = [];
    // past is ordered most recent to oldest
    const past = [];
    const today = new Date();
    today.setDate(today.getDate() - 1);
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

  createWebinarCard(web) {
    const hasVideo = web.url && !!web.url.length;
    return (
      <div className={styles['ann-card']}>
        <h6 className={`${styles['ann-group']} ${styles.webinar}`}>{formatDate(web.date)}</h6>
        <div className={styles['ann-content']}>
          <h3>LINCS Data Science Research Webinar</h3>
          <h4>{web.title}</h4>
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

          <p>This event starts at 3:00 PM ET on {formatDate(web.date)}.</p>
          {
            web.abstract &&
            web.abstract.length &&
              <Collapsible trigger="▸ Abstract" triggerWhenOpen="▾ Abstract">
                <span>{web.abstract}</span>
              </Collapsible>
          }
          {
            hasVideo && <span><a href={web.url}>Watch webinar on YouTube</a></span>
          }
          <Link to="/community/webinars/">How to Connect</Link>
          &nbsp;|&nbsp;
          <a
            href="https://www.youtube.com/playlist?list=PL0Bwuj8819U-G9Ob0jIGHp5AtwpCghLV5"
            target="_blank"
          >Archived Webinars</a>
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

  render() {
    const moocs = this.getLatestMOOCS(this.props.announcements) || [];
    const webinars = this.findUpcomingWebinarsAndGenerateCard(this.props.webinars) || [];
    const allEvents = events.concat(webinars).concat(moocs);
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
                an active LINCS communities.
              </p>
              <h3>Highlight</h3>
              <p>
                The 2016 LINCS Consortium Meeting was held September 19-20,
                at the NIH campus in Bethesda, MD. This two-day meeting
                brought together the six&nbsp;
                <Link to="/centers/data-and-signature-generating-centers">
                  LINCS Data and Signature Generation Centers
                </Link>, the <Link to="/centers/dcic">
                BD2K-LINCS Data Coordination and Integration Center</Link>, NIH
                extramural staff, and external LINCS collaborators.&nbsp;
                <Link to="/community/consortium-meetings">Learn More</Link>
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
            {
              // <div className={`col-md-9 ${styles['last-col']}`}>
              //   <Link
              //     to="/community/previous-events"
              //     className={`btn btn-lg btn-primary ${styles['previous-events']}`}
              //   >
              //     Previous Events
              //   </Link>
              // </div>
            }
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
