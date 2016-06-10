export const INCREMENT_CELLS = 'INCREMENT_CELLS';
export const DECREMENT_CELLS = 'DECREMENT_CELLS';
export const SHOW_ALL_CELLS = 'SHOW_ALL_CELLS';
export const FILTER_CELLS = 'FILTER_CELLS';


/**
 * This action is sent when the user clicks "next" or "prev" on the
 * small molecules table on the dataset pages.
 */
export function updateCellRange(increment) {
  let type;
  if (increment) {
    type = INCREMENT_CELLS;
  } else {
    type = DECREMENT_CELLS;
  }
  return { type };
}

/**
 * This action is sent when the user types in the small molecule search bar.
 */
export function filterCells(searchTerm) {
  console.log('filterCells');
  let type;
  if (!!searchTerm) {
    type = FILTER_CELLS;
  } else {
    type = SHOW_ALL_CELLS;
  }
  return { type, searchTerm };
}
