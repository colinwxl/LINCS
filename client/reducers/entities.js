import * as actionTypes from 'actions/entities';


const initialState = {
  datasets: {},
  cells: {},
  tissues: {},
  diseases: {},
  smallMolecules: {},
};

export function entities(state = initialState, action) {
  const { response } = action;
  switch (action.type) {
    case actionTypes.DATASETS_SUCCESS:
      return Object.assign({}, state, response.entities);
    default:
      return state;
  }
}
