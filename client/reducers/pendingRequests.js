import * as actionTypes from 'actions/entities';

const initialState = {
  datasetsPending: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.DATASETS_REQUEST:
      return {
        ...state,
        datasetsPending: true,
      };
    case actionTypes.DATASETS_FAILURE:
      return {
        ...state,
        datasetsPending: false,
      };
    default:
      return state;
  }
}
