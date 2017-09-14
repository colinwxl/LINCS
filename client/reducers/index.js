import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { entities } from './entities';
import { datasetPage } from './datasetPage';
import community from './community';
import twitter from './twitter';
import pubsNews from './pubsNews';
import toolsWorkflows from './toolsWorkflows';
import announcements from './announcements';
import cannedAnalyses from './cannedAnalyses';
import tree from './tree';
import modals from './modals';
import pendingRequests from './pendingRequests';
import citations from './citations';


export default combineReducers({
  announcements,
  cannedAnalyses,
  entities,
  datasetPage,
  community,
  pubsNews,
  toolsWorkflows,
  twitter,
  tree,
  modals,
  router,
  form: formReducer,
  pendingRequests,
  citations,
});
