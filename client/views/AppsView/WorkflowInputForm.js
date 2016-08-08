import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';

import FindKnowledgeAboutASpecificGeneOrProtein
  from 'views/AppsView/Workflows/FindKnowledgeAboutASpecificGeneOrProtein';
import ExploreMicroscopyImagingData from 'views/AppsView/Workflows/ExploreMicroscopyImagingData';
import DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine
  from 'views/AppsView/Workflows/DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine';
import CheckIfASmallMoleculeHasBeenProfiled
  from 'views/AppsView/Workflows/CheckIfASmallMoleculeHasBeenProfiled';
import QueryAGeneExpressionSignatureAgainst
  from 'views/AppsView/Workflows/QueryAGeneExpressionSignatureAgainst';
import FindNovelCompoundsThatMimicOrReverseADiseaseSignature
  from 'views/AppsView/Workflows/FindNovelCompoundsThatMimicOrReverseADiseaseSignature';
import FindTheBestPlaceToObtainTheLINCSL1000Data
  from 'views/AppsView/Workflows/FindTheBestPlaceToObtainTheLINCSL1000Data';
import DownloadRNASeqDataFromLINCS from 'views/AppsView/Workflows/DownloadRNASeqDataFromLINCS';
import SearchLINCSMetadataThroughAPIs
  from 'views/AppsView/Workflows/SearchLINCSMetadataThroughAPIs';
import FindAttributesAboutGenesAndProteinsForMachineLearning
  from 'views/AppsView/Workflows/FindAttributesAboutGenesAndProteinsForMachineLearning';
import FindProteomicAndEpigenomicDataFromTheSameConditions
  from 'views/AppsView/Workflows/FindProteomicAndEpigenomicDataFromTheSameConditions';
import FindDataAboutCellViabilityAndOther
  from 'views/AppsView/Workflows/FindDataAboutCellViabilityAndOther';
import AnalyzeMyGenesAgainstLINCSData
  from 'views/AppsView/Workflows/AnalyzeMyGenesAgainstLINCSData';
import AnalyzeLINCSTranscriptomicAndProteomicDatasets
  from 'views/AppsView/Workflows/AnalyzeLINCSTranscriptomicAndProteomicDatasets';
import AnalyzeADrugSignatureAndFindOtherDrugs
  from 'views/AppsView/Workflows/AnalyzeADrugSignatureAndFindOtherDrugs';

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
        link: `${awRoute}/${FindKnowledgeAboutASpecificGeneOrProtein.path}`,
        text: FindKnowledgeAboutASpecificGeneOrProtein.subTitle,
      },
      {
        link: `${awRoute}/${ExploreMicroscopyImagingData.path}`,
        text: ExploreMicroscopyImagingData.subTitle,
      },
      {
        link: `${awRoute}/${FindNovelCompoundsThatMimicOrReverseADiseaseSignature.path}`,
        text: FindNovelCompoundsThatMimicOrReverseADiseaseSignature.subTitle,
      },
      {
        link: `${awRoute}/${DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.path}`,
        text: DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.subTitle,
      },
      {
        link: `${awRoute}/${CheckIfASmallMoleculeHasBeenProfiled.path}`,
        text: CheckIfASmallMoleculeHasBeenProfiled.subTitle,
      },
      {
        link: `${awRoute}/${QueryAGeneExpressionSignatureAgainst.path}`,
        text: QueryAGeneExpressionSignatureAgainst.subTitle,
      },
    ];
  }

  get compBioWorkflows() {
    return [
      {
        link: `${awRoute}/${FindTheBestPlaceToObtainTheLINCSL1000Data.path}`,
        text: FindTheBestPlaceToObtainTheLINCSL1000Data.subTitle,
      },
      {
        link: `${awRoute}/${DownloadRNASeqDataFromLINCS.path}`,
        text: DownloadRNASeqDataFromLINCS.subTitle,
      },
      {
        link: `${awRoute}/${FindAttributesAboutGenesAndProteinsForMachineLearning.path}`,
        text: FindAttributesAboutGenesAndProteinsForMachineLearning.subTitle,
      },
      {
        link: `${awRoute}/${SearchLINCSMetadataThroughAPIs.path}`,
        text: SearchLINCSMetadataThroughAPIs.subTitle,
      },
      {
        link: `${awRoute}/${FindProteomicAndEpigenomicDataFromTheSameConditions.path}`,
        text: FindProteomicAndEpigenomicDataFromTheSameConditions.subTitle,
      },
      {
        link: `${awRoute}/${FindDataAboutCellViabilityAndOther.path}`,
        text: FindDataAboutCellViabilityAndOther.subTitle,
      },
      {
        link: `${awRoute}/${AnalyzeMyGenesAgainstLINCSData.path}`,
        text: AnalyzeMyGenesAgainstLINCSData.subTitle,
      },
      {
        link: `${awRoute}/${AnalyzeLINCSTranscriptomicAndProteomicDatasets.path}`,
        text: AnalyzeLINCSTranscriptomicAndProteomicDatasets.subTitle,
      },
      {
        link: `${awRoute}/${AnalyzeADrugSignatureAndFindOtherDrugs.path}`,
        text: AnalyzeADrugSignatureAndFindOtherDrugs.subTitle,
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
