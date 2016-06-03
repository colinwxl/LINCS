import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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

const awRoute = '/applications/workflows';

class WorkflowInputForm extends Component {
  componentDidMount() {
    if (this.refs.question) {
      this.refs.question.focus();
    }
  }

  get expWorkflows() {
    return [
      {
        link: `${awRoute}/knowledge-about-a-gene-or-protein`,
        text: 'Find knowledge about a specific gene or protein',
      },
      {
        link: `${awRoute}/understand-mechanism-of-action-of-sm`,
        text: 'Explore microscopy imaging data collected across the LINCS centers',
      },
      {
        link: `${awRoute}/find-novel-compounds-that-mimic-or-reverse-disease-sig`,
        text: 'Find novel compounds that mimic or reverse a disease signature',
      },
      {
        link: `${awRoute}/data-from-a-specific-cell-line`,
        text: 'Find out if LINCS has collected data from a specific cell line',
        disabled: true,
      },
      {
        link: `${awRoute}/data-from-a-specific-sm`,
        text: 'Find out if LINCS has collected data from a specific small molecule',
      },
      {
        link: `${awRoute}/query-signature-against-l1000`,
        text: 'Query my own gene expression signature against the LINCS L1000 data',
      },
    ];
  }

  get compBioWorkflows() {
    return [
      {
        link: `${awRoute}/obtaining-l1000-data`,
        text: 'Find the best place to obtain the LINCS L1000 data',
      },
      {
        link: `${awRoute}/download-rna-seq-data`,
        text: 'Download RNA-seq data from LINCS',
      },
      {
        link: `${awRoute}/collect-attrs-to-predict-gene-function-using-machine-learning`,
        text: 'Collect attributes about genes and proteins for predicting gene ' +
          'function using machine learning, where can I find such data?',
      },
      {
        link: `${awRoute}/search-lincs-metadata`,
        text: 'Search LINCS metadata through their API\'s',
      },
      {
        link: `${awRoute}/proteomic-epigenomic-data-l1000`,
        text: 'Find proteomic and epigenomic data from the same ' +
          'conditions profiled by the L1000 assay',
      },
      {
        link: `${awRoute}/viability-phenotype-data-following-sm-perturbations`,
        text: 'Find data about cell viability and other cellular-level phenotypes ' +
          'besides gene and protein expression in response to small molecule ' +
          'perturbations',
      },
    ];
  }

  render() {
    const { handleSubmit, submitting, isCompBio } = this.props;
    const { question, email } = this.props.fields;
    const examples = isCompBio ? this.compBioWorkflows : this.expWorkflows;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
          <div className={styles.question}>
            <h4 className="text-xs-center">What would you like to achieve with LINCS?</h4>
            <p className={`text-muted ${styles.small} ${styles['p-half']}`}>
              You may request a workflow below and we will create one for you.
              Alternatively, examine the existing workflows to determine if any
              satisfy your requirements.
            </p>
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
              <div className={`row ${styles['form-row']} ${styles.examples}`}>
                <div className={`col-md-3 ${styles.base}`}>
                  <p className={`text-muted ${styles.small}`}><em>Examples</em></p>
                  <h5>I would like to...</h5>
                </div>
                <div className="col-xs-12 col-md-9">
                  <ul>
                    {
                      examples.length && examples.map((wfObj, i) =>
                        <li key={i}>
                          {
                            wfObj.disabled
                            ? <span>{wfObj.text}</span>
                            : <Link to={wfObj.link}>{wfObj.text}</Link>
                          }
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <p className={`text-muted ${styles.small} ${styles['p-half']}`}>
                    Provide your email and we will notify you upon completion of your
                    requested workflow.
                  </p>
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
          </div>
        </div>
      </div>
    );
  }
}

WorkflowInputForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  isCompBio: PropTypes.bool,
};

export default reduxForm({
  form: 'workflowInput',
  fields,
  validate,
})(WorkflowInputForm);
