// This file is used to fetch datasets and increment their clicks. It makes
// use of the redux api middleware (middleware/api.js). That code as well as
// the action creators in this file are very similar to the ones in the
// redux real-world example:
// https://github.com/reactjs/redux/blob/master/docs/introduction/Examples.md#real-world

import { CALL_API } from 'middleware/api';
import { getEndpoint } from './entities';

export const DATASET_REQUEST = 'DATASET_REQUEST';
export const DATASET_SUCCESS = 'DATASET_SUCCESS';
export const DATASET_FAILURE = 'DATASET_FAILURE';

export const INCREMENT_SMALL_MOLECULES = 'INCREMENT_SMALL_MOLECULES';
export const DECREMENT_SMALL_MOLECULES = 'DECREMENT_SMALL_MOLECULES';
export const FILTER_SMALL_MOLECULES = 'FILTER_SMALL_MOLECULES';
export const UNDO_FILTER_SMALL_MOLECULES = 'UNDO_FILTER_SMALL_MOLECULES';

export const INCREMENT_CELLS = 'INCREMENT_CELLS';
export const DECREMENT_CELLS = 'DECREMENT_CELLS';
export const FILTER_CELLS = 'FILTER_CELLS';
export const UNDO_FILTER_CELLS = 'UNDO_FILTER_CELLS';


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
        schema: null,
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
