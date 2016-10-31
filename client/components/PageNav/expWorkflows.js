import FindKnowledgeAboutASpecificGeneOrProtein from
'views/AppsView/Workflows/ExpWorkflows/FindKnowledgeAboutASpecificGeneOrProtein';
import ExploreMicroscopyImagingData from
'views/AppsView/Workflows/ExpWorkflows/ExploreMicroscopyImagingData';
import FindNovelCompoundsThatMimicOrReverseADiseaseSignature from
'views/AppsView/Workflows/ExpWorkflows/FindNovelCompoundsThatMimicOrReverseADiseaseSignature';
import DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine from
'views/AppsView/Workflows/ExpWorkflows/DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine';
import CheckIfASmallMoleculeHasBeenProfiled from
'views/AppsView/Workflows/ExpWorkflows/CheckIfASmallMoleculeHasBeenProfiled';
import QueryAGeneExpressionSignatureAgainst from
'views/AppsView/Workflows/ExpWorkflows/QueryAGeneExpressionSignatureAgainst';

const awRoute = '/tools/workflows';

export default [
  {
    title: 'Experimentalist Workflow',
    route: `${awRoute}/${FindKnowledgeAboutASpecificGeneOrProtein.path}`,
    children: [
      {
        title: FindKnowledgeAboutASpecificGeneOrProtein.subTitle,
        route: `${awRoute}/${FindKnowledgeAboutASpecificGeneOrProtein.path}`,
        children: [],
      },
      {
        title: ExploreMicroscopyImagingData.subTitle,
        route: `${awRoute}/${ExploreMicroscopyImagingData.path}`,
        children: [],
      },
      {
        title: FindNovelCompoundsThatMimicOrReverseADiseaseSignature.subTitle,
        route: `${awRoute}/${FindNovelCompoundsThatMimicOrReverseADiseaseSignature.path}`,
        children: [],
      },
      {
        title: DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.subTitle,
        route: `${awRoute}/${DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.path}`,
        children: [],
      },
      {
        title: CheckIfASmallMoleculeHasBeenProfiled.subTitle,
        route: `${awRoute}/${CheckIfASmallMoleculeHasBeenProfiled.path}`,
        children: [],
      },
      {
        title: QueryAGeneExpressionSignatureAgainst.subTitle,
        route: `${awRoute}/${QueryAGeneExpressionSignatureAgainst.path}`,
        children: [],
      },
    ],
  },
];
