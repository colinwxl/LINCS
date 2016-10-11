import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './PageNav.scss';
import MapInfo from 'components/InteractiveMap/MapInfo';
import expWorkflows from './expWorkflows';
import compBioWorkflows from './compBioWorkflows';
import centerNavItems from './centerNavItems';
import communityNavItems from './communityNavItems';
import dataNavItems from './dataNavItems';

export default class PageNav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      mainPage,
      subPage,
      isCommunityPage,
      isDataPage,
      isWorkflowPage,
    } = this.props;
    let navItems = centerNavItems;
    let isCenterOverviewPage = true;
    let mapInfo;
    if (isCommunityPage) {
      navItems = communityNavItems;
      isCenterOverviewPage = false;
    } else if (isDataPage) {
      navItems = dataNavItems;
      isCenterOverviewPage = false;
    } else if (isWorkflowPage) {
      navItems = expWorkflows.concat(compBioWorkflows);
    }
    if (mainPage === 'Overview' && isCenterOverviewPage) {
      mapInfo = (
        <MapInfo />
      );
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
                        href="http://lincsportal.ccs.miami.edu/dcic-portal/"
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
          {mapInfo}
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
  isWorkflowPage: PropTypes.bool,
};
