import handleResponse from 'utils/handleResponse';

// Workflow action types
export const ADD_WORKFLOW_REQUEST = 'ADD_WORKFLOW_REQUEST';
export const ADD_WORKFLOW_SUCCESS = 'ADD_WORKFLOW_SUCCESS';
export const ADD_WORKFLOW_FAILURE = 'ADD_WORKFLOW_FAILURE';


/**
 * This redux action creator that is sent out by addWorkflow() once a request to the
 * server to add a new workflow has been sent. This allows the for the `isFetching`
 * keys in the redux state.
 *
 * @return {Action} A redux action with the ADD_WORKFLOW_REQUEST action type.
 */
export function addWorkflowRequest() {
  return { type: ADD_WORKFLOW_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * addWorkflow() if/when a request to add a workflow has been successful.
 *
 * @param {Object} payload The response from the server, the workflow object, that
 * will be added to the redux state.
 * @return {Action} A redux action with the ADD_WORKFLOW_SUCCESS action type and
 * the response from the server.
 */
export function addWorkflowSuccess(payload) {
  return { type: ADD_WORKFLOW_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * addWorkflow() if/when a request to add a workflow has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the ADD_WORKFLOW_SUCCESS action type and
 * the response from the server.
 */
export function addWorkflowFailure(error) {
  return {
    type: ADD_WORKFLOW_FAILURE,
    error,
  };
}

/**
 * A redux action creator to add a workflow to the database.  This action uses
 * the {@link https://github.com/gaearon/redux-thunk redux-thunk} middleware.
 *
 * @param {Object} workflow A new workflow to be added to the database.
 * @return {Promise} A promise resolving when the workflow has been added.
 */
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
      // Workflow was added successfully, dispatch a success action.
      .then(payload => dispatch(addWorkflowSuccess(payload)))
      // Workflow was not added successfully, dispatch a failure action.
      .catch(error => dispatch(addWorkflowFailure(error)));
  };
}

// Tool action types
export const TOOLS_REQUEST = 'TOOLS_REQUEST';
export const TOOLS_SUCCESS = 'TOOLS_SUCCESS';
export const TOOLS_FAILURE = 'TOOLS_FAILURE';
export const TOOL_CLICK_INCREMENT_REQUEST = 'TOOL_CLICK_INCREMENT_REQUEST';
export const TOOL_CLICK_INCREMENT_SUCCESS = 'TOOL_CLICK_INCREMENT_SUCCESS';
export const TOOL_CLICK_INCREMENT_FAILURE = 'TOOL_CLICK_INCREMENT_FAILURE';

export function toolIncrementClickRequest() {
  return { type: TOOL_CLICK_INCREMENT_REQUEST };
}

export function toolIncrementClickSuccess(payload) {
  return { type: TOOL_CLICK_INCREMENT_SUCCESS, payload };
}

export function toolIncrementClickFailure(payload) {
  return { type: TOOL_CLICK_INCREMENT_FAILURE, payload };
}

export function toolIncrementClick(toolIds = []) {
  return (dispatch) => {
    console.log(toolIds);
    // if (!toolIds.length || process.env.NODE_ENV !== 'production') {
    if (!toolIds.length) {
      return null;
    }

    dispatch(addWorkflowRequest());
    return fetch('/LINCS/api/v1/tools/clicks/increment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toolIds),
    })
      .then(response => handleResponse(response))
      .then(response => response.json())
      // Tool's click was incremented successfully, dispatch a success action.
      .then(payload => dispatch(toolIncrementClickSuccess(payload)))
      // Tool's click was not incremented successfully, dispatch a failure action.
      .catch(error => dispatch(toolIncrementClickFailure(error)));
  };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadTools() once a request to the server for the tools has been sent.
 * This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Action} A redux action with the TOOLS_REQUEST action type.
 */
export function toolsRequest() {
  return { type: TOOLS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadTools() if/when a request for the tools has been successful.
 *
 * @param {Object} payload The response from the server, the tools
 * object, that will be added to the redux state.
 * @return {Action} A redux action with the TOOLS_SUCCESS action type and
 * the response from the server.
 */
export function toolsSuccess(payload) {
  return { type: TOOLS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by loadTools() if/when a request for the tools has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the TOOLS_FAILURE action type and
 * the response from the server.
 */
export function toolsFailure(error) {
  return {
    type: TOOLS_FAILURE,
    error,
  };
}

/**
 * A redux action creator to load tools from the database. If the tools
 * have already been loaded, that means that they are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise
 * resolving when the tools have been loaded.
 */
export function loadTools() {
  return (dispatch, getState) => {
    // Get the tools and workflows from the current redux state.
    const toolsWorkflows = getState().toolsWorkflows;
    // If the following is true, then the tools have already been loaded,
    // so don't make another request.
    if (toolsWorkflows && toolsWorkflows.tools && toolsWorkflows.tools.length) {
      return null;
    }
    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(toolsRequest());
    return fetch('/LINCS/api/v1/tools')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // Loading the tools was successful. Dispatch a success action with the response.
      .then(payload => dispatch(toolsSuccess(payload)))
      // Loading the tools failed. Dispatch a failure action with the response.
      .catch(error => dispatch(toolsFailure(error)));
  };
}
