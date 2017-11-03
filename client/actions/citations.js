import handleResponse from 'utils/handleResponse';

// Citation action types
export const CITATIONS_REQUEST = 'CITATION_REQUEST';
export const CITATIONS_SUCCESS = 'CITATION_SUCCESS';
export const CITATIONS_FAILURE = 'CITATION_FAILURE';

/**
 * This redux action creator that is sent out by loadCitations() once a request
 * to the server to retrieve the citations has been sent. This allows the for the
 * `isFetching` keys in the redux state.
 *
 * @return {Object} A redux action with the CitationS_REQUEST action type.
 */
export function citationsRequest() {
  return { type: CITATIONS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadCitations() if/when a request to retrive the citations has
 * been successful.
 *
 * @param {Object} payload The response from the server, the citations, that
 * will be added to the redux state.
 * @return {Action} A redux action with the CITATIONS_SUCCESS action type and
 * the response from the server.
 */
export function citationsSuccess(payload) {
  return { type: CITATIONS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadCitations() if/when a request to add a workflow has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the CitationS_SUCCESS action type and
 * the response from the server.
 */
export function citationsFailure(error) {
  return { type: CITATIONS_FAILURE, error };
}

/**
 * A redux action creator to load Citations from the database. If the Citations
 * have already been loaded, that means that the Citations are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise that resolves when the
 * Citations have been loaded.
 */
export function loadCitations() {
  return (dispatch, getState) => {
    // Get the current pubsNews from the redux state.
    const cite = getState().citations;
    // If the following is true, the Citations have already been loaded.
    if (cite && cite.citations && cite.citations.length) {
      return null;
    }

    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(citationsRequest());
    return fetch('/LINCS/api/v1/citations')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for Citations was successful. Dispatch a success action.
      .then(Citations => dispatch(citationsSuccess(Citations)))
      // The request for Citations was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(citationsFailure(error)));
  };
}
