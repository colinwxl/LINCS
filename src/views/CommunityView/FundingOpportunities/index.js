import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import extend from 'extend';
// import { Link } from 'react-router';

import formatDate from 'utils/formatDate';
import { fetchFundingOpps } from 'actions/community';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './FundingOpportunities.scss';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
/* eslint react/prefer-stateless-function:0 max-len:0 */
const mapStateToProps = (state) => ({
  fundingOpportunities: state.community.fundingOpportunities,
});
export class FundingOpportunities extends Component {
  componentWillMount() {
    this.props.fetchFundingOpps();
  }

  generateOppElems(oppsArr) {
    return oppsArr.map((opp) => {
      const dates = opp.keyDates;
      const links = opp.keyLinks;
      return (
        <div className={styles.opp}>
          <h5>{opp.title}</h5>
          <p>{opp.description}</p>
          <h6>Dates</h6>
          <ul>
            {
              dates && dates.release &&
              <li>Release Date: {formatDate(dates.release)}</li>
            }
            {
              dates && dates.open &&
              <li>Open Date (earliest submission): {formatDate(dates.open)}</li>
            }
            {
              dates && dates.due &&
              <li>Application Due Date: {formatDate(dates.due)}</li>
            }
            {
              dates && dates.review &&
              <li>Application Review: {formatDate(dates.review)}</li>
            }
            {
              dates && dates.announced &&
              <li>Decision Announcement: {formatDate(dates.announced)}</li>
            }
            {
              dates && dates.start &&
              <li>Earliest Start Date: {formatDate(dates.start)}</li>
            }
          </ul>
          {!!links && Object.keys(links).length && <h6>Links</h6>}
          <ul>
            {
              !!links && Object.keys(links).map((linkTitle) =>
                <li><a href={links[linkTitle]}>{linkTitle}</a></li>
              )
            }
          </ul>
        </div>
      );
    });
  }

  get fundingOpps() {
    const { fundingOpportunities } = this.props;
    const archivedOpps = [];
    const currentOpps = [];
    fundingOpportunities.forEach((fundingOpp) => {
      // Clone funding opportunity
      const opp = extend(true, {}, fundingOpp);
      // Get date right now
      const now = new Date();
      // opp.date and opp.keyDates are most likely strings and not date objects.
      // Date objects are needed to check if opp is current or archived (past or future).
      // Here we loop through opp.keyDates and set each value to a Date object of the string that
      // currently exists there.
      if (opp.keyDates) {
        for (const date in opp.keyDates) {
          if (opp.keyDates.hasOwnProperty(date)) {
            opp.keyDates[date] = new Date(opp.keyDates[date]);
          }
        }
      }
      if (opp.date) {
        // Set opp.date to an actual date object (continuing from above)
        opp.date = new Date(opp.date);
        if (opp.date < now) {
          archivedOpps.push(opp);
        } else if (opp.date > now) {
          currentOpps.push(opp);
        }
      } else if (opp.keyDates && opp.keyDates.due) {
        if (opp.keyDates.due < now) {
          archivedOpps.push(opp);
        } else if (opp.keyDates.due > now) {
          currentOpps.push(opp);
        }
      }
    });
    return { archivedOpps, currentOpps };
  }

  render() {
    const { archivedOpps, currentOpps } = this.fundingOpps;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Funding Opportunities"
          subTitle=""
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Funding Opportunities" />
            <div className="col-md-9 col-md-pull-3">
              <div className={styles.opportunities}>
                <h2>Current Funding Opportunities</h2>
                {
                  !!currentOpps.length
                  ? this.generateOppElems(currentOpps)
                  : <p>No funding opportunities available. Please check back later.</p>
                }
              </div>
              <div className={styles.opportunities}>
                {!!archivedOpps.length && <h2>Archived Funding Opportunities</h2>}
                {this.generateOppElems(archivedOpps)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FundingOpportunities.propTypes = {
  fundingOpportunities: PropTypes.array.isRequired,
  fetchFundingOpps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchFundingOpps,
})(FundingOpportunities);
