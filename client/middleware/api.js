// This redux middleware is almost identical as in the 'real-world' redux example.
// https://github.com/reactjs/redux/blob/master/examples/real-world/middleware/api.js
// The only modification is that I've added the ability to send POST requests as well
// by specifying a request body.
//
// For more information about redux middleware, view the documentation:
// http://redux.js.org/docs/advanced/Middleware.html

import { Schema, arrayOf, normalize } from 'normalizr';
import handleResponse from 'utils/handleResponse';

let API_ROOT = '';

if (process.env.NODE_ENV === 'production') {
  API_ROOT = 'http://amp.pharm.mssm.edu/LINCS/api/v1/';
} else {
  API_ROOT = 'http://localhost:3000/LINCS/api/v1/';
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
/**
 * Fetches an API response and normalizes the result JSON according to schema.
 * This makes every API response have the same shape, regardless of how nested it was.
 *
 * @param {String} endpoint The endpoint at which the request will be made to the server.
 * This endpoint will be appended to the API_ROOT.
 * @param {Schema} schema The schema of the response from the server. This must be one of the
 * schemas defined in the Schemas object below.
 * @param {Object} body If this parameter is specified, that means the server will send a
 * POST request with this body, instead of the default GET request.
 * @return {Promise} A promise that resolves when the request has finished and the response
 * has been normalized.
 */
function callApi(endpoint, schema, body) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  let apiPromise;

  // The request has a body so send a POST request with it,
  // otherwise send a GET request.
  if (body) {
    apiPromise = fetch(fullUrl, {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } else {
    apiPromise = fetch(fullUrl);
  }
  apiPromise = apiPromise
    .then(response => handleResponse(response))
    .then(response => response.json());
  if (schema) {
    // Normalize the response based on the schema. https://github.com/gaearon/normalizr
    apiPromise = apiPromise
      .then(response => Object.assign({}, normalize(response, schema)));
  }
  return apiPromise.catch(e => Promise.reject(e));
}

// Normalize JSON response using normalizr: https://github.com/gaearon/normalizr
// You can think of this like a client-side database.
// Schemas are defined here for each entity and their relationships are defined below.
const cellSchema = new Schema('cells', { idAttribute: 'id' });
const tissueSchema = new Schema('tissues', { idAttribute: 'id' });
const diseaseSchema = new Schema('diseases', { idAttribute: 'id' });
const smallMoleculeSchema = new Schema('smallMolecules', { idAttribute: 'id' });
const datasetSchema = new Schema('datasets', { idAttribute: 'id' });

// The `tissues` and `diseases` keys in the cell object are arrays of objects.
// These objects all cohere to the tissue and disease schema respectively.
cellSchema.define({
  tissues: arrayOf(tissueSchema),
  diseases: arrayOf(diseaseSchema),
});

// The `cells` and `smallMolecules` keys in the cell object are arrays of objects.
// These objects all cohere to the cells and smallMolecules schema respectively.
datasetSchema.define({
  cells: arrayOf(cellSchema),
  smallMolecules: arrayOf(smallMoleculeSchema),
});

/**
 * These schemas are used in API calls to let the app and normalizr know what the
 * response is going to look like. The most commonly used one is the DATASET_ARRAY schema,
 * which lets the app and normalizr know that the incoming response from the server is
 * going to be an array of datasets.
 */
export const Schemas = {
  DATASET: datasetSchema,
  CELL: cellSchema,
  TISSUE: tissueSchema,
  DISEASE: diseaseSchema,
  SMALL_MOLECULE: smallMoleculeSchema,
  DATASET_ARRAY: arrayOf(datasetSchema),
  CELL_ARRAY: arrayOf(cellSchema),
  TISSUE_ARRAY: arrayOf(tissueSchema),
  DISEASE_ARRAY: arrayOf(diseaseSchema),
  SMALL_MOLECULE_ARRAY: arrayOf(smallMoleculeSchema),
};

export const CALL_API = Symbol('Call API');
export const POST_TO_API = Symbol('Post to API');

/**
 * A Redux middleware that interprets actions with CALL_API info specified.
 * Performs the call and promises when such actions are dispatched. To better understand
 * middleware, look at
 * the {@link http://redux.js.org/docs/advanced/Middleware.html the redux documentation} or
 * the {@link https://github.com/reactjs/redux/blob/master/examples/real-world/middleware/api.js example}
 * from which this specific middleware was taken.
 */
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, body } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, schema, body)
    .then(response =>
      next(actionWith({
        response,
        type: successType,
      }))
    )
    .catch(error =>
      next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened',
      }))
    );
};
