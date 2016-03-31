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
function callApi(endpoint, schema, body) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  let apiPromise = fetch(fullUrl);
  if (body) {
    const token = localStorage.getItem('token');
    apiPromise = fetch(fullUrl, {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: token ? `Bearer ${token}` : undefined,
      },
      body: JSON.stringify(body),
    });
  }
  return apiPromise
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(response => Object.assign({}, normalize(response, schema)))
    .catch(e => Promise.reject(e));
}

// Normalize JSON response using normalizr
const cellSchema = new Schema('cells', { idAttribute: 'id' });
const tissueSchema = new Schema('tissues', { idAttribute: 'id' });
const diseaseSchema = new Schema('diseases', { idAttribute: 'id' });
const smallMoleculeSchema = new Schema('smallMolecules', { idAttribute: 'id' });
const datasetSchema = new Schema('datasets', { idAttribute: 'id' });

cellSchema.define({
  tissues: arrayOf(tissueSchema),
  diseases: arrayOf(diseaseSchema),
});

datasetSchema.define({
  cells: arrayOf(cellSchema),
  smallMolecules: arrayOf(smallMoleculeSchema),
});

// smallMoleculeSchema.define({
//   experiment: datasetSchema,
// });

// Schemas for API responses.
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

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
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
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
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
