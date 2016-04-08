import React, { PropTypes } from 'react';
import Modal from 'react-modal';

import styles from './Dataset.scss';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '0',
    background: 'none',
    overflow: 'inherit',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0',
    outline: 'none',
    padding: '0',
  },
};

export default function CitationsModal(props) {
  const { isOpen, onModalClose, datasetId } = props;
  return (
    <Modal
      className="modal-dialog"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onRequestClose={onModalClose}
      style={modalStyles}
    >
      <div className="modal-content">
        <div className={`modal-header ${styles['modal-header']}`}>
          <button type="button" className="close" onClick={onModalClose}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
          <h5 className="modal-title">Select a Citation Format</h5>
        </div>
        <div className={`modal-body ${styles['modal-body']}`}>
          <a
            href={`/LINCS/api/v1/datasets/${datasetId}/reference/ris`}
            className={`btn btn-secondary ${styles['citation-link']}`}
          >
            <img src={require('./ris.png')} alt="Research Information Systems" />
            <h5 className="text-xs-center">.ris</h5>
          </a>
          <a
            href={`/LINCS/api/v1/datasets/${datasetId}/reference/enw`}
            className={`btn btn-secondary ${styles['citation-link']}`}
          >
            <img src={require('./endnote.png')} alt="Endnote" />
            <h5 className="text-xs-center">.enw</h5>
          </a>
          <a
            href={`/LINCS/api/v1/datasets/${datasetId}/reference/bib`}
            className={`btn btn-secondary ${styles['citation-link']}`}
          >
            <img src={require('./BibTeX.svg')} alt="BibTeX" />
            <h5 className="text-xs-center">.bib</h5>
          </a>
        </div>
      </div>
    </Modal>
  );
}

CitationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func,
  datasetId: PropTypes.number,
};
