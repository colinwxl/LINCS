import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WorkflowSentModal from './WorkflowSentModal';
import { addWorkflow } from 'actions/toolsWorkflows';
import WorkflowInputForm from './WorkflowInputForm';
import styles from './AppsView.scss';

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
        <WorkflowInputForm onSubmit={this._handleSubmit} />
      </div>
    );
  }
}

ExpWorkflows.propTypes = {
  addWorkflow: PropTypes.func,
};

export default connect(null, { addWorkflow })(ExpWorkflows);
