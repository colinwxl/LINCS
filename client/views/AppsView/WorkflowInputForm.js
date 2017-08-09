import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';

import FindKnowledgeAboutASpecificGeneOrProtein from
'views/AppsView/Workflows/ExpWorkflows/FindKnowledgeAboutASpecificGeneOrProtein';
import ExploreMicroscopyImagingData from
'views/AppsView/Workflows/ExpWorkflows/ExploreMicroscopyImagingData';
import DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine from
'views/AppsView/Workflows/ExpWorkflows/DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine';
import CheckIfASmallMoleculeHasBeenProfiled from
'views/AppsView/Workflows/ExpWorkflows/CheckIfASmallMoleculeHasBeenProfiled';
import QueryAGeneExpressionSignatureAgainst from
'views/AppsView/Workflows/ExpWorkflows/QueryAGeneExpressionSignatureAgainst';
import FindNovelCompoundsThatMimicOrReverseADiseaseSignature from
'views/AppsView/Workflows/ExpWorkflows/FindNovelCompoundsThatMimicOrReverseADiseaseSignature';
import IdentifyMicroenvironmentsThatPromoteProliferation from
'views/AppsView/Workflows/ExpWorkflows/IdentifyMicroenvironmentsThatPromoteProliferation';
import ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines from
'views/AppsView/Workflows/ExpWorkflows/ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines';

import FindTheBestPlaceToObtainTheLINCSL1000Data from
'views/AppsView/Workflows/CompBioWorkflows/FindTheBestPlaceToObtainTheLINCSL1000Data';
import DownloadRNASeqDataFromLINCS from
'views/AppsView/Workflows/CompBioWorkflows/DownloadRNASeqDataFromLINCS';
import SearchLINCSMetadataThroughAPIs from
'views/AppsView/Workflows/CompBioWorkflows/SearchLINCSMetadataThroughAPIs';
import FindAttributesAboutGenesAndProteinsForMachineLearning from
'views/AppsView/Workflows/CompBioWorkflows/FindAttributesAboutGenesAndProteinsForMachineLearning';
import FindProteomicAndEpigenomicDataFromTheSameConditions from
'views/AppsView/Workflows/CompBioWorkflows/FindProteomicAndEpigenomicDataFromTheSameConditions';
import FindDataAboutCellViabilityAndOther from
'views/AppsView/Workflows/CompBioWorkflows/FindDataAboutCellViabilityAndOther';
import AnalyzeMyGenesAgainstLINCSData from
'views/AppsView/Workflows/CompBioWorkflows/AnalyzeMyGenesAgainstLINCSData';
import AnalyzeLINCSTranscriptomicAndProteomicDatasets from
'views/AppsView/Workflows/CompBioWorkflows/AnalyzeLINCSTranscriptomicAndProteomicDatasets';
import AnalyzeADrugSignatureAndFindOtherDrugs from
'views/AppsView/Workflows/CompBioWorkflows/AnalyzeADrugSignatureAndFindOtherDrugs';
import DownloadDataFromMEPLINCS from
'views/AppsView/Workflows/CompBioWorkflows/DownloadDataFromMEPLINCS/DownloadDataFromMEPLINCS';


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

const awRoute = '/tools/workflows';

class WorkflowInputForm extends Component {
  componentDidMount() {
    // if (this.refs.question) {
    //   this.refs.question.focus();
    // }
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
      {
        link: `${awRoute}/${ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines.path}`,
        text: ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines.subTitle,
        new: true,
      },
      {
        link: `${awRoute}/${IdentifyMicroenvironmentsThatPromoteProliferation.path}`,
        text: IdentifyMicroenvironmentsThatPromoteProliferation.subTitle,
        new: true,
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
      {
        link: `${awRoute}/${DownloadDataFromMEPLINCS.path}`,
        text: DownloadDataFromMEPLINCS.subTitle,
        new: true,
      },
    ];
  }

  render() {
    const { handleSubmit, isCompBio } = this.props;
    const examples = isCompBio ? this.compBioWorkflows : this.expWorkflows;
    return (
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
          <div className={styles.question}>
            <h4 className="text-xs-center">What would you like to achieve with LINCS?</h4>
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
                        {
                          wfObj.new
                          ? <sup className={styles.new}>NEW</sup>
                          : <span></span>
                        }
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <p className={`text-muted ${styles.small} ${styles['p-half']}`}>
                You may request a workflow below and we will create one for you.
                Alternatively, examine the existing workflows above to determine
                if any satisfy your requirements.
              </p>
              <div className={`row ${styles['form-row']}`}>
                <label htmlFor="question" className="col-md-3">Your Question/Aim</label>
                <div className={`col-md-9 ${styles['form-box']}`}>
                  <Field
                    name="question"
                    className={styles['workflow-input']}
                    component="input"
                    type="text"
                  />
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
                <label htmlFor="email" className="col-md-3">Email</label>
                <div className="col-md-6 col-xl-7">
                  <Field
                    name="email"
                    className={styles['workflow-input']}
                    component="input"
                    type="text"
                  />
                </div>
                <div className="col-md-3 col-xl-2">
                  <button
                    type="submit"
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
  fields: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  isCompBio: PropTypes.bool,
};

export default reduxForm({
  form: 'workflowInput',
  fields,
  validate,
})(WorkflowInputForm);
