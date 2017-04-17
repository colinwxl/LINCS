import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import WorkflowSentModal from '../../WorkflowSentModal';
import { addWorkflow } from 'actions/toolsWorkflows';
import WorkflowInputForm from '../../WorkflowInputForm';
import styles from '../../AppsView.scss';

export class CompBioWorkflows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  handleSubmit = (form) => {
    this.props.addWorkflow({
      ...form,
      type: 'computationalBiologist',
    });
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <div className={styles['workflow-comp-bio']}>
        <WorkflowSentModal isOpen={this.state.isModalOpen} onModalClose={this.handleModalClose} />
        <WorkflowInputForm onSubmit={this.handleSubmit} isCompBio />
      </div>
    );
  }
}

CompBioWorkflows.propTypes = {
  addWorkflow: PropTypes.func,
};

export default connect(null, { addWorkflow })(CompBioWorkflows);
