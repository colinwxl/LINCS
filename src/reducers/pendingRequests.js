import * as EntityActionTypes from 'actions/entities';

const initPendingState = {
  datasetsPending: false,
};

export default function (state = initPendingState, action) {
  switch (action.type) {
    case EntityActionTypes.DATASETS_REQUEST:
      return {
        ...state,
        datasetsPending: true,
      };
    default:
      return state;
  }
}
