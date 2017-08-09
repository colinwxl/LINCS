// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as AnnouncementsActionTypes from 'actions/announcements';

const initialState = {
  announcements: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AnnouncementsActionTypes.ANNOUNCEMENTS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case AnnouncementsActionTypes.ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        announcements: action.payload,
        error: null,
      };
    case AnnouncementsActionTypes.ANNOUNCEMENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
