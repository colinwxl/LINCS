import handleResponse from 'utils/handleResponse';

// Publication action types
export const PUBLICATIONS_REQUEST = 'PUBLICATIONS_REQUEST';
export const PUBLICATIONS_SUCCESS = 'PUBLICATIONS_SUCCESS';
export const PUBLICATIONS_FAILURE = 'PUBLICATIONS_FAILURE';

/**
 * This redux action creator that is sent out by loadPublications() once a request
 * to the server to retrieve the publications has been sent. This allows the for the
 * `isFetching` keys in the redux state.
 *
 * @return {Object} A redux action with the PUBLICATIONS_REQUEST action type.
 */
export function publicationsRequest() {
  return { type: PUBLICATIONS_REQUEST };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadPublications() if/when a request to retrive the publications has
 * been successful.
 *
 * @param {Object} payload The response from the server, the publications, that
 * will be added to the redux state.
 * @return {Action} A redux action with the PUBLICATIONS_SUCCESS action type and
 * the response from the server.
 */
export function publicationsSuccess(payload) {
  return { type: PUBLICATIONS_SUCCESS, payload };
}

/**
 * This redux action creator generates a redux action that is sent out by
 * loadPublications() if/when a request to add a workflow has failed.
 *
 * @param {Object} error The error response from the server that
 * will be added to the redux state.
 * @return {Action} A redux action with the PUBLICATIONS_SUCCESS action type and
 * the response from the server.
 */
export function publicationsFailure(error) {
  return { type: PUBLICATIONS_FAILURE, error };
}

/**
 * A redux action creator to load publications from the database. If the publications
 * have already been loaded, that means that the publications are in the redux state
 * so return null. By returning null, no request will be sent out.
 * This action uses the {@link https://github.com/gaearon/redux-thunk redux-thunk}
 * middleware.
 *
 * @return {Function} A function that returns a promise that resolves when the
 * publications have been loaded.
 */
export function loadPublications() {
  return (dispatch, getState) => {
    // Get the current pubsNews from the redux state.
    const pubsNews = getState().pubsNews;
    // If the following is true, the publications have already been loaded.
    if (pubsNews && pubsNews.publications && pubsNews.publications.length) {
      return null;
    }

    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(publicationsRequest());
    return fetch('/LINCS/api/v1/publications')
      .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for publications was successful. Dispatch a success action.
      .then(publications => dispatch(publicationsSuccess(publications)))
      // The request for publications was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(publicationsFailure(error)));
  };
}

// News are currently not database driven.
// Implement this if/when they are.
//
// // News action types
// export const NEWS_REQUEST = 'NEWS_REQUEST';
// export const NEWS_SUCCESS = 'NEWS_SUCCESS';
// export const NEWS_FAILURE = 'NEWS_FAILURE';
//
// export function newsRequest() {
//   return { type: NEWS_REQUEST };
// }
//
// export function newsSuccess(payload) {
//   return { type: NEWS_SUCCESS, payload };
// }
//
// export function newsFailure(error) {
//   return { type: NEWS_FAILURE, error };
// }
//
// export function loadNews() {
//   return (dispatch, getState) => {
//     // Load the current pubsNews from the redux state.
//     const pubsNews = getState().pubsNews;
//     // If the following is true, the news have been loaded into the
//     // redux state already
//     if (pubsNews && pubsNews.news && pubsNews.news.length) {
//       return null;
//     }
//     // Dispatch an action to notify the app that we are requesting news.
//     dispatch(newsRequest());
//     return fetch('/LINCS/api/v1/news')
//       .then(response => handleResponse(response))
//       .then(response => response.json())
//       .then(news => dispatch(newsSuccess(news)))
//       .catch(error => dispatch(newsFailure(error)));
//   };
// }
