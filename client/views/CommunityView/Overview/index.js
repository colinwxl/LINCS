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
    date: '',
  },
  {
    eventItem: Event2017Webinar,
    category: 'Webinar',
    date: '',
  },
  {
    eventItem: Event20170516,
    category: 'Symposia',
    date: '',
  },
  {
    eventItem: Event20170301,
    category: 'Training',
    date: '',
  },
  {
    eventItem: Event20170220,
    category: 'Course',
    date: '',
  },
  {
    eventItem: Event20170126,
    category: 'Challenge',
    date: '',
  },
  {
    eventItem: Event20160726,
    category: 'Challenge',
    date: '',
  },
  {
    eventItem: EventBD2KCrowdSourcing,
    category: 'Challenge',
    date: '',
  },
  {
    eventItem: Event20160310,
    category: 'Symposia',
    date: '',
  },
  {
    eventItem: Event20160119,
    category: 'Symposia',
    date: '',
  },
];

const cats = [
  'All',
  'Conference',
  'Webinar',
  'Training',
  'Course',
  'Challenge',
  'Symposia'
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

  filterEvents(eventsArr, state) {
    if (state === 'All') return eventsArr;
    return eventsArr.filter(ev => (state === ev.category));
  }

  setCat(cat) {
    this.setState({cat});
  }

  render() {
    const currCat = this.state.cat;
    const filteredEvents = this.filterEvents(events, currCat);
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
              {
                cats.map((cat,idx) => {
                  return (
                    <span
                      key={idx}
                      className={styles.cat}
                      onClick={() => this.setCat(cat)}
                    >
                      {cat}
                    </span>
                  );
                })
              }
            </div>
          </div>
          {filteredEvents.map((ev, idx) => (<ev.eventItem key={idx} />))}
        </div>
      </div>
    );
  }
}
