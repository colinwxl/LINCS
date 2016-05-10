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
import FundingOpportunities from 'views/CommunityView/FundingOpportunities';
import ConsortiumMeetings from 'views/CommunityView/ConsortiumMeetings';
import Webinars from 'views/CommunityView/Webinars';
import WorkshopsAndSymposia from 'views/CommunityView/WorkshopsAndSymposia';

// Data
import DataOverview from 'views/DataView/Overview';
import DataReleases from 'views/DataView/Releases';
import DataStandards from 'views/DataView/Standards';
import DataReleasePolicy from 'views/DataView/ReleasePolicy';

import DatasetView from 'views/DataView/DatasetView';

// PubsNews
import PublicationsView from 'views/PublicationsView';
import NewsView from 'views/NewsView';

// Applications
import AppsView from 'views/AppsView';

// Workflows
import GeneProteinWorkflow from 'views/AppsView/Workflows/GeneProteinWorkflow';
import SmMechanismWorkflow from 'views/AppsView/Workflows/SmMechanismWorkflow';
import CellWorkflow from 'views/AppsView/Workflows/CellWorkflow';
import SmWorkflow from 'views/AppsView/Workflows/SmWorkflow';
import QueryL1000Workflow from 'views/AppsView/Workflows/QueryL1000Workflow';
import MimicReverseWorkflow from 'views/AppsView/Workflows/MimicReverseWorkflow';
import L1000DataWorkflow from 'views/AppsView/Workflows/L1000DataWorkflow';
import RnaSeqWorkflow from 'views/AppsView/Workflows/RnaSeqWorkflow';
import SearchMetaWorkflow from 'views/AppsView/Workflows/SearchMetaWorkflow';
import PredictFuncWorkflow from 'views/AppsView/Workflows/PredictFuncWorkflow';
import ProteomicEpigenomicWorkflow from 'views/AppsView/Workflows/ProteomicEpigenomicWorkflow';
import ViabilityWorkflow from 'views/AppsView/Workflows/ViabilityWorkflow';


import NotFoundView from 'views/NotFoundView';

const centersBase = 'centers';
const dsgcBase = `${centersBase}/data-and-signature-generating-centers`;
const communityBase = 'community';
const dataBase = 'data';
const wf = 'applications/workflows';

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
    <Route path={`${communityBase}/funding-opportunities`} component={FundingOpportunities} />
    <Route path={`${communityBase}/consortium-meetings`} component={ConsortiumMeetings} />
    <Route path={`${communityBase}/webinars`} component={Webinars} />
    <Route path={`${communityBase}/workshops-and-symposia`} component={WorkshopsAndSymposia} />

    {/* Data Routes */}
    <Redirect from={dataBase} to={`${dataBase}/releases`} />
    <Route path={`${dataBase}/overview`} component={DataOverview} />
    <Route path={`${dataBase}/releases`} component={DataReleases} />
    <Route path={`${dataBase}/releases/:datasetId`} component={DatasetView} />
    <Route path={`${dataBase}/standards`} component={DataStandards} />
    <Route path={`${dataBase}/release-policy`} component={DataReleasePolicy} />

    {/* Publications/News Routes */}
    <Route path="publications" component={PublicationsView} />
    <Route path="news" component={NewsView} />

    {/* Apps & Workflows Route */}
    <Route path="applications" component={AppsView} />

    {/* Experimentalist Workflow Routes */}
    <Route path={`${wf}/knowledge-about-a-gene-or-protein`} component={GeneProteinWorkflow} />
    <Route path={`${wf}/understand-mechanism-of-action-of-sm`} component={SmMechanismWorkflow} />
    <Route path={`${wf}/data-from-a-specific-cell-line`} component={CellWorkflow} />
    <Route path={`${wf}/data-from-a-specific-sm`} component={SmWorkflow} />
    <Route path={`${wf}/query-signature-against-l1000`} component={QueryL1000Workflow} />
    <Route
      path={`${wf}/find-novel-compounds-that-mimic-or-reverse-disease-sig`}
      component={MimicReverseWorkflow}
    />

    {/* Computational Biologist Routes */}
    <Route path={`${wf}/obtaining-l1000-data`} component={L1000DataWorkflow} />
    <Route path={`${wf}/download-rna-seq-data`} component={RnaSeqWorkflow} />
    <Route path={`${wf}/search-lincs-metadata`} component={SearchMetaWorkflow} />
    <Route
      path={`${wf}/collect-attrs-to-predict-gene-function-using-machine-learning`}
      component={PredictFuncWorkflow}
    />
    <Route
      path={`${wf}/proteomic-epigenomic-data-l1000`}
      component={ProteomicEpigenomicWorkflow}
    />
    <Route
      path={`${wf}/viability-phenotype-data-following-sm-perturbations`}
      component={ViabilityWorkflow}
    />

    {/* Not Found Route */}
    <Route path="*" component={NotFoundView} />
  </Route>
);
