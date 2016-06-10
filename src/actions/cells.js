export const SHOW_CELLS = 'SHOW_CELLS';
export const HIDE_CELLS = 'HIDE_CELLS';

/**
 * This action is sent when the user clicks on the cells table on the dataset
 * pages. It toggles whether or not the cells are visible.
 */
export function toggleTable(cellsAreVisible) {
  let type;
  if (cellsAreVisible) {
    type = HIDE_CELLS;
  } else {
    type = SHOW_CELLS;
  }
  return { type };
}
