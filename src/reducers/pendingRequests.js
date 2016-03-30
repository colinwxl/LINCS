import * as CommunityActionTypes from 'actions/community';
import * as TwitterActionTypes from 'actions/twitter';
import * as EntityActionTypes from 'actions/entities';

const initPendingState = {
  otherPending: false,
  datasetsPending: false,
};

export default function (state = initPendingState, action) {
  switch (action.type) {
    case CommunityActionTypes.FUNDING_OPPS_REQUEST:
    case TwitterActionTypes.USER_TIMELINE_REQUEST:
      return {
        ...state,
        otherPending: true,
      };
    case EntityActionTypes.DATASETS_REQUEST:
      return {
        ...state,
        datasetsPending: true,
      };
    case TwitterActionTypes.USER_TIMELINE_SUCCESS:
    case TwitterActionTypes.USER_TIMELINE_FAILURE:
    case CommunityActionTypes.FUNDING_OPPS_SUCCESS:
    case CommunityActionTypes.FUNDING_OPPS_FAILURE:
      return {
        ...state,
        isPending: false,
      };
    case EntityActionTypes.DATASETS_SUCCESS:
    case EntityActionTypes.DATASETS_FAILURE:
      return {
        ...state,
        datasetsPending: false,
      };
    default:
      return state;
  }
}
