// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as TWActionTypes from 'actions/toolsWorkflows';

const initialState = {
  tools: [],
  workflows: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TWActionTypes.TOOLS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case TWActionTypes.TOOLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tools: action.payload,
        error: null,
      };
    case TWActionTypes.TOOLS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
