import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import formatDate from 'utils/formatDate';
import { fetchWorkshops } from 'actions/community';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Workshops.scss';

const mapStateToProps = (state) => ({
  workshops: state.community.workshops,
});
export class Workshops extends Component {
  componentWillMount() {
    this.props.fetchWorkshops();
  }

  render() {
    const { workshops } = this.props;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Workshops"
          subTitle="Members of the Consortium conduct LINCS-related workshops"
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Workshops" />
            <div className="col-md-9 col-md-pull-3">
              <div className={styles.workshops}>
                <h2>Workshops</h2>
                {workshops.length === 0 && <p>No workshops available</p>}
                {
                  workshops.map((workshop, index) => {
                    const links = workshop.keyLinks;
                    const startDate = formatDate(new Date(workshop.startDate));
                    let endDate;
                    if (workshop.endDate) {
                      endDate = formatDate(new Date(workshop.endDate));
                    }
                    return (
                      <div key={`workshop ${index}`} className={styles.workshop}>
                        <div className={styles.header}>
                          <h5>{workshop.title}</h5>
                          {
                            !!endDate
                              ? <p><em>{startDate} to {endDate}</em></p>
                                : <p><em>{startDate}</em></p>
                          }
                          <p><em>{workshop.location}</em></p>
                        </div>
                        <p>{workshop.description}</p>
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

Workshops.propTypes = {
  workshops: PropTypes.array.isRequired,
  fetchWorkshops: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchWorkshops,
})(Workshops);
