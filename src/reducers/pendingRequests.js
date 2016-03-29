import * as CommunityActionTypes from 'actions/community';
import * as TwitterActionTypes from 'actions/twitter';

const initPendingState = {
  isPending: false,
};

export default function (state = initPendingState, action) {
  switch (action.type) {
    case CommunityActionTypes.FUNDING_OPPS_REQUEST:
    case TwitterActionTypes.USER_TIMELINE_REQUEST:
      return {
        ...state,
        isPending: true,
      };
    case TwitterActionTypes.USER_TIMELINE_SUCCESS:
    case TwitterActionTypes.USER_TIMELINE_FAILURE:
    case CommunityActionTypes.FUNDING_OPPS_SUCCESS:
    case CommunityActionTypes.FUNDING_OPPS_FAILURE:
      return {
        ...state,
        isPending: false,
      };
    default:
      return state;
  }
}
