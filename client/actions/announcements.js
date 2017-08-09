import handleResponse from 'utils/handleResponse';

// Publication action types
export const ANNOUNCEMENTS_REQUEST = 'ANNOUNCEMENTS_REQUEST';
export const ANNOUNCEMENTS_SUCCESS = 'ANNOUNCEMENTS_SUCCESS';
export const ANNOUNCEMENTS_FAILURE = 'ANNOUNCEMENTS_FAILURE';

/**
 * This redux action creator that is sent out by loadAnnouncements() once a request
 * to the server to retrieve the announcements has been sent. This allows the for the
 * `isFetching` keys in the redux state.
 *
 * @return {Object} A redux action with the ANNOUNCEMENTS_REQUEST action type.
 */
export function announcementsRequest() {
  return { type: ANNOUNCEMENTS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadAnnouncements() if/when a request to retrive the announcements has
 * been successful.
 *
 * @param {Object} payload The response from the server, the announcements, that
 * will be added to the redux state.
 * @return {Action} A redux action with the ANNOUNCEMENTS_SUCCESS action type and
 * the response from the server.
 */
export function announcementsSuccess(payload) {
  return { type: ANNOUNCEMENTS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadAnnouncements() if/when a request to add a workflow has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the ANNOUNCEMENTS_SUCCESS action type and
 * the response from the server.
 */
export function announcementsFailure(error) {
  return { type: ANNOUNCEMENTS_FAILURE, error };
}

/**
 * A redux action creator to load announcements from the database. If the announcements
 * have already been loaded, that means that the announcements are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise that resolves when the
 * announcements have been loaded.
 */
export function loadAnnouncements() {
  return (dispatch, getState) => {
    // Get the current ann from the redux state.
    const ann = getState().announcements;
    // If the following is true, the announcements have already been loaded.
    if (ann && ann.announcements && ann.announcements.length) {
      return null;
    }

    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(announcementsRequest());
    return fetch('/LINCS/api/v1/announcements')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for announcements was successful. Dispatch a success action.
      .then(announcements => dispatch(announcementsSuccess(announcements)))
      // The request for announcements was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(announcementsFailure(error)));
  };
}
