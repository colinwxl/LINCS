import handleResponse from 'utils/handleResponse';

export const PUBLICATIONS_REQUEST = 'PUBLICATIONS_REQUEST';
export const PUBLICATIONS_SUCCESS = 'PUBLICATIONS_SUCCESS';
export const PUBLICATIONS_FAILURE = 'PUBLICATIONS_FAILURE';

export function publicationsRequest() {
  return { type: PUBLICATIONS_REQUEST };
}

export function publicationsSuccess(payload) {
  return { type: PUBLICATIONS_SUCCESS, payload };
}

export function publicationsFailure(error) {
  return {
    type: PUBLICATIONS_FAILURE,
    error,
  };
}

export function loadPublications(recentFirst = true) {
  return (dispatch, getState) => {
    const pubsNews = getState().pubsNews;
    if (pubsNews && pubsNews.publications && pubsNews.publications.length) {
      return null;
    }
    dispatch(publicationsRequest());
    return fetch('/LINCS/api/v1/publications')
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(publications => {
      if (recentFirst) {
        publications.sort((a, b) => {
          const result = a.yearPublished < b.yearPublished;
          return result ? 1 : -1;
        });
      }
      dispatch(publicationsSuccess(publications));
    })
    .catch(error => {
      dispatch(publicationsFailure(error));
    });
  };
}
