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
    return oppsArr.map((opp, i) => {
      const {
        title, description, releaseDate, openDate, dueDate, reviewDate,
        announcedDate, startDate, keyLinks,
      } = opp;
      return (
        <div key={i} className={styles.opp}>
          <h5>{title}</h5>
          <p>{description}</p>
          <h6>Dates</h6>
          <ul>
            {
              releaseDate &&
              <li>Release Date: {formatDate(releaseDate)}</li>
            }
            {
              openDate &&
              <li>Open Date (earliest submission): {formatDate(openDate)}</li>
            }
            {
              dueDate &&
              <li>Application Due Date: {formatDate(dueDate)}</li>
            }
            {
              reviewDate &&
              <li>Application Review: {formatDate(reviewDate)}</li>
            }
            {
              announcedDate &&
              <li>Decision Announcement: {formatDate(announcedDate)}</li>
            }
            {
              startDate &&
              <li>Earliest Start Date: {formatDate(startDate)}</li>
            }
          </ul>
          {!!keyLinks && Object.keys(keyLinks).length && <h6>Links</h6>}
          <ul>
            {
              !!keyLinks && Object.keys(keyLinks).map((linkTitle, index) =>
                <li key={`link ${index}`}><a href={keyLinks[linkTitle]}>{linkTitle}</a></li>
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
