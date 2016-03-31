// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as PubsNewsActionTypes from 'actions/pubsNews';

const initialState = {
  publications: [],
  news: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PubsNewsActionTypes.PUBLICATIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case PubsNewsActionTypes.PUBLICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        publications: action.payload,
        error: null,
      };
    case PubsNewsActionTypes.PUBLICATIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
