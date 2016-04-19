import extend from 'extend';
import * as ModalActionTypes from 'actions/modals';

const initialState = {
  citationsModal: {
    isOpen: false,
    datasetId: null,
    pubId: null,
    onModalClose: ModalActionTypes.closeCitationsModal,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.OPEN_CITATIONS_MODAL:
      return {
        ...state,
        citationsModal: {
          isOpen: true,
          ...action.payload,
        },
      };
    case ModalActionTypes.CLOSE_CITATIONS_MODAL:
      return {
        ...state,
        citationsModal: extend({}, initialState.citationsModal),
      };
    default:
      return state;
  }
};
