// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as CannedAnalysesActionTypes from 'actions/cannedAnalyses';

const initialState = {
  cannedAnalyses: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CannedAnalysesActionTypes.CANNED_ANALYSES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CannedAnalysesActionTypes.CANNED_ANALYSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        analyses: action.payload,
        error: null,
      };
    case CannedAnalysesActionTypes.CANNED_ANALYSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
