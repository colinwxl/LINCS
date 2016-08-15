import React, { Component } from 'react';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
import omeroScreenshot from './images/omero-screenshot.png';
import mepLincsScreenshot from './images/mep-lincs-screenshot.png';
import neuroLINCSScreenshot from './images/neurolincs-screenshot.png';


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
            <div className={`col-xl-9 ${styles.workflow} ${styles['sm-mechanism-workflow']}`}>
              <p>
                <strong>
                  Three LINCS data generation centers: HMS-LINCS, MEP-LINCS, and NeuroLINCS
                  collect microscopy imaging data:
                </strong>
              </p>
              <div className={styles.section}>
                <p>
                  The <strong><a href="http://lincs.hms.harvard.edu" target="_blank">HMS-LINCS
                  </a> center </strong>collect various types of imaging data such as florescence imaging of cell viability and
                  proliferation through apototic and mitotic markers. HMS-LINCS, additionally, monitors the activity of
                  key protein kinases using florescence microscopy and some of those experiments are conducted in
                  live cells. The best place to obtain access to these datasets is through the
                  <a href="http://lincs.hms.harvard.edu/db" target="_blank"> HMS-LINCS Database</a>. Collected images are
                  made available through the <a href="https://lincs-omero.hms.harvard.edu/webclient/userdata/?experimenter=-1" target="_blank">
                   OMERO</a> web-client. See for example this link and image below: <br/>
                  <a href="https://lincs-omero.hms.harvard.edu/webclient/img_detail/317001/" target="_blank">https://lincs-omero.hms.harvard.edu/webclient/img_detail/317001/</a>
                </p>
                <div>
                  <img src={omeroScreenshot} alt="OMERO screenshot" />
                </div>
              </div>
              <div className={styles.section}>
                <p>
                  <strong>The <a href="https://www.synapse.org/#!Synapse:syn2862345/wiki/72486" target="_blank">MEP-LINCS</a> center, and in particular the <a href="http://www.ohsu.edu/xd/education/schools/school-of-medicine/departments/basic-science-departments/biomedical-engineering/bme-labs/gray-lab/" target="_blank">Gray Lab</a>
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
