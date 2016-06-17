import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { entities } from './entities';
import community from './community';
import twitter from './twitter';
import pubsNews from './pubsNews';
import toolsWorkflows from './toolsWorkflows';
import tree from './tree';
import modals from './modals';

export default combineReducers({
  entities,
  community,
  pubsNews,
  toolsWorkflows,
  twitter,
  tree,
  modals,
  router,
  form: formReducer,
});
