import handleResponse from 'utils/handleResponse';

export const FUNDING_OPPS_REQUEST = 'FUNDING_OPPS_REQUEST';
export const FUNDING_OPPS_SUCCESS = 'FUNDING_OPPS_SUCCESS';
export const FUNDING_OPPS_FAILURE = 'FUNDING_OPPS_FAILURE';

export const WEBINARS_REQUEST = 'WEBINARS_REQUEST';
export const WEBINARS_SUCCESS = 'WEBINARS_SUCCESS';
export const WEBINARS_FAILURE = 'WEBINARS_FAILURE';

export const WORKSHOPS_REQUEST = 'WORKSHOPS_REQUEST';
export const WORKSHOPS_SUCCESS = 'WORKSHOPS_SUCCESS';
export const WORKSHOPS_FAILURE = 'WORKSHOPS_FAILURE';

export const SYMPOSIA_REQUEST = 'SYMPOSIA_REQUEST';
export const SYMPOSIA_SUCCESS = 'SYMPOSIA_SUCCESS';
export const SYMPOSIA_FAILURE = 'SYMPOSIA_FAILURE';

export function fundingOppsRequest() {
  return { type: FUNDING_OPPS_REQUEST };
}

export function fundingOppsSuccess(payload) {
  return { type: FUNDING_OPPS_SUCCESS, payload };
}

export function fundingOppsFailure(error) {
  return {
    type: FUNDING_OPPS_FAILURE,
    error,
  };
}

export function fetchFundingOpps() {
  return (dispatch) => {
    dispatch(fundingOppsRequest());
    return fetch('/LINCS/api/v1/community/opportunities')
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(response => {
      try {
        dispatch(fundingOppsSuccess(response));
      } catch (e) {
        dispatch(fundingOppsFailure(e));
      }
    })
    .catch(error => {
      dispatch(fundingOppsFailure(error));
    });
  };
}

export function webinarsRequest() {
  return { type: WEBINARS_REQUEST };
}

export function webinarsSuccess(payload) {
  return { type: WEBINARS_SUCCESS, payload };
}

export function webinarsFailure(error) {
  return {
    type: WEBINARS_FAILURE,
    error,
  };
}

export function fetchWebinars() {
  return (dispatch) => {
    dispatch(webinarsRequest());
    return fetch('/LINCS/api/v1/community/webinars')
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(response => {
      dispatch(webinarsSuccess(response));
    })
    .catch(error => {
      dispatch(webinarsFailure(error));
    });
  };
}

export function workshopsRequest() {
  return { type: WORKSHOPS_REQUEST };
}

export function workshopsSuccess(payload) {
  return { type: WORKSHOPS_SUCCESS, payload };
}

export function workshopsFailure(error) {
  return {
    type: WORKSHOPS_FAILURE,
    error,
  };
}

export function fetchWorkshops() {
  return (dispatch) => {
    dispatch(workshopsRequest());
    return fetch('/LINCS/api/v1/community/workshops')
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(response => {
      dispatch(workshopsSuccess(response));
    })
    .catch(error => {
      dispatch(workshopsFailure(error));
    });
  };
}

export function symposiaRequest() {
  return { type: SYMPOSIA_REQUEST };
}

export function symposiaSuccess(payload) {
  return { type: SYMPOSIA_SUCCESS, payload };
}

export function symposiaFailure(error) {
  return {
    type: SYMPOSIA_FAILURE,
    error,
  };
}

export function fetchSymposia() {
  return (dispatch) => {
    dispatch(symposiaRequest());
    return fetch('/LINCS/api/v1/community/symposia')
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(response => {
      dispatch(symposiaSuccess(response));
    })
    .catch(error => {
      dispatch(symposiaFailure(error));
    });
  };
}
