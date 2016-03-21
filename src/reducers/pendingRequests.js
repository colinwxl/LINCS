import * as CommunityActionTypes from 'actions/community';

const initPendingState = {
  isPending: false,
};

export default function (state = initPendingState, action) {
  switch (action.type) {
    case CommunityActionTypes.FUNDING_OPPS_REQUEST:
      return {
        ...state,
        isPending: true,
      };
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
