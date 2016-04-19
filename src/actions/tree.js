import handleResponse from 'utils/handleResponse';

export const TREE_REQUEST = 'TREE_REQUEST';
export const TREE_SUCCESS = 'TREE_SUCCESS';
export const TREE_FAILURE = 'TREE_FAILURE';

export function treeRequest() {
  return { type: TREE_REQUEST };
}

export function treeSuccess(payload) {
  return { type: TREE_SUCCESS, payload };
}

export function treeFailure(error) {
  return { type: TREE_FAILURE, error };
}

export function loadTree() {
  return (dispatch, getState) => {
    const tree = getState().tree;
    if (tree.isLoaded) {
      return null;
    }
    dispatch(treeRequest());
    return fetch('/LINCS/api/v1/datasets/tree')
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(treeObj => dispatch(treeSuccess(treeObj)))
      .catch(error => dispatch(treeFailure(error)));
  };
}
