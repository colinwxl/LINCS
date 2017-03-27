import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import clueAPIPlayground from '../images/clueAPIPlayground.png';

export default class Workflow extends Component {

  static subTitle = 'Search LINCS metadata through APIs'
  static path = 'search-lincs-metadata-through-apis'

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
              mainPage="Computational Biologist Workflows"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['search-meta']}`}>
              <h3>What is an API?</h3>
              <p>
                An application programming interface (API) is a set of functions publicly
                available to the client of a software application. An API specifies the input
                and output for each function, but hides the implementation details. A web API
                is an API that uses the HTTP protocol.
              </p>
              <p>
                For more information on APIs, please watch the BD2K-LINCS DCIC Coursera
                videos on the subject:
              </p>
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h5>RESTful API Part I</h5>
                  <div className="text-xs-center">
                    <iframe
                      src="https://www.youtube.com/embed/BUXsrW3y1TA"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <h5>RESTful API Part II</h5>
                  <div className="text-xs-center">
                    <iframe
                      src="https://www.youtube.com/embed/gAA2vsUT2a0"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <h3>The LINCS APIs</h3>
              <p>
                There are a number of LINCS web applications with APIs for searching
                through LINCS data in a variety of formats:
              </p>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Web Application</td>
                      <td>Description</td>
                      <td>Documentation</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LINCS Data Portal</td>
                      <td>Unified access to LINCS datasets and metadata</td>
                      <td>
                        <a href="http://lincsportal.ccs.miami.edu/apis/" target="_blank">
                          Documentation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>piLINCS</td>
                      <td>Proteomics datasets (P100 and GCP) on Panorama</td>
                      <td>
                        <a href="http://eh3.uc.edu/pilincs/#/api" target="_blank">
                          Documentation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>HMS LINCS Database</td>
                      <td>Small molecules, antibodies, and cell lines</td>
                      <td>
                        <a
                          href="https://docs.google.com/document/d/1R_d_1UWO0C9y1TceXpKIUkhjk08DfvP1D19txi4Tbas/edit"
                          target="_blank"
                        >
                          Documentation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>CLUE Platform</td>
                      <td>Annotations and perturbational signatures</td>
                      <td>
                        <a href="https://clue.io/api" target="_blank">
                          Documentation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Harmonizome</td>
                      <td>
                        Genes or proteins and their functional terms, federated
                        from over a hundred resources
                      </td>
                      <td>
                        <a
                          href="http://amp.pharm.mssm.edu/Harmonizome/documentation"
                          target="_blank"
                        >
                          Documentation
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>L1000CDS<sup>2</sup></td>
                      <td>Search similar gene signatures preprocessed from L1000 compound data</td>
                      <td>
                        <a href="http://amp.pharm.mssm.edu/L1000CDS2/help/#api" target="_blank">
                          Documentation
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.examples}>
                <h5>
                  Examples of programmatic access of LINCS data with
                  some of the currently available APIs
                </h5>
                <p>To obtain metadata about the kinase ROCK1:</p>
                <ul>
                  <li>
                    Using the LINCS Data Portal: <a href="http://lincsportal.ccs.miami.edu/dcic/api/fetchentities?searchTerm=Rock1" target="_blank">
                    http://.../api/fetchentities?searchTerm=Rock1</a>
                  </li>
                  <li>
                    Using the Harmonizome: <a href="http://amp.pharm.mssm.edu/Harmonizome/api/1.0/gene/ROCK1" target="_blank">
                    http://.../api/1.0/gene/ROCK1</a>
                  </li>
                </ul>
                <p>To obtain metadata on hepatocellular carcinoma:</p>
                <ul>
                  <li>
                    From HMS LINCS: <a href="http://lincs.hms.harvard.edu/db/api/v1/cell/50015/?format=json" target="_blank">
                    http://.../api/v1/cell/50015/?format=json</a>
                  </li>
                </ul>
                <p>To obtain a list of perturbations applied by the P100 assay:</p>
                <ul>
                  <li>
                    From piLINCS: <a href="http://eh3.uc.edu/pilincs/api-perturbations/P100" target="_blank">
                    http://.../api-perturbations/P100</a>
                  </li>
                </ul>
                <p>
                  The <a href="https://clue.io/api" target="_blank">CLUE API</a> playground
                  allows end consumers to visualize and interact with the API’s resources/services.
                </p>
                <br />
                <img src={clueAPIPlayground} alt="CLUE API Playground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
