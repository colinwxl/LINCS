import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import merge from 'lodash/merge';
import auth from './auth';
import community from './community';
import twitter from './twitter';
import pubsNews from './pubsNews';
import pendingRequests from './pendingRequests';
import * as AuthActionTypes from 'actions/auth';
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
  twitter,
  pendingRequests,
  router,
  auth,
  form: formReducer.plugin({
    Login: (state, action) => {
      switch (action.type) {
        case AuthActionTypes.LOGIN_USER_SUCCESS:
          return undefined;
        case AuthActionTypes.LOGIN_USER_FAILURE:
          return {
            ...state,
            errorStatus: action.payload.status,
            errorText: action.payload.statusText,
          };
        default:
          return state;
      }
    },
  }),
});
