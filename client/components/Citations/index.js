import React, { Component } from 'react';
import styles from './Citations.scss';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openCitationsModal, closeCitationsModal } from 'actions/modals';

export class Citations extends Component {

  openCitationsModal = () => {
    this.props.openCitationsModal({
      datasetId: this.props.cite.datasetid,
      onModalClose: this.props.closeCitationsModal,
    });
  }

  render() {
    /* const name = this.props.cite.name; */
    return (
      <p>
        {this.props.cite.name}: {this.props.cite.title},
        {this.props.cite.year}, LINCS (collection),
        <a href={this.props.cite.url}>{this.props.cite.url}</a>,
        retrived: {moment().format('MMM D, YYYY')}

        <p className={styles.categories}>
          <span
            onClick={this.openCitationsModal}
            className={`${styles.cat} ${styles['cat-cite']}`}
          >
            Export citation
          </span>
        </p>

      </p>
    );
  }
}
Citations.propTypes = {
  cite: PropTypes.object,
  name: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  year: PropTypes.integer,
  openCitationsModal: PropTypes.func,
  closeCitationsModal: PropTypes.func,
};

export default connect(null, {
  openCitationsModal,
  closeCitationsModal,
})(Citations);
