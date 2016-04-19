import React, { Component, PropTypes } from 'react';

import styles from './AppsView.scss';

export default class WorkflowInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      email: '',
    };
  }

  componentDidMount() {
    if (this.refs.question) {
      this.refs.question.focus();
    }
  }

  _handleQuestionChange = (e) => {
    this.setState({ question: e.target.value });
  }

  _handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div>
        <div className={`row ${styles['form-row']}`}>
          <label htmlFor="question" className="col-sm-3">Your Question/Aim</label>
          <div className="col-sm-9">
            <input
              id="question"
              ref="question"
              type="text"
              placeholder=""
              className={styles['workflow-input']}
              onChange={this._handleQuestionChange}
              value={this.state.question}
            />
          </div>
        </div>
        <div className={`row ${styles['form-row']}`}>
          <label htmlFor="email" className="col-sm-3">Email (optional)</label>
          <div className="col-sm-7">
            <input
              id="email"
              type="text"
              placeholder="john.doe@example.com"
              className={styles['workflow-input']}
              onChange={this._handleEmailChange}
              value={this.state.email}
            />
          </div>
          <div className="col-sm-2">
            <button className={`btn ${styles['workflow-submit']}`}>Submit</button>
          </div>
        </div>
      </div>
    );
  }

}

WorkflowInput.propTypes = {
  type: PropTypes.string.isRequired,
};
