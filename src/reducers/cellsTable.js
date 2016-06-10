import * as CActionTypes from 'actions/cells';

const initialState = {
  isVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CActionTypes.SHOW_CELLS:
      return {
        ...state,
        isVisible: true,
      };
    case CActionTypes.HIDE_CELLS:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};
