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
  return { type: PUBLICATIONS_FAILURE, error };
}

export function loadPublications() {
  return (dispatch, getState) => {
    const pubsNews = getState().pubsNews;
    if (pubsNews && pubsNews.publications && pubsNews.publications.length) {
      return null;
    }
    dispatch(publicationsRequest());
    return fetch('/LINCS/api/v1/publications')
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(publications => dispatch(publicationsSuccess(publications)))
      .catch(error => {
        dispatch(publicationsFailure(error));
      });
  };
}

export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAILURE = 'NEWS_FAILURE';

export function newsRequest() {
  return { type: NEWS_REQUEST };
}

export function newsSuccess(payload) {
  return { type: NEWS_SUCCESS, payload };
}

export function newsFailure(error) {
  return { type: NEWS_FAILURE, error };
}


export function loadNews() {
  return (dispatch, getState) => {
    const pubsNews = getState().pubsNews;
    if (pubsNews && pubsNews.news && pubsNews.news.length) {
      return null;
    }
    dispatch(newsRequest());
    return fetch('/LINCS/api/v1/news')
      .then(response => handleResponse(response))
      .then(response => response.json())
      .then(news => dispatch(publicationsSuccess(news)))
      .catch(error => {
        dispatch(newsFailure(error));
      });
  };
}
