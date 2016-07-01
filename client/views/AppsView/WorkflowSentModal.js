import React, { PropTypes } from 'react';
import Modal from 'react-modal';

import styles from './AppsView.scss';

const modalStyles = {
  overlay: {
    position: 'fixed',
    zIndex: '1',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '0px',
    background: 'none',
    overflow: 'inherit',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0px',
    outline: 'none',
    padding: '0px',
  },
};
export default function WorkflowSentModal(props) {
  const { isOpen, onModalClose } = props;
  return (
    <Modal
      className="modal-dialog"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onRequestClose={onModalClose}
      style={modalStyles}
    >
      <div className={`modal-content ${styles['wf-modal-content']}`}>
        <div className={`modal-body ${styles['wf-modal-body']}`}>
          <h4>Thanks for submitting your request!</h4>
          <p>
            We will read it carefully. If you provided us with an email, we will contact
            you if we have any additional questions. Once we complete assembling a new
            workflow that answers your query, we will post it here and notify you.
            In the meantime, please examine the existing workflows to see if any of
            them match your needs.
          </p>
          <button className="btn" onClick={onModalClose}>Ok</button>
        </div>
      </div>
    </Modal>
  );
}

WorkflowSentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func,
};
