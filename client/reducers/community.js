// import { pushPath } from 'react-router-redux';
// import jwtDecode from 'jwt-decode';
// import extend from 'extend';
import * as CommunityActionTypes from 'actions/community';

const initialState = {
  fundingOpportunities: [],
  webinars: [],
  workshops: [],
  symposia: [],
  challenges: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CommunityActionTypes.FUNDING_OPPS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CommunityActionTypes.FUNDING_OPPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fundingOpportunities: action.payload,
        error: null,
      };
    case CommunityActionTypes.FUNDING_OPPS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case CommunityActionTypes.WEBINARS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CommunityActionTypes.WEBINARS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        webinars: action.payload,
        error: null,
      };
    case CommunityActionTypes.WEBINARS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case CommunityActionTypes.WORKSHOPS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CommunityActionTypes.WORKSHOPS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        workshops: action.payload,
        error: null,
      };
    case CommunityActionTypes.WORKSHOPS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case CommunityActionTypes.SYMPOSIA_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CommunityActionTypes.SYMPOSIA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        symposia: action.payload,
        error: null,
      };
    case CommunityActionTypes.SYMPOSIA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case CommunityActionTypes.CHALLENGES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CommunityActionTypes.CHALLENGES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        challenges: action.payload,
        error: null,
      };
    case CommunityActionTypes.CHALLENGES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
