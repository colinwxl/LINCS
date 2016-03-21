import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import merge from 'lodash/merge';
import auth from './auth';
import community from './community';
import pendingRequests from './pendingRequests';
import * as AuthActionTypes from 'actions/auth';
// import * as EntityActionTypes from 'actions/entities';

// Updates an entity cache in response to any action with response.entities.
function entities(state = { experiments: {}, compounds: {} }, action) {
  const { response } = action;
  if (response && response.entities) {
    return merge({}, state, response.entities);
  }
  return state;
}

export default combineReducers({
  entities,
  community,
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
