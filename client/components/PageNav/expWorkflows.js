import FindKnowledgeAboutASpecificGeneOrProtein
  from 'views/AppsView/Workflows/FindKnowledgeAboutASpecificGeneOrProtein';
import ExploreMicroscopyImagingData from 'views/AppsView/Workflows/ExploreMicroscopyImagingData';
import FindNovelCompoundsThatMimicOrReverseADiseaseSignature
  from 'views/AppsView/Workflows/FindNovelCompoundsThatMimicOrReverseADiseaseSignature';
import DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine
  from 'views/AppsView/Workflows/DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine';
import CheckIfASmallMoleculeHasBeenProfiled
  from 'views/AppsView/Workflows/CheckIfASmallMoleculeHasBeenProfiled';
import QueryAGeneExpressionSignatureAgainst
  from 'views/AppsView/Workflows/QueryAGeneExpressionSignatureAgainst';

const awRoute = '/applications/workflows';

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
]
