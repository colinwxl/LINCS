import handleResponse from 'utils/handleResponse';

// Twitter action types
export const USER_TIMELINE_REQUEST = 'USER_TIMELINE_REQUEST';
export const USER_TIMELINE_SUCCESS = 'USER_TIMELINE_SUCCESS';
export const USER_TIMELINE_FAILURE = 'USER_TIMELINE_FAILURE';

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchTimeline() once a request to the server for the timeline has been sent.
 * This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Object} A redux action with the USER_TIMELINE_REQUEST action type.
 */
export function userTimelineRequest() {
  return { type: USER_TIMELINE_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchTimeline() if/when a request for the timeline has been successful.
 *
 * @param {Object} payload The response from the server, the timeline
 * that will be added to the redux state.
 * @return {Action} A redux action with the USER_TIMELINE_SUCCESS action type and
 * the response from the server.
 */
export function userTimelineSuccess(payload) {
  return { type: USER_TIMELINE_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by fetchTimeline() if/when a request for the timeline has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the USER_TIMELINE_SUCCESS action type and
 * the response from the server.
 */
export function userTimelineFailure(error) {
  return {
    type: USER_TIMELINE_FAILURE,
    error,
  };
}

/**
 * A redux action creator to load the LINCSProgram twitter timeline. If the timeline
 * has already been loaded, that means that the timeline is in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise
 * resolving when the timeline has been loaded.
 */
export function fetchTimeline() {
  return (dispatch, getState) => {
    // Get the current twitter state from redux.
    const twitter = getState().twitter;
    // Check if the timeline is already loaded or is being fetched.
    // If so, don't make another request.
    if (twitter.timeline.length || twitter.isFetching) {
      return null;
    }
    // Dispatch an action to let the app know that we are requesting a
    // twitter timeline.
    dispatch(userTimelineRequest());
    return fetch('/LINCS/api/v1/twitter/timeline')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // The request was successful. Dispatch a success action with
      // the response.
      .then(response => dispatch(userTimelineSuccess(response)))
      // The request was unsuccessful. Dispatch a failure action with
      // the error.
      .catch(error => dispatch(userTimelineFailure(error)));
  };
}
