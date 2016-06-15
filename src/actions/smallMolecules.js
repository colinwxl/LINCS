export const INCREMENT_SMALL_MOLECULES = 'INCREMENT_SMALL_MOLECULES';
export const DECREMENT_SMALL_MOLECULES = 'DECREMENT_SMALL_MOLECULES';
export const SHOW_ALL_SMALL_MOLECULES = 'SHOW_ALL_SMALL_MOLECULES';
export const FILTER_SMALL_MOLECULES = 'FILTER_SMALL_MOLECULES';

/**
 * This action is sent when the user clicks "next" or "prev" on the
 * small molecules table on the dataset pages.
 */
export function updateRange(increment) {
  let type;
  if (increment) {
    type = INCREMENT_SMALL_MOLECULES;
  } else {
    type = DECREMENT_SMALL_MOLECULES;
  }
  return { type };
}

/**
 * This action is sent when the user types in the small molecule search bar.
 */
export function filterSmallMolecules(searchTerm) {
  let type;
  if (!!searchTerm) {
    type = FILTER_SMALL_MOLECULES;
  } else {
    type = SHOW_ALL_SMALL_MOLECULES;
  }
  return { type, searchTerm };
}
