import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import WorkflowSentModal from './WorkflowSentModal';
import { addWorkflow } from 'actions/toolsWorkflows';
import WorkflowInputForm from './WorkflowInputForm';
import styles from './AppsView.scss';

const awRoute = '/applications/workflows';

export default class ExpWorkflows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  _handleModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  _handleSubmit = (form) => {
    this.props.addWorkflow({
      ...form,
      type: 'experimentalist',
    });
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <div className={styles['workflow-exp']}>
        <WorkflowSentModal isOpen={this.state.isModalOpen} onModalClose={this._handleModalClose} />
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
            <div className={styles.question}>
              <h4 className="text-xs-center">What would you like to achieve with LINCS?</h4>
              <WorkflowInputForm onSubmit={this._handleSubmit} />
            </div>
            <h4>I would like to...</h4>
            <div className={`row ${styles.examples}`}>
              <div className="col-md-3 hidden-sm-down text-xs-center">
                <i className="fa fa-question" aria-hidden="true" />
              </div>
              <ul className="col-xs-12 col-md-9">
                <li>
                  <Link to={`${awRoute}/knowledge-about-a-gene-or-protein`}>
                    find knowledge about a specific gene or protein
                  </Link>
                </li>
                <li>
                  <p to={`${awRoute}/understand-mechanism-of-action-of-sm`}>
                    understand the mechanism of action of a small molecule
                  </p>
                </li>
                <li>
                  <Link to={`${awRoute}/find-novel-compounds-that-mimic-or-reverse-disease-sig`}>
                    find novel compounds that mimic or reverse a disease signature
                  </Link>
                </li>
                <li>
                  <p to={`${awRoute}/data-from-a-specific-cell-line`}>
                    find out if LINCS has collected data from a specific cell line
                  </p>
                </li>
                <li>
                  <p to={`${awRoute}/data-by-applying-a-specific-sm`}>
                    find out if LINCS has collected data from a specific small molecule
                  </p>
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
}

ExpWorkflows.propTypes = {
  addWorkflow: PropTypes.func,
};

export default connect(null, { addWorkflow })(ExpWorkflows);
