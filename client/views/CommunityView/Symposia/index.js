import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import formatDate from 'utils/formatDate';
import { fetchSymposia } from 'actions/community';
import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Symposia.scss';

const mapStateToProps = (state) => ({
  symposia: state.community.symposia,
});
export class Symposia extends Component {
  componentWillMount() {
    this.props.fetchSymposia();
  }

  render() {
    const { symposia } = this.props;
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="Symposia"
          subTitle="Members of the Consortium present LINCS-related topics at scientific meetings"
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Symposia" />
            <div className="col-md-9 col-md-pull-3">
              <div className={styles.symposia}>
                {symposia.length === 0 && <p>No symposia available</p>}
                {
                  symposia.map((sym, index) => {
                    const links = sym.keyLinks;
                    const startDate = formatDate(new Date(sym.startDate));
                    let endDate;
                    if (sym.endDate) {
                      endDate = formatDate(new Date(sym.endDate));
                    }
                    return (
                      <div key={`symposium ${index}`} className={styles.symposium}>
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

Symposia.propTypes = {
  symposia: PropTypes.array.isRequired,
  fetchSymposia: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  fetchSymposia,
})(Symposia);
