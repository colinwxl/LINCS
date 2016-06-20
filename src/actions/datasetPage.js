// This file is used to fetch datasets and increment their clicks. It makes
// use of the redux api middleware (middleware/api.js). That code as well as
// the action creators in this file are very similar to the ones in the
// redux real-world example:
// https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md#real-world

import { CALL_API, Schemas } from 'middleware/api';

// Dataset action types
export const DATASET_REQUEST = 'DATASET_REQUEST';
export const DATASET_SUCCESS = 'DATASET_SUCCESS';
export const DATASET_FAILURE = 'DATASET_FAILURE';

export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_SUCCESS = 'DATASETS_SUCCESS';
export const DATASETS_FAILURE = 'DATASETS_FAILURE';

// Increment dataset clicks action types
export const INCREMENT_DATASET_CLICKS_REQUEST = 'INCREMENT_DATASET_CLICKS_REQUEST';
export const INCREMENT_DATASET_CLICKS_SUCCESS = 'INCREMENT_DATASET_CLICKS_SUCCESS';
export const INCREMENT_DATASET_CLICKS_FAILURE = 'INCREMENT_DATASET_CLICKS_FAILURE';

export const INCREMENT_SMALL_MOLECULES = 'INCREMENT_SMALL_MOLECULES';
export const DECREMENT_SMALL_MOLECULES = 'DECREMENT_SMALL_MOLECULES';
export const FILTER_SMALL_MOLECULES = 'FILTER_SMALL_MOLECULES';
export const UNDO_FILTER_SMALL_MOLECULES = 'UNDO_FILTER_SMALL_MOLECULES';

export const INCREMENT_CELLS = 'INCREMENT_CELLS';
export const DECREMENT_CELLS = 'DECREMENT_CELLS';
export const FILTER_CELLS = 'FILTER_CELLS';
export const UNDO_FILTER_CELLS = 'UNDO_FILTER_CELLS';

/**
 * Return endpoint. This will be appended to the baseUrl, e.g.:
 * /datasets?include=center,cells
 */
function getEndpoint(include, datasetId = null) {
  let endpoint = 'datasets';
  if (datasetId) {
    endpoint += `/${datasetId}`;
  }
  endpoint += `?include=${include.join(',')}`;
  return endpoint;
}

/**
 * Returns fresh dataset from server. Does not rely on
 * `state.entities.datasets` because we want additional properties such as
 * small molecules.
 */
export function loadDataset(datasetId) {
  const include = ['center', 'cells', 'cells.tissues', 'cells.diseases', 'smallMolecules'];
  return (dispatch) => {
    const endpoint = getEndpoint(include, datasetId);
    return dispatch({
      [CALL_API]: {
        types: [
          DATASET_REQUEST,
          DATASET_SUCCESS,
          DATASET_FAILURE,
        ],
        endpoint,
        schema: Schemas.DATASET,
      },
    });
  };
}

/**
 * Returns all datasets from server.
 */
export function loadDatasets() {
  const include = ['center', 'cells', 'cells.tissues', 'cells.diseases'];
  return (dispatch, getState) => {
    const pendingRequests = getState().pendingRequests;
    const { datasets } = getState().entities;
    if (!!datasets || pendingRequests.datasetsPending) {
      return null;
    }
    const endpoint = getEndpoint(include);
    // This action takes a REQUEST, SUCCESS, and FAILURE action type to be dispatched
    // in a similar fashion to the other action creators (loadTools(), loadPublications()).
    // The schema is also specified. This is used for normalizr: https://github.com/gaearon/normalizr
    return dispatch({
      [CALL_API]: {
        types: [
          DATASETS_REQUEST,
          DATASETS_SUCCESS,
          DATASETS_FAILURE,
        ],
        endpoint,
        schema: Schemas.DATASET_ARRAY,
      },
    });
  };
}

/**
 * Increments the clicks count for each dataset specified.
 */
export function incrementDatasetClicks(datasetIds = []) {
  return (dispatch) => {
    // Only update dataset clicks when in production.
    if (!datasetIds.length || process.env.NODE_ENV !== 'production') {
      return null;
    }
    // This action takes a REQUEST, SUCCESS, and FAILURE action type to be dispatched
    // in a similar fashion to the other action creators (loadTools(), loadPublications()).
    // The schema is also specified. This is used for normalizr: https://github.com/gaearon/normalizr
    // The dataset ids are passed so that they can be sent in the post request.
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

/**
 * Increment and decrement small molecule range on dataset pages.
 */
export function updateSmallMoleculeRange(increment) {
  if (increment) {
    return { type: INCREMENT_SMALL_MOLECULES };
  }
  return { type: DECREMENT_SMALL_MOLECULES };
}

/**
 * Filter visible small molecules based on user input on dataset pages.
 */
export function filterSmallMolecules(searchTerm) {
  let type;
  if (!!searchTerm) {
    type = FILTER_SMALL_MOLECULES;
  } else {
    type = UNDO_FILTER_SMALL_MOLECULES;
  }
  return { type, searchTerm };
}

/**
 * Increment and decrement cell range on dataset pages.
 */
export function updateCellRange(increment) {
  if (increment) {
    return { type: INCREMENT_CELLS };
  }
  return { type: DECREMENT_CELLS };
}

/**
 * Filter visible cells based on user input on dataset pages.
 */
export function filterCells(searchTerm) {
  let type;
  if (!!searchTerm) {
    type = FILTER_CELLS;
  } else {
    type = UNDO_FILTER_CELLS;
  }
  return { type, searchTerm };
}
