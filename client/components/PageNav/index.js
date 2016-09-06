import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './PageNav.scss';

const centersRoute = '/centers';
const dsgcRoute = `${centersRoute}/data-and-signature-generating-centers`;
const communityRoute = '/community';
const dataRoute = '/data';

export default class PageNav extends Component {
  get centerNavItems() {
    return [
      {
        title: 'Overview',
        route: `${centersRoute}/overview`,
        children: [],
      },
      {
        title: 'BD2K-LINCS Data Coordination and Integration Center',
        route: `${centersRoute}/dcic`,
        children: [],
      },
      {
        title: 'Data and Signature Generation Centers',
        route: dsgcRoute,
        children: [
          { title: 'Introduction', route: dsgcRoute },
          { title: 'Drug Toxicity Signature Generation Center', route: `${dsgcRoute}/dtoxs` },
          { title: 'HMS LINCS', route: `${dsgcRoute}/hms-lincs` },
          {
            title: 'LINCS Center for Transcriptomics',
            route: `${dsgcRoute}/lincs-transcriptomics`,
          },
          {
            title: 'LINCS Proteomic Characterization Center for Signaling and Epigenetics',
            route: `${dsgcRoute}/lincs-pccse`,
          },
          {
            title: 'Microenvironment Perturbagen (MEP) LINCS Center',
            route: `${dsgcRoute}/mep-lincs`,
          },
          { title: 'NeuroLINCS Center', route: `${dsgcRoute}/neurolincs` },
        ],
      },
      {
        title: 'Pilot Phase I Centers',
        route: `${centersRoute}/phase-one`,
        children: [],
      },
    ];
  }

  get communityNavItems() {
    return [
      {
        title: 'Overview',
        route: `${communityRoute}/overview`,
        children: [],
      },
      {
        title: 'Funding Opportunities',
        route: `${communityRoute}/funding-opportunities`,
        children: [],
      },
      {
        title: 'LINCS Consortium Meetings',
        route: `${communityRoute}/consortium-meetings`,
        children: [],
      },
      {
        title: 'Webinars',
        route: `${communityRoute}/webinars`,
        children: [],
      },
      {
        title: 'Workshops',
        route: `${communityRoute}/workshops`,
        children: [],
      },
      {
        title: 'Symposia',
        route: `${communityRoute}/symposia`,
        children: [],
      },
    ];
  }

  get dataNavItems() {
    return [
      {
        title: 'Overview',
        route: `${dataRoute}/overview`,
        children: [],
      },
      {
        title: 'Releases',
        route: `${dataRoute}/releases`,
        children: [],
      },
      {
        title: 'Release Policy',
        route: `${dataRoute}/release-policy`,
        children: [],
      },
      {
        title: 'Standards',
        route: `${dataRoute}/standards`,
        children: [],
      },
    ];
  }

  render() {
    const { mainPage, subPage, isCommunityPage, isDataPage } = this.props;
    let navItems = this.centerNavItems;
    if (isCommunityPage) {
      navItems = this.communityNavItems;
    }
    if (isDataPage) {
      navItems = this.dataNavItems;
    }
    return (
      <div className={`col-md-3 col-md-push-9 ${styles.wrapper}`}>
        <div className={styles.wrapper}>
          <nav>
            {
              navItems.map((navObj, index) => {
                let navClasses = styles['nav-item'];
                if (navObj.title === mainPage) {
                  navClasses = `${styles['nav-item']} ${styles.active}`;
                }
                if (navObj.title === 'Releases') {
                  return (
                    <div key={index} className={navClasses}>
                      <a
                        href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
                        target="_blank"
                        className={styles.link}
                        style={{ display: 'inline-block' }}
                      >
                        Releases
                      </a>
                      <i
                        style={{ display: 'inline-block' }}
                        className="fa fa-external-link"
                        aria-hidden="true"
                      />
                    </div>
                  );
                }
                return (
                  <div key={index} className={navClasses}>
                    <Link className={styles.link} to={navObj.route}>{navObj.title}</Link>
                    {
                      !!navObj.children.length &&
                      (
                        <ul className={`nav ${styles['inner-nav']}`}>
                          {
                            navObj.children.map((navChild, i) =>
                              <li
                                key={i}
                                className={navChild.title === subPage ? styles['inner-active'] : ''}
                              >
                                <Link
                                  className={styles['inner-link']}
                                  to={navChild.route}
                                >
                                  {navChild.title}
                                </Link>
                              </li>
                            )
                          }
                        </ul>
                      )
                    }
                  </div>
                );
              })
            }
          </nav>
        </div>
      </div>
    );
  }
}

PageNav.propTypes = {
  mainPage: PropTypes.string.isRequired,
  subPage: PropTypes.string,
  isCommunityPage: PropTypes.bool,
  isDataPage: PropTypes.bool,
};
