import React from 'react';

import FooterDropDown from './FooterDropDown';
import styles from './Footer.scss';

const base = '/LINCS';
const dataRoute = `${base}/data`;
const applicationsRoute = `${base}/applications`;

const centersRoute = `${base}/centers`;
const dsgcRoute = `${centersRoute}/data-and-signature-generating-centers`;

const mgm = 'michael.mcdermott@mssm.edu';
const sherry = 'sherry.jenkins@mssm.edu';
const subject = 'Questions/Comments regarding lincsproject.org';

const mailLink = `mailto:${mgm},${sherry}?Subject=[${subject}]`;

// Can't use react-router { Link } here because this component is outside of the <Router />
export default function Footer(/* props */) {
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
          <div className="col-md-3 hidden-md-down">
            <h5>Centers</h5>
            <ul>
              <li>
                <a href={`${centersRoute}/overview`}>Overview</a>
              </li>
              <li>
                <a href={`${centersRoute}/dcic`}>BD2K-LINCS DCIC</a>
              </li>
              <li>
                <a href={`${dsgcRoute}/hms-lincs`}>HMS LINCS</a>
              </li>
              <li>
                <a href={`${dsgcRoute}/dtoxs`}>DToxS</a>
              </li>
              <li>
                <a href={`${dsgcRoute}/lincs-pccse`}>LINCS Proteomics</a>
              </li>
              <li>
                <a href={`${dsgcRoute}/lincs-transcriptomics`}>LINCS Transcriptomics</a>
              </li>
              <li>
                <a href={`${dsgcRoute}/mep-lincs`}>MEP LINCS</a>
              </li>
              <li>
                <a href={`${dsgcRoute}/neurolincs`}>NeuroLINCS</a>
              </li>
            </ul>
          </div>
          <FooterDropDown title="Centers">
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
          <div className="col-md-3 hidden-md-down">
            <h5>Data</h5>
            <ul>
              <li>
                <a href={`${dataRoute}/releases`}>Releases</a>
              </li>
              <li>
                <a href={`${dataRoute}/release-policy`}>Release Policy</a>
              </li>
              <li>
                <a href={`${dataRoute}/standards`}>Standards</a>
              </li>
              <li>
                <a href={`${applicationsRoute}`}>Apps & Workflows</a>
              </li>
            </ul>
          </div>
          <FooterDropDown title="Data">
            <ul>
              <li><a href={`${dataRoute}/releases`}>Releases</a></li>
              <li><a href={`${dataRoute}/release-policy`}>Release Policy</a></li>
              <li><a href={`${dataRoute}/standards`}>Standards</a></li>
              <li><a href={`${applicationsRoute}`}>Apps & Workflows</a></li>
            </ul>
          </FooterDropDown>
          <div className="col-md-3 hidden-md-down">
            <h5>Announcements</h5>
            <ul>
              <li>
                <a href={`${base}/publications`}>Publications</a>
              </li>
              <li>
                <a href={`${base}/news`}>News</a>
              </li>
              <li>
                <a href={`${base}/community/webinars`}>Webinars</a>
              </li>
              <li>
                <a href={`${base}/community/workshops-and-symposia`}>Workshops and Symposia</a>
              </li>
            </ul>
          </div>
          <FooterDropDown title="Announcements">
            <ul>
              <li><a href={`${base}/publications`}>Publications</a></li>
              <li><a href={`${base}/news`}>News</a></li>
              <li><a href={`${base}/community/webinars`}>Webinars</a></li>
              <li>
                <a href={`${base}/community/workshops-and-symposia`}>Workshops and Symposia</a>
              </li>
            </ul>
          </FooterDropDown>
          <div className={`col-xs-12 col-md-3 ${styles.contact}`}>
            <h5>Contact</h5>
            <ul className={styles.icons}>
              <li>
                <a href="https://twitter.com/BD2KLINCSDCIC">
                  <i className="fa fa-twitter" />
                </a>
                <a href="https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg">
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
