// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as CitationsActionTypes from 'actions/citations';

const initialState = {
  citation: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CitationsActionTypes.CITATIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CitationsActionTypes.CITATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        citation: action.payload,
        error: null,
      };
    case CitationsActionTypes.CITATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
