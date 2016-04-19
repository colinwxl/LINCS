import handleResponse from 'utils/handleResponse';

export const USER_TIMELINE_REQUEST = 'USER_TIMELINE_REQUEST';
export const USER_TIMELINE_SUCCESS = 'USER_TIMELINE_SUCCESS';
export const USER_TIMELINE_FAILURE = 'USER_TIMELINE_FAILURE';

export function userTimelineRequest() {
  return { type: USER_TIMELINE_REQUEST };
}

export function userTimelineSuccess(payload) {
  return { type: USER_TIMELINE_SUCCESS, payload };
}

export function userTimelineFailure(error) {
  return {
    type: USER_TIMELINE_FAILURE,
    error,
  };
}

export function fetchTimeline() {
  return (dispatch) => {
    dispatch(userTimelineRequest());
    return fetch('/LINCS/api/v1/twitter/timeline')
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(response => dispatch(userTimelineSuccess(response)))
      .catch(error => dispatch(userTimelineFailure(error)));
  };
}
