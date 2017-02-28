import React, { Component, PropTypes } from 'react';
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
                  challenges.map((sym, index) => {
                    const links = sym.keyLinks;
                    const startDate = formatDate(new Date(sym.startDate));
                    let endDate;
                    if (sym.endDate) {
                      endDate = formatDate(new Date(sym.endDate));
                    }
                    return (
                      <div key={`symposium ${index}`} className={styles.challenge}>
                        <div className={styles.header}>
                          <h5>{sym.title}</h5>
                          {
                            !!endDate
                              ? <p><em>{startDate} to {endDate}</em></p>
                                : <p><em>{startDate}</em></p>
                          }
                          <p><em>{sym.location}</em></p>
                        </div>
                        <p>{sym.description}</p>
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
