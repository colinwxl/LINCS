// Routes
// This file contains all of the routes for the front-end of the app.
// This is pretty straight-forward, however to better understand what's going on here,
// view the react-router
// documentation: https://github.com/reactjs/react-router/tree/master/docs#table-of-contents
// and more specifically, the RouteConfiguration docs:
// https://github.com/reactjs/react-router/blob/master/docs/guides/RouteConfiguration.md

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import HomeView from 'views/HomeView';
import AboutView from 'views/AboutView';
import MobileDownloadView from 'views/MobileDownloadView';

// Centers
import CentersOverview from 'views/CentersView/Overview';
// DSGCs
import DSGCs from 'views/CentersView/DSGCs';
import DToxS from 'views/CentersView/DSGCs/DToxS';
import HMSLINCS from 'views/CentersView/DSGCs/HMSLINCS';
import LINCSTranscriptomics from 'views/CentersView/DSGCs/LINCSTranscriptomics';
import LINCSPCCSE from 'views/CentersView/DSGCs/LINCSPCCSE';
import MEPLINCS from 'views/CentersView/DSGCs/MEPLINCS';
import NeuroLINCS from 'views/CentersView/DSGCs/NeuroLINCS';
// DCIC
import DCIC from 'views/CentersView/DCIC';
// LINCS Phase One
import PhaseOne from 'views/CentersView/PhaseOne';

// Community
import CommunityOverview from 'views/CommunityView/Overview';
import CrowdsourcingChallenges from 'views/CommunityView/CrowdsourcingChallenges';
import FundingOpportunities from 'views/CommunityView/FundingOpportunities';
import ConsortiumMeetings from 'views/CommunityView/ConsortiumMeetings';
import Webinars from 'views/CommunityView/Webinars';
import Workshops from 'views/CommunityView/Workshops';
import Symposia from 'views/CommunityView/Symposia';
import PreviousEvents from 'views/CommunityView/PreviousEvents';

// Data
import DataOverview from 'views/DataView/Overview';
// import DataReleases from 'views/DataView/Releases';
import DataStandards from 'views/DataView/Standards';
import DataPreviousStandards from 'views/DataView/PreviousStandards';
import DataReleasePolicy from 'views/DataView/ReleasePolicy';
import PageHasBeenMovedView from 'views/PageHasBeenMovedView';

// import DatasetView from 'views/DataView/DatasetView';

// PubsNews
import PublicationsView from 'views/PublicationsView';
import NewsView from 'views/NewsView';

// Applications
import AppsView from 'views/AppsView';

// Workflows
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


import NotFoundView from 'views/NotFoundView';

const centersBase = 'centers';
const dsgcBase = `${centersBase}/data-and-signature-generating-centers`;
const communityBase = 'community';
const dataBase = 'data';
const wf = 'tools/workflows';

export default (/* store */) => (
  <Route path="/" component={CoreLayout}>
    {
    /**
     * The CoreLayout component is essentially a wrapper for all of the routes.
     * It is the first component hit no matter what the request is and then whatever
     * route inside matches the current url will be passed as a prop to props.children.
     * This allows us to do things like add Navigation on every route.
     */
    }
    {
    /**
     * The IndexRoute is loaded if the endpoint is just '/'.
     * This is where the homepage lives.
     * For more info on IndexRoute, view the docs:
     * https://github.com/reactjs/react-router/blob/master/docs/guides/IndexRoutes.md
     */
    }
    <IndexRoute component={HomeView} />

    <Route path="about" component={AboutView} />
    <Route path="mobile" component={MobileDownloadView} />

    {/* Centers Routes */}
    <Redirect from={centersBase} to={`${centersBase}/overview`} />
    <Route path={`${centersBase}/overview`} component={CentersOverview} />
    <Route path={dsgcBase} component={DSGCs} />
    <Route path={`${dsgcBase}/dtoxs`} component={DToxS} />
    <Route path={`${dsgcBase}/hms-lincs`} component={HMSLINCS} />
    <Route path={`${dsgcBase}/lincs-transcriptomics`} component={LINCSTranscriptomics} />
    <Route path={`${dsgcBase}/lincs-pccse`} component={LINCSPCCSE} />
    <Route path={`${dsgcBase}/mep-lincs`} component={MEPLINCS} />
    <Route path={`${dsgcBase}/neurolincs`} component={NeuroLINCS} />
    <Route path={`${centersBase}/dcic`} component={DCIC} />
    <Route path={`${centersBase}/phase-one`} component={PhaseOne} />

    {/* Community Routes */}
    <Redirect from={communityBase} to={`${communityBase}/overview`} />
    <Route path={`${communityBase}/overview`} component={CommunityOverview} />
    <Route path={`${communityBase}/crowdsourcing-challenges`} component={CrowdsourcingChallenges} />
    <Route path={`${communityBase}/funding-opportunities`} component={FundingOpportunities} />
    <Route path={`${communityBase}/consortium-meetings`} component={ConsortiumMeetings} />
    <Route path={`${communityBase}/webinars`} component={Webinars} />
    <Route path={`${communityBase}/workshops`} component={Workshops} />
    <Route path={`${communityBase}/symposia`} component={Symposia} />
    <Route path={`${communityBase}/previous-events`} component={PreviousEvents} />

    {/* Data Routes */}
    <Redirect from={dataBase} to={`${dataBase}/overview`} />
    <Route path={`${dataBase}/overview`} component={DataOverview} />
    <Route path={`${dataBase}/releases`} component={PageHasBeenMovedView} />
    <Route path={`${dataBase}/releases/*`} component={PageHasBeenMovedView} />
    <Route path={`${dataBase}/standards`} component={DataStandards} />
    <Route path={`${dataBase}/data-standards`} component={DataStandards} />
    <Route path={`${dataBase}/previous-standards`} component={DataPreviousStandards} />
    <Route path={`${dataBase}/release-policy`} component={DataReleasePolicy} />

    {/* Publications/News Routes */}
    <Route path="publications" component={PublicationsView} />
    <Route path="news" component={NewsView} />

    {/* Apps & Workflows Route */}
    <Route path="tools" component={AppsView} />

    {/* Experimentalist Workflows Routes */}
    <Route
      path={`${wf}/${DownloadDataFromMEPLINCS.path}`}
      component={DownloadDataFromMEPLINCS}
    />
    <Route
      path={`${wf}/${ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines.path}`}
      component={ExploreMicroenvironmentsThatAlterLineagesInHMECCellLines}
    />
    <Route
      path={`${wf}/${IdentifyMicroenvironmentsThatPromoteProliferation.path}`}
      component={IdentifyMicroenvironmentsThatPromoteProliferation}
    />
    <Route
      path={`${wf}/${FindKnowledgeAboutASpecificGeneOrProtein.path}`}
      component={FindKnowledgeAboutASpecificGeneOrProtein}
    />
    <Route
      path={`${wf}/${ExploreMicroscopyImagingData.path}`}
      component={ExploreMicroscopyImagingData}
    />
    <Route
      path={`${wf}/${DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine.path}`}
      component={DetermineWhetherLINCSHasCollectedDataFromASpecificCellLine}
    />
    <Route
      path={`${wf}/${CheckIfASmallMoleculeHasBeenProfiled.path}`}
      component={CheckIfASmallMoleculeHasBeenProfiled}
    />
    <Route
      path={`${wf}/${QueryAGeneExpressionSignatureAgainst.path}`}
      component={QueryAGeneExpressionSignatureAgainst}
    />
    <Route
      path={`${wf}/${FindNovelCompoundsThatMimicOrReverseADiseaseSignature.path}`}
      component={FindNovelCompoundsThatMimicOrReverseADiseaseSignature}
    />

    {/* Computational Biologist Routes */}
    <Route
      path={`${wf}/${FindTheBestPlaceToObtainTheLINCSL1000Data.path}`}
      component={FindTheBestPlaceToObtainTheLINCSL1000Data}
    />
    <Route
      path={`${wf}/${DownloadRNASeqDataFromLINCS.path}`}
      component={DownloadRNASeqDataFromLINCS}
    />
    <Route
      path={`${wf}/${SearchLINCSMetadataThroughAPIs.path}`}
      component={SearchLINCSMetadataThroughAPIs}
    />
    <Route
      path={`${wf}/${FindAttributesAboutGenesAndProteinsForMachineLearning.path}`}
      component={FindAttributesAboutGenesAndProteinsForMachineLearning}
    />
    <Route
      path={`${wf}/${FindProteomicAndEpigenomicDataFromTheSameConditions.path}`}
      component={FindProteomicAndEpigenomicDataFromTheSameConditions}
    />
    <Route
      path={`${wf}/${FindDataAboutCellViabilityAndOther.path}`}
      component={FindDataAboutCellViabilityAndOther}
    />
    <Route
      path={`${wf}/${AnalyzeMyGenesAgainstLINCSData.path}`}
      component={AnalyzeMyGenesAgainstLINCSData}
    />
    <Route
      path={`${wf}/${AnalyzeLINCSTranscriptomicAndProteomicDatasets.path}`}
      component={AnalyzeLINCSTranscriptomicAndProteomicDatasets}
    />
    <Route
      path={`${wf}/${AnalyzeADrugSignatureAndFindOtherDrugs.path}`}
      component={AnalyzeADrugSignatureAndFindOtherDrugs}
    />

  {/*
    Other websites have legacy links that existed on the old
    lincsproject.org. This is a list of paths that we are
    creating to fix those broken links.
  */}
    <Redirect from={'lincs'} to={'/'} />
    <Redirect from={'lincs/*'} to={'/*'} />
    <Redirect from={`${dataBase}/data-release-policy`} to={`${dataBase}/release-policy`} />
    <Redirect from={`${dataBase}/tools-and-databases`} to={"/tools"} />
    <Redirect from={`${dsgcBase}/hms-lincs-u54`} to={`${dsgcBase}/hms-lincs`} />
    <Redirect from={`${dsgcBase}/broad-prx`} to={`${dsgcBase}/lincs-pccse`} />
    <Redirect from={`${dsgcBase}/broad-trx`} to={`${dsgcBase}/lincs-transcriptomics`} />
    <Redirect from={`${dsgcBase}/oregon-u`} to={`${dsgcBase}/mep-lincs`} />
    <Redirect from={`${centersBase}/bd2k-lincs-dcic`} to={`${centersBase}/dcic`} />
    <Redirect from={`${centersBase}/lincs-pilot-phase-centers`} to={`${centersBase}/phase-one`} />
    <Redirect from={`${communityBase}/workshops-and-symposia`} to={`${communityBase}/workshops`} />
    // /LINCS/applications/* was updated to /LINCS/tools/*
    <Redirect from={'applications'} to={'tools'} />
    <Redirect from={'applications/*'} to={'tools/*'} />
    <Redirect
      from={`${communityBase}/lincs-consortium-meetings`}
      to={`${communityBase}/consortium-meetings`}
    />
    <Route path={`${dataBase}/data-releases`} component={PageHasBeenMovedView} />

    {/* Not Found Route */}
    <Route path="*" component={NotFoundView} />
  </Route>
);
