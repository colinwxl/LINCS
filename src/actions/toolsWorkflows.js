import handleResponse from 'utils/handleResponse';

export const ADD_WORKFLOW_REQUEST = 'ADD_WORKFLOW_REQUEST';
export const ADD_WORKFLOW_SUCCESS = 'ADD_WORKFLOW_SUCCESS';
export const ADD_WORKFLOW_FAILURE = 'ADD_WORKFLOW_FAILURE';

export function addWorkflowRequest() {
  return { type: ADD_WORKFLOW_REQUEST };
}

export function addWorkflowSuccess(payload) {
  return { type: ADD_WORKFLOW_SUCCESS, payload };
}

export function addWorkflowFailure(error) {
  return {
    type: ADD_WORKFLOW_FAILURE,
    error,
  };
}

export function addWorkflow(workflow) {
  return (dispatch) => {
    dispatch(addWorkflowRequest());
    return fetch('/LINCS/api/v1/workflows/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workflow),
    })
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(payload => dispatch(addWorkflowSuccess(payload)))
      .catch(error => dispatch(addWorkflowFailure(error)));
  };
}
