import React from 'react';
import { Link } from 'react-router';

import styles from './Footer.scss';

const dataRoute = '/data';
const appsWorkflowsRoute = '/apps-workflows';

const centersRoute = '/centers';
const dsgcRoute = `${centersRoute}/data-and-signature-generating-centers`;

const mailLink = 'mailto:michael.mcdermott@mssm.edu?Subject=[Comments regarding lincsproject.org]';

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
          <div className="col-xs-12 col-sm-3">
            <h5>Centers</h5>
            <ul>
              <li>
                <Link to={`${centersRoute}/overview`}>Overview</Link>
              </li>
              <li>
                <Link to={`${centersRoute}/dcic`}>BD2K-LINCS DCIC</Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/hms-lincs`}>HMS LINCS</Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/dtoxs`}>DToxS</Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/lincs-pccse`}>LINCS Proteomics</Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/lincs-transcriptomics`}>LINCS Transcriptomics</Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/mep-lincs`}>MEP LINCS</Link>
              </li>
              <li>
                <Link to={`${dsgcRoute}/neurolincs`}>NeuroLINCS</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3">
            <h5>Data</h5>
            <ul>
              <li>
                <Link to={`${dataRoute}/releases`}>Releases</Link>
              </li>
              <li>
                <Link to={`${dataRoute}/release-policy`}>Release Policy</Link>
              </li>
              <li>
                <Link to={`${dataRoute}/standards`}>Standards</Link>
              </li>
              <li>
                <Link to={`${appsWorkflowsRoute}`}>Apps & Workflows</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3">
            <h5>Announcements</h5>
            <ul>
              <li>
                <Link to={`${dataRoute}/releases`}>Releases</Link>
              </li>
              <li>
                <Link to={`${dataRoute}/release-policy`}>Release Policy</Link>
              </li>
              <li>
                <Link to={`${dataRoute}/standards`}>Standards</Link>
              </li>
              <li>
                <Link to={`${appsWorkflowsRoute}`}>Apps & Workflows</Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="https://twitter.com/BD2KLINCSDCIC">Twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg">Youtube</a>
              </li>
              <li>
                <a href={mailLink}>Email</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12">
            <div className={`col-xs-12 col-sm-6 ${styles.copy}`}>
              <p>© 2016, LINCS Program. All rights reserved.</p>
            </div>
            <div className={`col-xs-12 col-sm-6 ${styles.credit}`}>
              <p>
                Funded by <a href="http://commonfund.nih.gov/lincs/" target="_blank">The NIH Common Fund</a>.
                Developed by the <a href="http://lincs-dcic.org/" target="_blank">BD2K-LINCS DCIC</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
