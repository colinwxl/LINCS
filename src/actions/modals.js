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

export const OPEN_CLUSTERGRAM_MODAL = 'OPEN_CLUSTERGRAM_MODAL';
export const CLOSE_CLUSTERGRAM_MODAL = 'CLOSE_CLUSTERGRAM_MODAL';

export function openClustergramModal(payload) {
  return (dispatch) => dispatch({
    type: OPEN_CLUSTERGRAM_MODAL,
    payload,
  });
}

export function closeClustergramModal() {
  return (dispatch) => dispatch({
    type: CLOSE_CLUSTERGRAM_MODAL,
  });
}
