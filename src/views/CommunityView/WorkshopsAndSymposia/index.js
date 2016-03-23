import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';

import formatDate from 'utils/formatDate';
import { fetchWorkshops, fetchSymposia } from 'actions/community';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './WorkshopsAndSymposia.scss';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
/* eslint react/prefer-stateless-function:0 max-len:0 */
const mapStateToProps = (state) => ({
  workshops: state.community.workshops,
  symposia: state.community.symposia,
});
export class WorkshopsAndSymposia extends Component {
  componentWillMount() {
    this.props.fetchWorkshops();
    this.props.fetchSymposia();
  }

  render() {
    const { workshops, symposia } = this.props;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Workshops & Symposia"
          subTitle=""
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Workshops and Symposia" />
            <div className="col-md-9 col-md-pull-3">
              <div className={styles.workshops}>
                <h2>Workshops</h2>
                { workshops.length === 0 && <p>No workshops available</p>}
                {
                  workshops.map((workshop) => {
                    const links = workshop.keyLinks;
                    const startDate = formatDate(new Date(workshop.startDate));
                    let endDate;
                    if (workshop.endDate) {
                      endDate = formatDate(new Date(workshop.endDate));
                    }
                    return (
                      <div className={styles.workshop}>
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
                            !!links && Object.keys(links).map((linkTitle) =>
                              <li><a href={links[linkTitle]}>{linkTitle}</a></li>
                            )
                          }
                        </ul>
                      </div>
                    );
                  })
                }
              </div>
              <div className={styles.symposia}>
                <h2>Symposia</h2>
                { symposia.length === 0 && <p>No symposia available</p>}
                {
                  symposia.map((sym, index) => {
                    const links = sym.keyLinks;
                    const startDate = formatDate(new Date(sym.startDate));
                    let endDate;
                    if (sym.endDate) {
                      endDate = formatDate(new Date(sym.endDate));
                    }
                    return (
                      <div key={index} className={styles.symposium}>
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
                            !!links && Object.keys(links).map((linkTitle) =>
                              <li><a href={links[linkTitle]}>{linkTitle}</a></li>
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

WorkshopsAndSymposia.propTypes = {
  workshops: PropTypes.array.isRequired,
  symposia: PropTypes.array.isRequired,
  fetchWorkshops: PropTypes.func.isRequired,
  fetchSymposia: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchWorkshops,
  fetchSymposia,
})(WorkshopsAndSymposia);
