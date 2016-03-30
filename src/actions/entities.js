import { CALL_API, Schemas } from 'middleware/api';

export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_SUCCESS = 'DATASETS_SUCCESS';
export const DATASETS_FAILURE = 'DATASETS_FAILURE';

function fetchDatasets() {
  return {
    [CALL_API]: {
      types: [DATASETS_REQUEST, DATASETS_SUCCESS, DATASETS_FAILURE],
      endpoint: 'datasets?omitPivot=true',
      schema: Schemas.DATASET_ARRAY,
    },
  };
}

export function loadDatasets() {
  // TODO: Improve check to see if loaded.
  return (dispatch, getState) => {
    const state = getState();
    const { datasets } = state.entities;
    const { datasetsPending } = state.pendingRequests;
    if ((datasets && Object.keys(datasets).length) || datasetsPending) {
      return null;
    }
    return dispatch(fetchDatasets());
  };
}
