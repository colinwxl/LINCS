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

const awRoute = '/applications/workflows';

export default [
  {
    title: 'Computational Biologist Workflow',
    route: `${awRoute}/${FindTheBestPlaceToObtainTheLINCSL1000Data.path}`,
    children: [
      {
        title: FindTheBestPlaceToObtainTheLINCSL1000Data.subTitle,
        route: `${awRoute}/${FindTheBestPlaceToObtainTheLINCSL1000Data.path}`,
        children: [],
      },
      {
        title: DownloadRNASeqDataFromLINCS.subTitle,
        route: `${awRoute}/${DownloadRNASeqDataFromLINCS.path}`,
        children: [],
      },
      {
        title: FindAttributesAboutGenesAndProteinsForMachineLearning.subTitle,
        route: `${awRoute}/${FindAttributesAboutGenesAndProteinsForMachineLearning.path}`,
        children: [],
      },
      {
        title: SearchLINCSMetadataThroughAPIs.subTitle,
        route: `${awRoute}/${SearchLINCSMetadataThroughAPIs.path}`,
        children: [],
      },
      {
        title: FindProteomicAndEpigenomicDataFromTheSameConditions.subTitle,
        route: `${awRoute}/${FindProteomicAndEpigenomicDataFromTheSameConditions.path}`,
        children: [],
      },
      {
        title: FindDataAboutCellViabilityAndOther.subTitle,
        route: `${awRoute}/${FindDataAboutCellViabilityAndOther.path}`,
        children: [],
      },
      {
        title: AnalyzeMyGenesAgainstLINCSData.subTitle,
        route: `${awRoute}/${AnalyzeMyGenesAgainstLINCSData.path}`,
        children: [],
      },
      {
        title: AnalyzeLINCSTranscriptomicAndProteomicDatasets.subTitle,
        route: `${awRoute}/${AnalyzeLINCSTranscriptomicAndProteomicDatasets.path}`,
        children: [],
      },
      {
        title: AnalyzeADrugSignatureAndFindOtherDrugs.subTitle,
        route: `${awRoute}/${AnalyzeADrugSignatureAndFindOtherDrugs.path}`,
        children: [],
      },
    ],
  },
];
