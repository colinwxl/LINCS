import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';
import lincsDataPortalScreenshot from './images/lincs-data-portal-screenshot.png';


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
            <div className={`col-xl-9 ${styles.workflow} ${styles['cell-line']}`}>
              <p>
                The <Link to="/centers/data-and-signature-generating-centers">LINCS Data and
                Signature Generation Centers (DSGCs)</Link> generate data concerning the response
                of human cells to small molecule, genetic and drug perturbations to better
                understand their mechanisms of action. The first step to determine whether a cell
                line of your interest was profiled by one of the LINCS centers is to query the
                LINCS Data Portal entities interface by typing the cell line name in the search
                bar available from <a href="http://lincsportal.ccs.miami.edu/entities/" target="_blank">here</a>.
                If you found a match, you can explore the data generated
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
