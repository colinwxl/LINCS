export const INCREMENT_SMALL_MOLECULES = 'INCREMENT_SMALL_MOLECULES';
export const DECREMENT_SMALL_MOLECULES = 'DECREMENT_SMALL_MOLECULES';
export const SHOW_ALL_SMALL_MOLECULES = 'SHOW_ALL_SMALL_MOLECULES';
export const FILTER_SMALL_MOLECULES = 'FILTER_SMALL_MOLECULES';

export const INCREMENT_CELLS = 'INCREMENT_CELLS';
export const DECREMENT_CELLS = 'DECREMENT_CELLS';
export const SHOW_ALL_CELLS = 'SHOW_ALL_CELLS';
export const FILTER_CELLS = 'FILTER_CELLS';

export function updateSmallMoleculeRange(increment) {
  return (dispatch, getState) => {
    const cells = getState().entities.cells;
    const smallMolecules = getState().entities.smallMolecules;
    let type;
    if (increment) {
      type = INCREMENT_SMALL_MOLECULES;
    } else {
      type = DECREMENT_SMALL_MOLECULES;
    }
    return dispatch({
      type,
      cells,
      smallMolecules,
      searchTerm: null,
    });
  };
}

export function filterSmallMolecules(searchTerm) {
  return (dispatch, getState) => {
    const cells = getState().entities.cells;
    const smallMolecules = getState().entities.smallMolecules;
    let type;
    if (!!searchTerm) {
      type = FILTER_SMALL_MOLECULES;
    } else {
      type = SHOW_ALL_SMALL_MOLECULES;
    }
    return dispatch({
      type,
      cells,
      smallMolecules,
      searchTerm,
    });
  };
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
  console.log('filterCells');
  let type;
  if (!!searchTerm) {
    type = FILTER_CELLS;
  } else {
    type = SHOW_ALL_CELLS;
  }
  return { type, searchTerm };
}
