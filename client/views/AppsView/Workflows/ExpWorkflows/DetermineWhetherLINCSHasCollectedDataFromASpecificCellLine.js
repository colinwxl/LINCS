import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import lincsDataPortalScreenshot from '../images/cell-lines.png';


export default class Workflow extends Component {
  static subTitle = 'Determine whether LINCS has collected data from a specific cell line'
  static path = 'determine-whether-lincs-has-collected-data-from-a-specific-cell-line'

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
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['cell-line']}`}>
              <p>
                The <Link to="/centers/data-and-signature-generating-centers">LINCS Data and
                Signature Generation Centers (DSGCs)</Link> generate data concerning the response
                of human cells to small molecule, genetic and drug perturbations to better
                understand their mechanisms of action. The first step to determine whether your cell
                line of interest was profiled by one of the LINCS centers is to query the&nbsp;
                <a href="http://lincsportal.ccs.miami.edu/cells/" target="_blank">
                  LINCS Data Portal 'Cells'
                </a> browser by entering the cell line in the search bar as illustrated below.
                If you find a match, you can explore the data generated
                by each of the DSGCs.
                <img src={lincsDataPortalScreenshot} alt="LINCS Data Portal screenshot" />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
