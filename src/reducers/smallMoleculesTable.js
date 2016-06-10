import * as SMActionTypes from 'actions/smallMolecules';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SMActionTypes.SHOW_SMALL_MOLECULES:
      return {
        ...state,
        isVisible: true,
      };
    case SMActionTypes.HIDE_SMALL_MOLECULES:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};
