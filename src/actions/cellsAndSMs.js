export const INCREMENT_SMALL_MOLECULES = 'INCREMENT_SMALL_MOLECULES';
export const DECREMENT_SMALL_MOLECULES = 'DECREMENT_SMALL_MOLECULES';
export const SHOW_ALL_SMALL_MOLECULES = 'SHOW_ALL_SMALL_MOLECULES';
export const FILTER_SMALL_MOLECULES = 'FILTER_SMALL_MOLECULES';

export const INCREMENT_CELLS = 'INCREMENT_CELLS';
export const DECREMENT_CELLS = 'DECREMENT_CELLS';
export const SHOW_ALL_CELLS = 'SHOW_ALL_CELLS';
export const FILTER_CELLS = 'FILTER_CELLS';

export function updateSmallMoleculeRange(increment) {
  let type;
  if (increment) {
    type = INCREMENT_SMALL_MOLECULES;
  } else {
    type = DECREMENT_SMALL_MOLECULES;
  }
  return { type };
}

export function filterSmallMolecules(searchTerm) {
  let type;
  if (!!searchTerm) {
    type = FILTER_SMALL_MOLECULES;
  } else {
    type = SHOW_ALL_SMALL_MOLECULES;
  }
  return { type, searchTerm };
}

export function updateCellRange(increment) {
  let type;
  if (increment) {
    type = INCREMENT_CELLS;
  } else {
    type = DECREMENT_CELLS;
  }
  return { type };
}

export function filterCells(searchTerm) {
  let type;
  if (!!searchTerm) {
    type = FILTER_CELLS;
  } else {
    type = SHOW_ALL_CELLS;
  }
  return { type, searchTerm };
}
