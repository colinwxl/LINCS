import * as actionTypes from 'actions/datasetPage';


export const MAX_ITEMS_PER_PAGE = 10;

// Updates an entity cache in response to any action with response.entities.
const initialState = {
  dataset: {},
  cells: {},
  tissues: {},
  diseases: {},
  smallMolecules: {},
  ranges: {
    cellRange: [0, MAX_ITEMS_PER_PAGE],
    smRange: [0, MAX_ITEMS_PER_PAGE],
  },
  filtered: {
    smallMolecules: {},
    cells: {},
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
export function datasetPage(state = initialState, action) {
  const { response } = action;

  let dataset;
  let smallMolecules;
  let cells;
  let range;
  const cache = state.cache;
  const ranges = state.ranges;
  const filtered = state.filtered;

  switch (action.type) {
    case actionTypes.DATASET_SUCCESS:
      dataset = response;
      dataset.smallMolecules = dataset.smallMolecules || {};
      dataset.cells = dataset.cells || {};
      smallMolecules = filterByRange(dataset.smallMolecules);
      cells = filterByRange(dataset.cells);
      return {
        ...state,
        dataset,
        smallMolecules,
        cells,
        cache: {
          // These are the full lists of small molecules and cells, allowing us
          // to reset after a user search and handle pagination.
          smallMolecules: dataset.smallMolecules,
          cells: dataset.cells,
        },
        filtered: {
          // These are the visible small molecules and cells based on the
          // current page.
          smallMolecules,
          cells,
        },
      };
    case actionTypes.INCREMENT_CELLS:
      range = incrementRange(ranges.cellRange);
      cells = filterByRange(cache.cells, range);
      return {
        ...state,
        cells,
        ranges: {
          ...ranges,
          cellRange: range,
        },
        filtered: {
          ...filtered,
          cells,
        },
      };
    case actionTypes.DECREMENT_CELLS:
      range = decrementRange(ranges.cellRange);
      cells = filterByRange(cache.cells, range);
      return {
        ...state,
        cells,
        ranges: {
          ...ranges,
          cellRange: range,
        },
        filtered: {
          ...filtered,
          cells,
        },
      };
    case actionTypes.FILTER_CELLS:
      cells = filterBySearchTerm(cache.cells, action.searchTerm);
      return {
        ...state,
        filtered: {
          ...filtered,
          cells,
        },
      };
    case actionTypes.UNDO_FILTER_CELLS:
      cells = filterByRange(cache.cells, ranges.cellRange);
      return {
        ...state,
        filtered: {
          ...filtered,
          cells,
        },
      };
    case actionTypes.INCREMENT_SMALL_MOLECULES:
      range = incrementRange(ranges.smRange);
      smallMolecules = filterByRange(cache.smallMolecules, range);
      return {
        ...state,
        smallMolecules,
        ranges: {
          ...ranges,
          smRange: range,
        },
        filtered: {
          ...filtered,
          smallMolecules,
        },
      };
    case actionTypes.DECREMENT_SMALL_MOLECULES:
      range = decrementRange(ranges.smRange);
      smallMolecules = filterByRange(cache.smallMolecules, range);
      return {
        ...state,
        smallMolecules,
        ranges: {
          ...ranges,
          smRange: range,
        },
        filtered: {
          ...filtered,
          smallMolecules,
        },
      };
    case actionTypes.FILTER_SMALL_MOLECULES:
      smallMolecules = filterBySearchTerm(cache.smallMolecules, action.searchTerm);
      return {
        ...state,
        filtered: {
          ...filtered,
          smallMolecules,
        },
      };
    case actionTypes.UNDO_FILTER_SMALL_MOLECULES:
      smallMolecules = filterByRange(cache.smallMolecules, ranges.smRange);
      return {
        ...state,
        filtered: {
          ...filtered,
          smallMolecules,
        },
      };
    default:
      return state;
  }
}
