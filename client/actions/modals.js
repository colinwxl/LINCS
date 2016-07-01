// This function contains the actions needed to open and close the
// citations modal. This allows the app to open or close the modal
// from anywhere.
//
// This is useful because rather than have a modal instance for each
// dataset or publication, there is only one that is passed the data it
// needs to render.

// Citations Modal action types
export const OPEN_CITATIONS_MODAL = 'OPEN_CITATIONS_MODAL';
export const CLOSE_CITATIONS_MODAL = 'CLOSE_CITATIONS_MODAL';

/**
 * This redux action creator generates a redux action that is sent out by
 * loadTools() if/when a request for the tools has been successful.
 *
 * @param {Object} payload The data to be sent to the Citations Modal component.
 * This contains either a dataset or publication id to be cited.
 * @return {Function} A function that dispatches a redux action with the
 * OPEN_CITATIONS_MODAL action type and the payload to be sent to the
 * Citations Modal.
 */
export function openCitationsModal(payload) {
  return (dispatch) => dispatch({
    type: OPEN_CITATIONS_MODAL,
    payload,
  });
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadTools() if/when a request for the tools has been successful.
 *
 * @return {Function} A function that dispatches a redux action with the
 * CLOSE_CITATIONS_MODAL action type.
 */
export function closeCitationsModal() {
  return (dispatch) => dispatch({
    type: CLOSE_CITATIONS_MODAL,
  });
}
