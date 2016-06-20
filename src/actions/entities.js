// This file is used to fetch datasets and increment their clicks. It makes
// use of the redux api middleware (middleware/api.js). That code as well as
// the action creators in this file are very similar to the ones in the
// redux real-world example:
// https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md#real-world

import { CALL_API, Schemas } from 'middleware/api';

export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_SUCCESS = 'DATASETS_SUCCESS';
export const DATASETS_FAILURE = 'DATASETS_FAILURE';

export const INCREMENT_DATASET_CLICKS_REQUEST = 'INCREMENT_DATASET_CLICKS_REQUEST';
export const INCREMENT_DATASET_CLICKS_SUCCESS = 'INCREMENT_DATASET_CLICKS_SUCCESS';
export const INCREMENT_DATASET_CLICKS_FAILURE = 'INCREMENT_DATASET_CLICKS_FAILURE';


/**
 * Return endpoint. This will be appended to the baseUrl, e.g.:
 * /datasets?include=center,cells
 */
export function getEndpoint(include, datasetId = null) {
  let endpoint = 'datasets';
  if (datasetId) {
    endpoint += `/${datasetId}`;
  }
  endpoint += `?include=${include.join(',')}`;
  return endpoint;
}

/**
 * Returns all datasets from server.
 */
export function loadDatasets() {
  const include = ['center', 'cells', 'cells.tissues', 'cells.diseases'];
  return (dispatch, getState) => {
    const datasetsPending = getState().pendingRequests.datasetsPending;
    const noDatasets = Object.keys(getState().entities.datasets).length === 0;
    if (noDatasets && datasetsPending) {
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
