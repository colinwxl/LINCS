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

export const TOOLS_REQUEST = 'TOOLS_REQUEST';
export const TOOLS_SUCCESS = 'TOOLS_SUCCESS';
export const TOOLS_FAILURE = 'TOOLS_FAILURE';

export function toolsRequest() {
  return { type: TOOLS_REQUEST };
}

export function toolsSuccess(payload) {
  return { type: TOOLS_SUCCESS, payload };
}

export function toolsFailure(error) {
  return {
    type: TOOLS_FAILURE,
    error,
  };
}

export function loadTools() {
  return (dispatch, getState) => {
    const toolsWorkflows = getState().toolsWorkflows;
    if (toolsWorkflows && toolsWorkflows.tools && toolsWorkflows.tools.length) {
      return null;
    }
    dispatch(toolsRequest());
    return fetch('/LINCS/api/v1/tools')
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(payload => dispatch(toolsSuccess(payload)))
      .catch(error => dispatch(toolsFailure(error)));
  };
}
