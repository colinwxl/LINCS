import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import merge from 'lodash/merge';
import community from './community';
import twitter from './twitter';
import pubsNews from './pubsNews';
import toolsWorkflows from './toolsWorkflows';
import tree from './tree';
import modals from './modals';
import pendingRequests from './pendingRequests';
import smallMoleculesTable from './smallMoleculesTable';
// import * as EntityActionTypes from 'actions/entities';

// Updates an entity cache in response to any action with response.entities.
const initialEntities = {
  datasets: {},
  cells: {},
  tissues: {},
  diseases: {},
  smallMolecules: {},
};
function entities(state = initialEntities, action) {
  const { response } = action;
  if (response && response.entities) {
    return merge({}, state, response.entities);
  }
  return state;
}

export default combineReducers({
  entities,
  community,
  pubsNews,
  toolsWorkflows,
  twitter,
  tree,
  modals,
  router,
  pendingRequests,
  form: formReducer,
  smallMoleculesTable,
});
