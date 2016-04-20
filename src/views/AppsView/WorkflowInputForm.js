import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import styles from './AppsView.scss';

export const fields = ['question', 'email'];

const validate = (values) => {
  const errors = {};
  if (!values.question) {
    errors.question = 'Required';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

class WorkflowInputForm extends Component {
  componentDidMount() {
    if (this.refs.question) {
      this.refs.question.focus();
    }
  }

  render() {
    const { fields: { question, email }, handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className={`row ${styles['form-row']}`}>
          <label htmlFor="question" className="col-md-3">Your Question/Aim</label>
          <div className="col-md-9">
            <input
              id="question"
              ref="question"
              type="text"
              placeholder=""
              className={styles['workflow-input']}
              {...question}
            />
          </div>
        </div>
        <div className={`row ${styles['form-row']}`}>
          <label htmlFor="email" className="col-md-3">Email (optional)</label>
          <div className="col-md-6 col-xl-7">
            <input
              id="email"
              type="text"
              className={styles['workflow-input']}
              {...email}
            />
          </div>
          <div className="col-md-3 col-xl-2">
            <button
              type="submit"
              disabled={submitting}
              className={`btn ${styles['workflow-submit']}`}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

WorkflowInputForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'workflowInput',
  fields,
  validate,
})(WorkflowInputForm);
