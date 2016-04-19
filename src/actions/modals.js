export const OPEN_CITATIONS_MODAL = 'OPEN_CITATIONS_MODAL';
export const CLOSE_CITATIONS_MODAL = 'CLOSE_CITATIONS_MODAL';

export function openCitationsModal(payload) {
  return (dispatch) => dispatch({
    type: OPEN_CITATIONS_MODAL,
    payload,
  });
}

export function closeCitationsModal() {
  return (dispatch) => dispatch({
    type: CLOSE_CITATIONS_MODAL,
  });
}
