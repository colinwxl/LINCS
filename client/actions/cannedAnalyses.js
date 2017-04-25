import handleResponse from 'utils/handleResponse';

// Publication action types
export const CANNED_ANALYSES_REQUEST = 'CANNED_ANALYSES_REQUEST';
export const CANNED_ANALYSES_SUCCESS = 'CANNED_ANALYSES_SUCCESS';
export const CANNED_ANALYSES_FAILURE = 'CANNED_ANALYSES_FAILURE';

/**
 * This redux action creator that is sent out by loadCannedAnalyses() once a request
 * to the server to retrieve the cannedAnalyses has been sent. This allows the for the
 * `isFetching` keys in the redux state.
 *
 * @return {Object} A redux action with the CANNED_ANALYSES_REQUEST action type.
 */
export function cannedAnalysesRequest() {
  return { type: CANNED_ANALYSES_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadCannedAnalyses() if/when a request to retrive the cannedAnalyses has
 * been successful.
 *
 * @param {Object} payload The response from the server, the cannedAnalyses, that
 * will be added to the redux state.
 * @return {Action} A redux action with the CANNED_ANALYSES_SUCCESS action type and
 * the response from the server.
 */
export function cannedAnalysesSuccess(payload) {
  return { type: CANNED_ANALYSES_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadCannedAnalyses() if/when a request to add a workflow has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the CANNED_ANALYSES_SUCCESS action type and
 * the response from the server.
 */
export function cannedAnalysesFailure(error) {
  return { type: CANNED_ANALYSES_FAILURE, error };
}

/**
 * A redux action creator to load cannedAnalyses from the database. If the cannedAnalyses
 * have already been loaded, that means that the cannedAnalyses are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise that resolves when the
 * cannedAnalyses have been loaded.
 */
export function loadCannedAnalyses() {
  return (dispatch, getState) => {
    // Get the current ann from the redux state.
    const ann = getState().cannedAnalyses;
    // If the following is true, the cannedAnalyses have already been loaded.
    if (ann && ann.cannedAnalyses && ann.cannedAnalyses.length) {
      return null;
    }

    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(cannedAnalysesRequest());
    return fetch('/LINCS/api/v1/cannedanalyses')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for cannedAnalyses was successful. Dispatch a success action.
      .then(cannedAnalyses => dispatch(cannedAnalysesSuccess(cannedAnalyses)))
      // The request for cannedAnalyses was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(cannedAnalysesFailure(error)));
  };
}
