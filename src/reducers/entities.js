import * as CSMActionTypes from 'actions/cellsAndSMs';


export const MAX = 10;

// Updates an entity cache in response to any action with response.entities.
const initialState = {
  datasets: {},
  cells: {},
  tissues: {},
  diseases: {},
  smallMolecules: {},
  filters: {
    cellRange: [0, MAX],
    smRange: [0, MAX],
    cellSearchTerm: '',
    smSearchTerm: '',
  },
  cache: {},
};

function filterBySearchTerm(objects, searchTerm) {
  const results = {};
  const searchTermLower = searchTerm.toLowerCase();
  Object.keys(objects).forEach((i) => {
    const obj = objects[i];
    if (obj.name.toLowerCase().indexOf(searchTermLower) >= 0) {
      results[obj.id] = obj;
    } else if (obj.source.toLowerCase().indexOf(searchTermLower) >= 0) {
      results[obj.id] = obj;
    } else if (obj.lincs_id.toLowerCase().indexOf(searchTermLower) >= 0) {
      results[obj.id] = obj;
    }
  });
  return results;
}

function filterByRange(objects, range = [0, MAX]) {
  const results = {};
  const allIndices = Object.keys(objects);
  for (let i = range[0]; i < range[1]; i++) {
    const idx = allIndices[i];
    if (!!idx) {
      results[idx] = objects[idx];
    }
  }
  return results;
}

function incrementRange(r) {
  return [r[0] + MAX, r[1] + MAX];
}

function decrementRange(r) {
  let min;
  let max;
  min = r[0] - MAX;
  max = r[1] - MAX;
  if (min < 0) {
    min = 0;
    max = MAX;
  }
  return [min, max];
}

export function entities(state = initialState, action) {
  const { response } = action;
  if (response && response.entities) {
    const newState = Object.assign({}, state, response.entities);
    const smallMolecules = filterByRange(newState.smallMolecules);
    const cells = filterByRange(newState.cells);
    return {
      ...newState,
      smallMolecules,
      cells,
      cache: {
        smallMolecules: newState.smallMolecules,
        cells: newState.cells,
      },
    };
  }

  let smallMolecules;
  let cells;
  let range;
  const cache = state.cache;
  const filters = state.filters;

  switch (action.type) {
    case CSMActionTypes.INCREMENT_CELLS:
      range = incrementRange(filters.cellRange);
      cells = filterByRange(cache.cells, range);
      return {
        ...state,
        cells,
        filters: {
          ...filters,
          cellRange: range,
        },
      };
    case CSMActionTypes.DECREMENT_CELLS:
      range = decrementRange(filters.cellRange);
      cells = filterByRange(cache.cells, range);
      return {
        ...state,
        cells,
        filters: {
          ...filters,
          cellRange: range,
        },
      };
    case CSMActionTypes.FILTER_CELLS:
      cells = filterBySearchTerm(cache.cells, action.searchTerm);
      return {
        ...state,
        cells,
      };
    case CSMActionTypes.SHOW_ALL_CELLS:
      return {
        ...state,
        cells: state.cache.cells,
      };
    case CSMActionTypes.INCREMENT_SMALL_MOLECULES:
      range = incrementRange(filters.smRange);
      smallMolecules = filterByRange(cache.smallMolecules, range);
      return {
        ...state,
        smallMolecules,
        filters: {
          ...filters,
          smRange: range,
        },
      };
    case CSMActionTypes.DECREMENT_SMALL_MOLECULES:
      range = decrementRange(filters.smRange);
      smallMolecules = filterByRange(cache.smallMolecules, range);
      return {
        ...state,
        smallMolecules,
        filters: {
          ...filters,
          smRange: range,
        },
      };
    case CSMActionTypes.FILTER_SMALL_MOLECULES:
      smallMolecules = filterBySearchTerm(cache.smallMolecules, action.searchTerm);
      return {
        ...state,
        smallMolecules,
      };
    case CSMActionTypes.SHOW_ALL_SMALL_MOLECULES:
      return {
        ...state,
        smallMolecules: cache.smallMolecules,
      };
    default:
      return state;
  }
}
