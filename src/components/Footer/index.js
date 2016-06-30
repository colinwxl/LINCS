import React, { Component } from 'react';

import FooterDropDown from './FooterDropDown';
import styles from './Footer.scss';

const base = '/LINCS';
const dataRoute = `${base}/data`;
const applicationsRoute = `${base}/applications`;
const commRoute = `${base}/community`;
const centersRoute = `${base}/centers`;
const dsgcRoute = `${centersRoute}/data-and-signature-generating-centers`;

const sherry = 'sherry.jenkins@mssm.edu';
const subject = 'Questions/Comments regarding lincsproject.org';

const mailLink = `mailto:${sherry}?Subject=[${subject}]`;

// Can't use react-router { Link } here because this component is outside of the <Router />
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centersCollapsed: true,
      dataCollapsed: true,
      resourcesCollapsed: true,
      commCollapsed: true,
    };
  }

  // Do to restriction on Footer height, we need to keep the state of all dropdowns
  // in this component. This way we can close all other dropdowns when one is open.

  handleClick = (key) => {
    const { state } = this;
    Object.keys(state).forEach((k) => {
      if (k === key) {
        state[k] = !state[k];
      } else {
        state[k] = true;
      }
    });
    this.setState(state);
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.divider}>
          <span className={`col-xs-2 ${styles.green}`} />
          <span className={`col-xs-1 ${styles.teal}`} />
          <span className={`col-xs-6 ${styles.orange}`} />
          <span className={`col-xs-1 ${styles.teal}`} />
          <span className={`col-xs-2 ${styles.green}`} />
        </div>
        <div className={`container ${styles.content}`}>
          <div className={`row ${styles.map}`}>
            <FooterDropDown
              title="Centers"
              collapsed={this.state.centersCollapsed}
              onClick={() => { this.handleClick('centersCollapsed'); }}
            >
              <ul>
                <li><a href={`${centersRoute}/overview`}>Overview</a></li>
                <li><a href={`${centersRoute}/dcic`}>BD2K-LINCS DCIC</a></li>
                <li><a href={`${dsgcRoute}/hms-lincs`}>HMS LINCS</a></li>
                <li><a href={`${dsgcRoute}/dtoxs`}>DToxS</a></li>
                <li><a href={`${dsgcRoute}/lincs-pccse`}>LINCS Proteomics</a></li>
                <li><a href={`${dsgcRoute}/lincs-transcriptomics`}>LINCS Transcriptomics</a></li>
                <li><a href={`${dsgcRoute}/mep-lincs`}>MEP LINCS</a></li>
                <li><a href={`${dsgcRoute}/neurolincs`}>NeuroLINCS</a></li>
              </ul>
            </FooterDropDown>
            <FooterDropDown
              title="Data"
              collapsed={this.state.dataCollapsed}
              onClick={() => { this.handleClick('dataCollapsed'); }}
            >
              <ul>
                <li><a href={`${dataRoute}/releases`}>Releases</a></li>
                <li><a href={`${dataRoute}/release-policy`}>Release Policy</a></li>
                <li><a href={`${dataRoute}/standards`}>Standards</a></li>
              </ul>
            </FooterDropDown>
            <FooterDropDown
              title="Resources"
              collapsed={this.state.resourcesCollapsed}
              onClick={() => { this.handleClick('resourcesCollapsed'); }}
            >
              <ul>
                <li><a href={`${base}/publications`}>Publications</a></li>
                <li><a href={`${applicationsRoute}`}>Workflows</a></li>
                <li><a href={`${applicationsRoute}`}>Applications</a></li>
              </ul>
            </FooterDropDown>
            <FooterDropDown
              title="Community"
              collapsed={this.state.commCollapsed}
              onClick={() => { this.handleClick('commCollapsed'); }}
            >
              <ul>
                <li><a href={`${base}/news`}>News</a></li>
                <li><a href={`${commRoute}/webinars`}>Webinars</a></li>
                <li>
                  <a href={`${commRoute}/workshops-and-symposia`}>Workshops &amp; Symposia</a>
                </li>
              </ul>
            </FooterDropDown>
            <div className={`col-xs-12 col-md-3 ${styles.contact}`}>
              <h5>Contact</h5>
              <ul className={styles.icons}>
                <li>
                  <a href="https://twitter.com/LINCSProgram" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCNcDd4x8PsUZpt4U2Xa8sfg"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-square" />
                  </a>
                  <a href={mailLink}>
                    <i className="fa fa-envelope-o" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xs-12">
              <div className={`col-xs-12 col-md-6 col-lg-5 ${styles.copy}`}>
                <p>© 2016, LINCS Program. All rights reserved.</p>
              </div>
              <div className={`col-xs-12 col-md-6 col-lg-7 text-xl-right ${styles.credit}`}>
                <p>
                  Funded by <a href="http://commonfund.nih.gov/lincs/" target="_blank">
                  The NIH Common Fund</a>.
                  Developed by the <a href="http://lincs-dcic.org/" target="_blank">
                  BD2K-LINCS DCIC</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
