import handleResponse from 'utils/handleResponse';

// Tree action types
export const TREE_REQUEST = 'TREE_REQUEST';
export const TREE_SUCCESS = 'TREE_SUCCESS';
export const TREE_FAILURE = 'TREE_FAILURE';

/**
 * This redux action creator generates a redux action that is sent out by
 * loadTrees() once a request to the server for the tree has been sent.
 * This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Object} A redux action with the TREE_REQUEST action type.
 */
export function treeRequest() {
  return { type: TREE_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadTrees() if/when a request for the tree has been successful.
 *
 * @param {Object} payload The response from the server, the tree
 * object, that will be added to the redux state.
 * @return {Action} A redux action with the TREE_SUCCESS action type and
 * the response from the server.
 */
export function treeSuccess(payload) {
  return { type: TREE_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by loadTrees() if/when a request for the tree has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the TREE_SUCCESS action type and
 * the response from the server.
 */
export function treeFailure(error) {
  return { type: TREE_FAILURE, error };
}

/**
 * A redux action creator to load the tree from the database. If there is already
 * been a tree loaded, that means that it is in the redux state so return
 * null. By returning null, no request will be sent out because the data
 * has been loaded already. This action uses the
 * {@link https://github.com/gaearon/redux-thunk redux-thunk} middleware.
 *
 * @return {Function} A function that returns a promise that resolves when the
 * tree has been loaded. The response is an object with the following
 * keys: assays, classes, methods, centers, alphabetical, dates, dateDatasetMap
 */
export function loadTree() {
  return (dispatch, getState) => {
    // Get the tree from the current redux state.
    const tree = getState().tree;
    // Check if the tree has already been loaded.
    if (tree.isLoaded) {
      return null;
    }
    // Dispatch a redux action to let the app know that we are currently
    // requesting the tree from the server.
    dispatch(treeRequest());
    return fetch('/LINCS/api/v1/datasets/tree')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // Dispatch a success action if retrieving the tree was successful.
      .then(treeObj => dispatch(treeSuccess(treeObj)))
      // Dispatch a failure action if retrieving the tree was unsuccessful.
      .catch(error => dispatch(treeFailure(error)));
  };
}
