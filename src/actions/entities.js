import { CALL_API, Schemas } from 'middleware/api';

export const DATASETS_REQUEST = 'DATASETS_REQUEST';
export const DATASETS_SUCCESS = 'DATASETS_SUCCESS';
export const DATASETS_FAILURE = 'DATASETS_FAILURE';

export function fetchDatasets() {
  return {
    [CALL_API]: {
      types: [DATASETS_REQUEST, DATASETS_SUCCESS, DATASETS_FAILURE],
      endpoint: 'datasets',
      schema: Schemas.DATASET_ARRAY,
    },
  };
}
