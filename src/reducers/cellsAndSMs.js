import * as CellAndSMActionTypes from 'actions/cells';


const MAX = 10;

const initialState = {
  cellRange: [0, MAX],
  smRange: [0, MAX],
  cellSearchTerm: null,
  smSearchTerm: null,
};

export default (state = initialState, action) => {
  const r = state.range;
  let min;
  let max;
  switch (action.type) {
    case CellAndSMActionTypes.INCREMENT_CELLS:
      return {
        ...state,
        cellRange: [r[0] + MAX, r[1] + MAX],
      };
    case CellAndSMActionTypes.DECREMENT_CELLS:
      min = r[0] - MAX;
      max = r[1] - MAX;
      if (min < 0) {
        min = 0;
        max = MAX;
      }
      return {
        ...state,
        cellRange: [min, max],
      };
    case CellAndSMActionTypes.FILTER_CELLS:
      return {
        ...state,
        cellSearchTerm: action.searchTerm,
      };
    case CellAndSMActionTypes.SHOW_ALL_CELLS:
      return {
        ...state,
        cellSearchTerm: null,
      };
    case CellAndSMActionTypes.INCREMENT_SMALL_MOLECULES:
      return {
        ...state,
        smRange: [r[0] + MAX, r[1] + MAX],
      };
    case CellAndSMActionTypes.DECREMENT_SMALL_MOLECULES:
      min = r[0] - MAX;
      max = r[1] - MAX;
      if (min < 0) {
        min = 0;
        max = MAX;
      }
      return {
        ...state,
        smRange: [min, max],
      };
    case CellAndSMActionTypes.FILTER_SMALL_MOLECULES:
      return {
        ...state,
        smSearchTerm: action.searchTerm,
      };
    case CellAndSMActionTypes.SHOW_ALL_SMALL_MOLECULES:
      return {
        ...state,
        smSearchTerm: null,
      };
    default:
      return state;
  }
};
