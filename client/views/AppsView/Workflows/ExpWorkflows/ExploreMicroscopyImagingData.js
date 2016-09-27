import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import omeroScreenshot from '../images/omero-screenshot.png';
import mepLincsScreenshot from '../images/mep-lincs-screenshot.png';
import neuroLINCSScreenshot from '../images/neurolincs-screenshot.png';


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
              mainPage="Experimentalist Workflow"
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
              <p>
                <strong>
                  Three LINCS data generation centers: HMS LINCS, MEP LINCS, and NeuroLINCS
                  collect microscopy imaging data:
                </strong>
              </p>
              <div className={styles.section}>
                <p>
                  The <strong><a href="http://lincs.hms.harvard.edu" target="_blank">HMS LINCS Center</a></strong> collects
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
                  <strong>The <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/72486" target="_blank">MEP LINCS</a> center, and in particular the <a href="http://www.ohsu.edu/xd/education/schools/school-of-medicine/departments/basic-science-departments/biomedical-engineering/bme-labs/gray-lab/" target="_blank">Gray Lab</a>
                  </strong>, collects images of cancer cell lines growing in different
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
              <div>
                <p>
                  <strong>The <a href="https://labs.gladstone.org/finkbeiner/" target="_blank">Finkbeiner Lab</a> from the <a href="http://www.neurolincs.org/" target="_blank">NeuroLINCS</a> center</strong> is
                  utilizing robotics to collect microscopy images from neurons and iPSCs
                  created from ALS and SMA patients and heathy controls. The images are collected
                  in temporal fashion while measuring multiple parameters at once from each cell.
                  Some of these microscopy image data are made available for download at various
                  levels of abstraction with their associated metadata at: <a href="http://www.neurolincs.org/data" target="_blank">
                  http://www.neurolincs.org/data</a>
                </p>
                <div>
                  <img src={neuroLINCSScreenshot} alt="NeuroLINCS screenshot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
