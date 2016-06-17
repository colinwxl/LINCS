import * as actionTypes from 'actions/entities';


export const MAX_ITEMS_PER_PAGE = 10;

// Updates an entity cache in response to any action with response.entities.
const initialState = {
  datasets: {},
  cells: {},
  tissues: {},
  diseases: {},
  smallMolecules: {},
  filters: {
    cellRange: [0, MAX_ITEMS_PER_PAGE],
    smRange: [0, MAX_ITEMS_PER_PAGE],
  },
  cache: {},
};

/**
 * Filters cells and small molecules based on user input.
 */
function filterBySearchTerm(objects, searchTerm) {
  const results = {};
  const searchTermLower = searchTerm.toLowerCase();
  Object.keys(objects).forEach((i) => {
    const obj = objects[i];
    // Sometimes these properties are numbers.
    // Seach should be case insensitive.
    const name = obj.name.toString().toLowerCase();
    const source = obj.source.toString();
    const lincsId = obj.lincs_id.toString();
    if (name.indexOf(searchTermLower) >= 0) {
      results[obj.id] = obj;
    } else if (source.indexOf(searchTermLower) >= 0) {
      results[obj.id] = obj;
    } else if (lincsId.toLowerCase().indexOf(searchTermLower) >= 0) {
      results[obj.id] = obj;
    }
  });
  return results;
}

/**
 * Filters cells and small molecules based on pagination range.
 */
function filterByRange(objects, range = [0, MAX_ITEMS_PER_PAGE]) {
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

/**
 * Increments pagination range based off previous range.
 */
function incrementRange(r) {
  return [r[0] + MAX_ITEMS_PER_PAGE, r[1] + MAX_ITEMS_PER_PAGE];
}

/**
 * Decrements pagination range based off previous range.
 */
function decrementRange(r) {
  let min;
  let max;
  min = r[0] - MAX_ITEMS_PER_PAGE;
  max = r[1] - MAX_ITEMS_PER_PAGE;
  if (min < 0) {
    min = 0;
    max = MAX_ITEMS_PER_PAGE;
  }
  return [min, max];
}

/**
 * Updates all entities based on current page and filters.
 */
export function entities(state = initialState, action) {
  const { response } = action;
  if (response && response.entities) {
    const newState = Object.assign({}, state, response.entities);
    return {
      ...newState,
      // This cache allows us to undo filters based on search terms and
      // pagination. My (GWG) intuition is that there is a better way to do
      // this with Redux, but the only way I can think of would be to re-fetch
      // a clean state from the API, which seems wasteful. This is clear enough
      // for now.
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
    case actionTypes.INIT_CELL_AND_SM_FILTERS:
      smallMolecules = filterByRange(cache.smallMolecules);
      cells = filterByRange(cache.cells);
      return {
        ...state,
        smallMolecules,
        cells,
      };
    case actionTypes.INCREMENT_CELLS:
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
    case actionTypes.DECREMENT_CELLS:
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
    case actionTypes.FILTER_CELLS:
      cells = filterBySearchTerm(cache.cells, action.searchTerm);
      return {
        ...state,
        cells,
      };
    case actionTypes.UNDO_FILTER_CELLS:
      cells = filterByRange(cache.cells, filters.cellRange);
      return {
        ...state,
        cells,
      };
    case actionTypes.INCREMENT_SMALL_MOLECULES:
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
    case actionTypes.DECREMENT_SMALL_MOLECULES:
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
    case actionTypes.FILTER_SMALL_MOLECULES:
      smallMolecules = filterBySearchTerm(cache.smallMolecules, action.searchTerm);
      return {
        ...state,
        smallMolecules,
      };
    case actionTypes.UNDO_FILTER_SMALL_MOLECULES:
      smallMolecules = filterByRange(cache.smallMolecules, filters.smRange);
      return {
        ...state,
        smallMolecules,
      };
    default:
      return state;
  }
}
