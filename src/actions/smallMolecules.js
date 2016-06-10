export const SHOW_SMALL_MOLECULES = 'SHOW_SMALL_MOLECULES';
export const HIDE_SMALL_MOLECULES = 'HIDE_SMALL_MOLECULES';

/**
 * This action is sent when the user clicks on the small molecules table on
 * the dataset pages. It toggles whether or not the small molecules are
 * visible.
 */
export function toggleTable(smallMoleculesAreVisible) {
  let type;
  if (smallMoleculesAreVisible) {
    type = HIDE_SMALL_MOLECULES;
  } else {
    type = SHOW_SMALL_MOLECULES;
  }
  return { type };
}
