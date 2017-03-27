import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import omeroScreenshot from '../images/omero-screenshot.png';
import mepLincsScreenshot from '../images/mep-lincs-screenshot.png';

export default class Workflow extends Component {

  static subTitle = 'Explore microscopy imaging data collected across the LINCS centers'
  static path = 'explore-microscopy-imaging-data-collected-across-the-lincs-centers'

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Experimentalist Workflows"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div
              className={
                `col-md-9 col-md-pull-3
                ${styles.workflow}
                ${styles['sm-mechanism-workflow']}`
              }
            >
              <div className={styles.section}>
                <p>
                  The <a href="http://lincs.hms.harvard.edu" target="_blank">HMS LINCS Center</a> collects
                  various types of fixed- and live-cell fluorescence imaging data to assess cell
                  viability, cell proliferation, and the abundance and activity of key proteins.
                  These imaging datasets, including raw and processed image data as well as
                  derived numerical data, are available through the&nbsp;
                  <a href="http://lincs.hms.harvard.edu/db" target="_blank">HMS LINCS Database</a>
                  &nbsp;and the associated&nbsp;
                  <a href="https://lincs-omero.hms.harvard.edu/webclient/userdata/?experimenter=-1" target="_blank">
                    HMS LINCS OMERO
                  </a> server. An&nbsp;
                  <a
                    href="https://lincs-omero.hms.harvard.edu/webclient/img_detail/1375309/"
                    target="_blank"
                  >
                    example image
                  </a> from the HMS LINCS OMERO server is shown below.
                </p>
                <div>
                  <img src={omeroScreenshot} alt="OMERO screenshot" />
                </div>
              </div>
              <div className={styles.section}>
                <p>
                  The&nbsp;
                  <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/72486" target="_blank">
                    MEP LINCS Center
                  </a> collects images of cancer cell lines growing in different
                  micro-environments and treated with different endogenous extracellular ligands.
                  The cells are visualized with advanced microscopy that provides layered
                  visualization of several parameters. The processed imaging data (features) are
                  served on <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/394513" target="_blank">
                  Synapse</a> whereas the raw images can be accessed upon request from an OMERO
                  database that is currently under development: <a href="https://meplincs.ohsu.edu/webclient/login/?url=%2Fwebclient%2F" target="_blank">
                  https://meplincs.ohsu.edu/webclient/login/?url=%2Fwebclient%2F</a>
                </p>
                <div>
                  <img src={mepLincsScreenshot} alt="MEP-LINCS screenshot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
