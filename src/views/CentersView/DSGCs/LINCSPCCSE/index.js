import React, { Component } from 'react';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from '../DSGCs.scss';

// TODO: Make a stateless function once completed. Leave for now to enable hot-reloading.
/* eslint react/prefer-stateless-function:0 max-len:0 */
export default class LINCSPCCSE extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS PCCSE"
          subTitle="The LINCS Proteomic Characterization Center for Signaling and Epigenetics at the Broad Institute in Cambridge, MA."
          imgSrc={require('./lincs-pccse.png')}
          imgAlt="LINCS PCCSE Logo"
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Data and Signature Generation Centers"
              subPage="LINCS Proteomic Characterization Center for Signaling and Epigenetics"
            />
            <div className="col-md-9 col-md-pull-3">
              <ul>
                <li>
                  Project Title: <a href="http://projectreporter.nih.gov/project_description.cfm?projectnumber=1U54HG008097-01" target="_blank">There and Back Again: Epigenetic Reinforcement of Cellular Signaling States (1U54HG008097)</a>
                </li>
                <li>
                  Principal Investigator: <a href="http://www.broadinstitute.org/~jjaffe/" target="_blank">Jake Jaffe PhD</a>
                </li>
                <li>
                  Awardee Organization: <a title="Broad Institute" href="https://www.broadinstitute.org/" target="_blank">Broad Institute</a>
                </li>
                <li>
                  Related Website: <a href="https://panoramaweb.org/labkey/project/LINCS/begin.view" target="_blank">LINCS PCCSE Panorama Repository</a>
                </li>
              </ul>
              <h2>About</h2>
              <p>
                The LINCS Proteomic Characterization Center for Signaling and Epigenetics, under
                the direction of Dr. Jacob D. Jaffe of the Broad Institute, tests the hypothesis
                that early modulation of signaling events in response to perturbations can
                establish new cellular states by altering their epigenetic landscapes. Using
                cutting-edge mass spectrometry-based proteomics assays, the center broadly profiles
                cellular responses in the spaces of phosphosignaling and histone modifications
                (epigenetic “marks”) in a highly multiplexed manner. The center focuses on
                perturbing genes and pathways in foundational biology systems (such as cancer cell
                lines) and in neurobiological cellular differentiation paradigms (under direction
                of co-investigator Dr. Li-Huei Tsai of MIT). Next-generation proteomic data
                acquisition and analysis strategies to support these activities are being
                developed in the laboratory of Dr. Michael MacCoss of the University of
                Washington.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
