// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as TwitterActionTypes from 'actions/twitter';

const initialState = {
  timeline: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TwitterActionTypes.USER_TIMELINE_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case TwitterActionTypes.USER_TIMELINE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        timeline: action.payload,
        error: null,
      };
    case TwitterActionTypes.USER_TIMELINE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
