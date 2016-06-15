import * as SMActionTypes from 'actions/smallMolecules';

const MAX = 10;

const initialState = {
  range: [0, MAX],
  searchTerm: null,
};

export default (state = initialState, action) => {
  const r = state.range;
  let min;
  let max;
  switch (action.type) {
    case SMActionTypes.INCREMENT_SMALL_MOLECULES:
      return {
        ...state,
        range: [r[0] + MAX, r[1] + MAX],
      };
    case SMActionTypes.DECREMENT_SMALL_MOLECULES:
      min = r[0] - MAX;
      max = r[1] - MAX;
      if (min < 0) {
        min = 0;
        max = MAX;
      }
      return {
        ...state,
        range: [min, max],
      };
    case SMActionTypes.FILTER_SMALL_MOLECULES:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case SMActionTypes.SHOW_ALL_SMALL_MOLECULES:
      return {
        ...state,
        searchTerm: null,
      };
    default:
      return state;
  }
};
