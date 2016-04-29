import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import WorkflowSentModal from './WorkflowSentModal';
import { addWorkflow } from 'actions/toolsWorkflows';
import WorkflowInputForm from './WorkflowInputForm';
import styles from './AppsView.scss';

const awRoute = '/applications/workflows';

export default class CompBioWorkflows extends Component {
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
      type: 'computationalBiologist',
    });
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <div className={styles['workflow-comp-bio']}>
        <WorkflowSentModal isOpen={this.state.isModalOpen} onModalClose={this._handleModalClose} />
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
            <div className={styles.question}>
              <h4 className="text-xs-center">What would you like to achieve with LINCS?</h4>
              <WorkflowInputForm onSubmit={this._handleSubmit} />
            </div>
            <h4>I would like to...</h4>
            <div className={`row ${styles.examples}`}>
              <div className="col-sm-3 hidden-xs-down text-xs-center">
                <i className="fa fa-question" aria-hidden="true" />
              </div>
              <ul className="col-xs-12 col-sm-9">
                <li>
                  <Link to={`${awRoute}/obtaining-l1000-data`}>
                    find the best place to obtain the LINCS L1000 data
                  </Link>
                </li>
                <li>
                  <Link to={`${awRoute}/download-rna-seq-data`}>
                    download RNA-seq data from LINCS
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${awRoute}/collect-attrs-to-predict-gene-function-using-machine-learning`}
                  >
                    collect attributes about genes and proteins for predicting gene
                    function using machine learning, where can I find such data?
                  </Link>
                </li>
                <li>
                  <Link to={`${awRoute}/search-lincs-metadata`}>
                    search LINCS metadata through their API's
                  </Link>
                </li>
                <li>
                  <Link to={`${awRoute}/proteomic-epigenomic-data-l1000`}>
                    find proteomic and epigenomic data from the same conditions profiled
                    by the L1000 assay
                  </Link>
                </li>
                <li>
                  <Link to={`${awRoute}/viability-phenotype-data-following-sm-perturbations`}>
                    find data about cell viability and other cellular-level phenotypes
                    besides gene and protein expression in response to small molecule
                    perturbations
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

CompBioWorkflows.propTypes = {
  addWorkflow: PropTypes.func,
};

export default connect(null, { addWorkflow })(CompBioWorkflows);
