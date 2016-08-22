import React, { Component } from 'react';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
import lcScreenshotOne from './images/lc-screenshot-1.png';
import lcScreenshotTwo from './images/lc-screenshot-2.png';
import l1000PipelineImg from './images/l1000-pipeline.png';
import l1000ResultImg from './images/l1000-result.png';
import geoScreenshot from './images/geo-screenshot.png';
import lincscloudApiImg from './images/lincscloud-api-ex.png';
import slicrLogo from './images/slicr-logo.png';
import slicrScreenshot from './images/slicr-screenshot.png';

export default class Workflow extends Component {

  static subTitle = 'Find the best place to obtain the LINCS L1000 data'
  static path = 'find-the-best-place-to-obtain-the-lincs-l1000-data'

  constructor(props) {
    super(props);
    this.state = {
      slicrQ: '',
    };
  }

  handleSlicrQ = (e) => {
    this.setState({ slicrQ: e.target.value });
  }

  handleSlicrSubmit = (e) => {
    e.preventDefault();
    if (window) {
      window.open(`http://amp.pharm.mssm.edu/Slicr/#/search/${this.state.slicrQ}`, '_blank');
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <div className={`col-xl-9 ${styles.workflow} ${styles['l1000-data']}`}>
              <p>
                The LINCS L1000 project has collected gene expression profiles for
                thousands of perturbagens at a variety of time points, doses, and cell
                lines. A full list of the chemical and genetic perturbations used can be
                found on the <a href="http://www.lincscloud.org/perturbagens/" target="_blank">
                LINCS cloud web site</a> along with their descriptions. A quick summary
                screenshot is shown below:
              </p>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6">
                      <img src={lcScreenshotOne} alt="lincscloud Screenshot" />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                      <img src={lcScreenshotTwo} alt="lincscloud Screenshot" />
                    </div>
                  </div>
                </div>
              </div>
              <p>
                The LINCS L1000 data is separated into five data levels at different
                points in the analysis pipeline.
              </p>
              <img
                src={l1000PipelineImg}
                alt="L1000 Pipeline"
                className={styles['img-spaced']}
              />
              <p>L1000 data is provided at five levels of the data processing pipeline:</p>
              <ul>
                <li>
                  <strong>Level 1:</strong> Raw unprocessed flow cytometry data from Luminex (LXB)
                </li>
                <li>
                  <strong>Level 2:</strong> Gene expression values per 1000 genes after
                  deconvolution (GEX)
                </li>
                <li>
                  <strong>Level 3:</strong> Quantile-normalized gene expression profiles of
                  landmark genes and imputed transcripts (Q2NORM or INF)
                </li>
                <li>
                  <strong>Level 4:</strong> Gene signatures computed using z-scores relative
                  to the plate population as control (ZSPCINF) or relative to the plate
                  vehicle control (ZSVCINF)
                </li>
                <li><strong>Level 5:</strong> Differential gene expression signatures</li>
              </ul>
              <p>
                You can obtain the L1000 directly from the LINCS Transcriptomics Center by signing
                up for an account at <a href="http://apps.lincscloud.org/register" target="_blank">
                http://apps.lincscloud.org/register</a>.
              </p>
              <h5>Downloading annotated level 4 data packages from the BD2K-LINCS DCIC</h5>
              <p>
                You can search for L1000 data packages on the
                LINCS <a
                  href="http://dev3.ccs.miami.edu:8080/datasets-beta/"
                  target="_blank"
                >
                  Data Releases
                </a> page.
              </p>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <img src={l1000ResultImg} alt="L1000 Search Result" />
                </div>
              </div>
              <p>
                Each result provides a link to the BD2K-LINCS DCIC annotated level 4 data
                package. In addition, each data package includes cell line and small molecule
                metadata, descriptions of the assay, the data generation center, and the raw data.
                The data is also available
                in <a href="http://support.lincscloud.org/hc/en-us/articles/202105453-GCT-Gene-Cluster-Text-Format-" target="_blank">
                GCT format</a>.
              </p>
              <h5>Downloading lower-level LINCS L1000 data from GEO</h5>
              <p>
                Compressed data files of level 1-4 L1000 data are also available
                on <a href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138" target="_blank">
                GEO</a>.
              </p>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <img
                    src={geoScreenshot}
                    alt="GEO Screenshot"
                    className={styles['img-bordered']}
                  />
                </div>
              </div>
              <p>
                The Level 2-4 is collected into a data series that can be found on the GEO
                accession pages. You can begin exploring the data in the super series web-page at:
                <a href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138" target="_blank">
                http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138</a>. This page contains
                links to twelve subseries that also have the raw, unprocessed Level 1 data.
              </p>
              <h5>
                Accessing annotations for cells lines, genes, perturbagens,
                and other L1000 assay information
              </h5>
              <p>
                The LINCS L1000 data is stored on Amazon S3. You can request access to the
                lincscloud.org API <a href="https://docs.google.com/a/wesleyan.edu/forms/d/1j6Vb_s4FrDodxoS3IDZsHWoVNrOnKNQbqwbwcW2a208/viewform" target="_blank">
                here</a>. The API provides programmatic access to annotations and
                perturbational signatures in the L1000 data via the HTTP-based RESTful web
                services. Once you receive access, you can query the database through the
                command line or the web browser. The API usage guidelines and demos can be
                found <a href="http://api.lincscloud.org/a2/usage" target="_blank">here</a>.
              </p>
              <img
                src={lincscloudApiImg}
                alt="lincscloud API Example"
                className={styles['img-bordered']}
              />
              <h5>Downloading precomputed gene expression signatures for a particular condition</h5>
              <p>
                You can also access gene expression signatures using a tools developed by the
                BD2K-LINCS DCIC called <a href="http://amp.pharm.mssm.edu/Slicr" target="_blank">
                Slicr</a>. Slicr allows users to query the LINCS L1000 corpus that is available
                on GEO for their perturbation of interest at the desired cell lines, doses,
                and time points by submitting requests to the search bar below:
              </p>
              <div className={styles.slicr}>
                <div className={styles['s-header']}>
                  <img src={slicrLogo} alt="Slicr Logo" />
                  <span>
                    <span className={styles['s-title']}>Slicr</span>
                    <span className={styles['s-subtitle']}>
                      LINCS L1000 Slicr &nbsp;[ <a target="_blank" href="http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE70138">GSE70138</a> data only ]
                    </span>
                  </span>
                  <a
                    className={styles['s-question']}
                    href="http://amp.pharm.mssm.edu/Slicr/help.html"
                  >
                    <i className="fa fa-question-circle" />
                  </a>
                </div>
                <form onSubmit={this.handleSlicrSubmit}>
                  <input
                    className="form-control"
                    placeholder={
                      'Search gene expression profile by perturbation, ' +
                      'cell-line, time point or dose'
                    }
                    value={this.state.slicrQ}
                    onChange={this.handleSlicrQ}
                  />
                </form>
              </div>
              <p>
                Users can choose between Level 3 data and Level 5 data. Level 3 data contains
                quantile-normalized expression values. The Level 5 data contains differential
                expression signatures computed across three replicates using the characteristic
                direction (CD) method (<a href="http://www.maayanlab.net/CD/" target="_blank">
                http://www.maayanlab.net/CD/</a>).
              </p>
              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <img src={slicrScreenshot} alt="Slicr Screenshot" />
                </div>
              </div>
              <p>
                Add your conditions of interest to the shopping cart. Your selected signatures
                are then available for download as tab-separated values. Individual entries
                can also be downloaded as JSON objects.
              </p>
              <p>
                Below is a YouTube lecture describing more about details about the
                L1000 data with more ways to access it:
              </p>
              <div className="row">
                <div className="col-xs-12 text-xs-center">
                  <iframe
                    src="https://www.youtube.com/embed/2EZZFoshGJo"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
