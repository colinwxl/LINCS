import handleResponse from 'utils/handleResponse';

// Funding Opportunity action types
export const FUNDING_OPPS_REQUEST = 'FUNDING_OPPS_REQUEST';
export const FUNDING_OPPS_SUCCESS = 'FUNDING_OPPS_SUCCESS';
export const FUNDING_OPPS_FAILURE = 'FUNDING_OPPS_FAILURE';

// Webinar action types
export const WEBINARS_REQUEST = 'WEBINARS_REQUEST';
export const WEBINARS_SUCCESS = 'WEBINARS_SUCCESS';
export const WEBINARS_FAILURE = 'WEBINARS_FAILURE';

// Workshop action types
export const WORKSHOPS_REQUEST = 'WORKSHOPS_REQUEST';
export const WORKSHOPS_SUCCESS = 'WORKSHOPS_SUCCESS';
export const WORKSHOPS_FAILURE = 'WORKSHOPS_FAILURE';

// Symposia action types
export const SYMPOSIA_REQUEST = 'SYMPOSIA_REQUEST';
export const SYMPOSIA_SUCCESS = 'SYMPOSIA_SUCCESS';
export const SYMPOSIA_FAILURE = 'SYMPOSIA_FAILURE';

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchFundingOpps() once a request to the server for the funding opportunities
 * has been sent. This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Action} A redux action with the FUNDING_OPPS_REQUEST action type.
 */
export function fundingOppsRequest() {
  return { type: FUNDING_OPPS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchFundingOpps() if/when a request for the funding opportunities has
 * been successful.
 *
 * @param {Object} payload The response from the server, the funding opportunities,
 * that will be added to the redux state.
 * @return {Action} A redux action with the FUNDING_OPPS_SUCCESS action type and
 * the response from the server.
 */
export function fundingOppsSuccess(payload) {
  return { type: FUNDING_OPPS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by fetchFundingOpps() if/when a request for the funding opportunities
 * has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the FUNDING_OPPS_FAILURE action type and
 * the response from the server.
 */
export function fundingOppsFailure(error) {
  return {
    type: FUNDING_OPPS_FAILURE,
    error,
  };
}

/**
 * A redux action creator to load funding opportunities from the database. If the
 * funding opportunities have already been loaded, that means that they
 * are in the redux state so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise
 * resolving when the funding opportunities have been loaded.
 */
export function fetchFundingOpps() {
  return (dispatch, getState) => {
    // Get the community object from the current redux state.
    const community = getState().community;
    // Return null if the redux state already has funding opportunities.
    if (community.fundingOpportunities.length) {
      return null;
    }
    // Dispatch a redux action to let the app know that we are requesting
    // funding opportunities.
    dispatch(fundingOppsRequest());
    return fetch('/LINCS/api/v1/community/opportunities')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // Loading the funding opportunities was successful. Dispatch a success
      // action with the response.
      .then(response => dispatch(fundingOppsSuccess(response)))
      // Loading the funding opportunities failed. Dispatch a failure action
      // with the response.
      .catch(error => dispatch(fundingOppsFailure(error)));
  };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchWebinars() once a request to the server for the webinars
 * has been sent. This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Action} A redux action with the WEBINARS_REQUEST action type.
 */
export function webinarsRequest() {
  return { type: WEBINARS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchWebinars() if/when a request for the webinars has been successful.
 *
 * @param {Object} payload The response from the server, the webinars,
 * that will be added to the redux state.
 * @return {Action} A redux action with the WEBINARS_SUCCESS action type and
 * the response from the server.
 */
export function webinarsSuccess(payload) {
  return { type: WEBINARS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by fetchWebinars() if/when a request for the webinars has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the WEBINARS_FAILURE action type and
 * the response from the server.
 */
export function webinarsFailure(error) {
  return {
    type: WEBINARS_FAILURE,
    error,
  };
}

/**
 * A redux action creator to load webinars from the database. If the
 * webinars have already been loaded, that means that they are in the
 * redux state so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise
 * resolving when the webinars have been loaded.
 */
export function fetchWebinars() {
  return (dispatch, getState) => {
    const community = getState().community;
    if (community.webinars.length) {
      return null;
    }
    // Dispatch a redux action to let the app know that we are requesting webinars.
    dispatch(webinarsRequest());
    return fetch('/LINCS/api/v1/community/webinars')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // Loading the webinars was successful. Dispatch a success action with the response.
      .then(response => dispatch(webinarsSuccess(response)))
      // Loading the webinars failed. Dispatch a failure action with the response.
      .catch(error => dispatch(webinarsFailure(error)));
  };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchWorkshops() once a request to the server for the workshops has been sent.
 * This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Action} A redux action with the WORKSHOPS_REQUEST action type.
 */
export function workshopsRequest() {
  return { type: WORKSHOPS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchWorkshops() if/when a request for the workshops has been successful.
 *
 * @param {Object} payload The response from the server, the workshops,
 * that will be added to the redux state.
 * @return {Action} A redux action with the WORKSHOPS_SUCCESS action type and
 * the response from the server.
 */
export function workshopsSuccess(payload) {
  return { type: WORKSHOPS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by fetchWorkshops() if/when a request for the workshops has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the WORKSHOPS_FAILURE action type and
 * the response from the server.
 */
export function workshopsFailure(error) {
  return {
    type: WORKSHOPS_FAILURE,
    error,
  };
}

/**
 * A redux action creator to load workshops from the database. If the workshops
 * have already been loaded, that means that they are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise
 * resolving when the workshops have been loaded.
 */
export function fetchWorkshops() {
  return (dispatch, getState) => {
    // Get the community object from the current redux state.
    const community = getState().community;
    // Return null if the redux state already has workshops.
    if (community.workshops.length) {
      return null;
    }
    // Dispatch a redux action to let the app know that we are requesting workshops.
    dispatch(workshopsRequest());
    return fetch('/LINCS/api/v1/community/workshops')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // Loading the workshops was successful. Dispatch a success action with the response.
      .then(response => dispatch(workshopsSuccess(response)))
      // Loading the workshops failed. Dispatch a failure action with the response.
      .catch(error => dispatch(workshopsFailure(error)));
  };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchSymposia() once a request to the server for the symposia has been sent.
 * This allows the for the `isFetching` keys in the redux state.
 *
 * @return {Action} A redux action with the SYMPOSIA_REQUEST action type.
 */
export function symposiaRequest() {
  return { type: SYMPOSIA_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * fetchSymposia() if/when a request for the symposia has been successful.
 *
 * @param {Object} payload The response from the server, the symposia,
 * that will be added to the redux state.
 * @return {Action} A redux action with the SYMPOSIA_SUCCESS action type and
 * the response from the server.
 */
export function symposiaSuccess(payload) {
  return { type: SYMPOSIA_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent
 * out by fetchSymposia() if/when a request for the symposia has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the SYMPOSIA_FAILURE action type and
 * the response from the server.
 */
export function symposiaFailure(error) {
  return {
    type: SYMPOSIA_FAILURE,
    error,
  };
}

/**
 * A redux action creator to load symposia from the database. If the symposia
 * have already been loaded, that means that they are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise
 * resolving when the symposia have been loaded.
 */
export function fetchSymposia() {
  return (dispatch, getState) => {
    // Get the community object from the current redux state.
    const community = getState().community;
    // Return null if the redux state already has symposia.
    if (community.symposia.length) {
      return null;
    }
    // Dispatch a redux action to let the app know that we are requesting symposia.
    dispatch(symposiaRequest());
    return fetch('/LINCS/api/v1/community/symposia')
    .then(response => handleResponse(response))
    .then(response => response.json())
    // Loading the symposia was successful. Dispatch a success action with the response.
    .then(response => dispatch(symposiaSuccess(response)))
    // Loading the symposia was unsuccessful. Dispatch a failure action with the error.
    .catch(error => dispatch(symposiaFailure(error)));
  };
}
