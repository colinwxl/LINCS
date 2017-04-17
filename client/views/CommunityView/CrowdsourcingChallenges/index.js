import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import formatDate from 'utils/formatDate';
import { fetchChallenges } from 'actions/community';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './CrowdsourcingChallenges.scss';

const mapStateToProps = (state) => ({
  challenges: state.community.challenges,
});
export class CrowdsourcingChallenges extends Component {
  componentWillMount() {
    this.props.fetchChallenges();
  }

  render() {
    const { challenges } = this.props;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Crowdsourcing Challenges"
          subTitle=""
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Crowdsourcing Challenges" />
            <div className="col-md-9 col-md-pull-3">
              <div className={styles.challenges}>
                {challenges.length === 0 && <p>No challenges available</p>}
                {
                  challenges.map((chal, index) => {
                    const links = chal.keyLinks;
                    const startDate = formatDate(new Date(chal.startDate));
                    let endDate;
                    if (chal.endDate) {
                      endDate = formatDate(new Date(chal.endDate));
                    }
                    return (
                      <div key={`challenge ${index}`} className={styles.challenge}>
                        <div className={styles.header}>
                          <h5>{chal.title}</h5>
                          {
                            !!endDate
                              ? <p><em>{startDate} to {endDate}</em></p>
                                : <p><em>{startDate}</em></p>
                          }
                        </div>
                        <p>{chal.description}</p>
                        {
                          !!links && !!Object.keys(links).length &&
                            <p><strong>Links</strong></p>
                        }
                        <ul>
                          {
                            !!links && Object.keys(links).map((linkTitle, i) =>
                              <li key={i}><a href={links[linkTitle]}>{linkTitle}</a></li>
                            )
                          }
                        </ul>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CrowdsourcingChallenges.propTypes = {
  challenges: PropTypes.array.isRequired,
  fetchChallenges: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchChallenges,
})(CrowdsourcingChallenges);
