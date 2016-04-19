import React from 'react';
import { Link } from 'react-router';

import WorkflowInput from './WorkflowInput';
import styles from './AppsView.scss';

const awRoute = '/applications/workflows';

export default function ExpWorkflows() {
  return (
    <div className={`${styles.workflow} ${styles['workflow-exp']}`}>
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <div className={styles.question}>
            <h5 className="text-xs-center">What would you like to achieve with LINCS?</h5>
            <WorkflowInput type="compBio" />
          </div>
          <h4>I would like to...</h4>
          <div className={`row ${styles.examples}`}>
            <div className="col-xs-3 text-xs-center">
              <i className="fa fa-question" aria-hidden="true" />
            </div>
            <ul className="col-xs-9">
              <li>
                <Link to={`${awRoute}/knowledge-about-a-gene-or-protein`}>
                  find knowledge about a specific gene or protein
                </Link>
              </li>
              <li>
                <Link to={`${awRoute}/understand-mechanism-of-action-of-sm`}>
                  understand the mechanism of action of a small molecule
                </Link>
              </li>
              <li>
                <Link to={`${awRoute}/find-novel-compounds-that-mimic-or-reverse-disease-sig`}>
                  find novel compounds that mimic or reverse a disease signature
                </Link>
              </li>
              <li>
                <Link to={`${awRoute}/data-from-a-specific-cell-line`}>
                  find out if LINCS has collected data from a specific cell line
                </Link>
              </li>
              <li>
                <Link to={`${awRoute}/data-by-applying-a-specific-sm`}>
                  find out if LINCS has collected data from a specific small molecule
                </Link>
              </li>
              <li>
                <Link to={`${awRoute}/query-signature-against-l1000`}>
                  query my own gene expression signature against the LINCS L1000 data
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
