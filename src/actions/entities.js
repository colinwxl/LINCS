import { CALL_API, Schemas } from 'middleware/api';

export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_SUCCESS = 'DATASETS_SUCCESS';
export const DATASETS_FAILURE = 'DATASETS_FAILURE';

export const INCREMENT_DATASET_CLICKS_REQUEST = 'INCREMENT_DATASET_CLICKS_REQUEST';
export const INCREMENT_DATASET_CLICKS_SUCCESS = 'INCREMENT_DATASET_CLICKS_SUCCESS';
export const INCREMENT_DATASET_CLICKS_FAILURE = 'INCREMENT_DATASET_CLICKS_FAILURE';

function fetchDatasets(include = ['cells', 'cells.tissues', 'cells.diseases']) {
  let endpoint = 'datasets';
  if (include.length) {
    endpoint += `?include=${include.join(',')}`;
  }
  return {
    [CALL_API]: {
      types: [DATASETS_REQUEST, DATASETS_SUCCESS, DATASETS_FAILURE],
      endpoint,
      schema: Schemas.DATASET_ARRAY,
    },
  };
}

export function loadDatasets(include) {
  // TODO: Improve check to see if loaded.
  return (dispatch, getState) => {
    const state = getState();
    const { datasets } = state.entities;
    const { datasetsPending } = state.pendingRequests;
    if ((datasets && Object.keys(datasets).length) || datasetsPending) {
      return null;
    }
    return dispatch(fetchDatasets(include));
  };
}

export function incrementDatasetClicks(datasetIds = []) {
  return (dispatch) => {
    // Only update dataset clicks when in production.
    // Prevents running up stats during development.
    if (!datasetIds.length || process.env.NODE_ENV !== 'production') {
      return null;
    }
    return dispatch({
      [CALL_API]: {
        types: [
          INCREMENT_DATASET_CLICKS_REQUEST,
          INCREMENT_DATASET_CLICKS_SUCCESS,
          INCREMENT_DATASET_CLICKS_FAILURE,
        ],
        endpoint: 'datasets/clicks/increment',
        schema: Schemas.DATASET_ARRAY,
        body: { datasetIds },
      },
    });
  };
}
