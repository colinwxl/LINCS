import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import ldpScreenshot from '../images/ldp-sm-screenshot.png';


export default class Workflow extends Component {
  static subTitle = 'Check if a small molecule has been profiled by LINCS'
  static path = 'check-if-a-small-molecule-has-been-profiled-by-lincs'

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
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['sm-profiled']}`}>
              <p>
                The <Link to="/centers/data-and-signature-generating-centers">
                LINCS Data and Signature Generation Centers (DSGCs)</Link> generate data
                concerning the response of human cells to small molecule and drug perturbations
                to better understand their mechanisms of action. The first step to determine
                whether your small molecule of interest was profiled by one of the LINCS
                centers is to query the&nbsp;
                <a href="http://lincsportal.ccs.miami.edu/SmallMolecules/" target="_blank">
                  LINCS Data Portal 'Small Molecules'
                </a> browser by entering the small molecule in the search bar as illustrated below.
                If you find a match, you can explore the data generated by each
                of the DSGCs.
              </p>
              <img
                className={styles['img-bordered']}
                src={ldpScreenshot}
                alt="LINCS Data Portal Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
