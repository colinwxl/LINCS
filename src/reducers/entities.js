import merge from 'lodash/merge';

// Updates an entity cache in response to any action with response.entities.
const initialState = {
  datasets: {},
  cells: {},
  tissues: {},
  diseases: {},
  smallMolecules: {},
};

export default function entities(state = initialState, action) {
  console.log('hello');
  const { response } = action;
  if (response && response.entities) {
    return merge({}, state, response.entities);
  }
  return state;
}
