import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { openCitationsModal, closeCitationsModal } from 'actions/modals';
import styles from './PublicationsView.scss';

export default class Publication extends Component {
  _openCitationsModal = () => {
    this.props.openCitationsModal({
      pubId: this.props.pub.id,
      onModalClose: this.props.closeCitationsModal,
    });
  }

  render() {
    const p = this.props.pub;
    const authorNames = p.authors.map(author => author.name);
    let articleTitle = p.articleName;
    if (p.pmId) {
      articleTitle = (
        <a href={`http://www.ncbi.nlm.nih.gov/pubmed/${p.pmId}`} target="_blank">
          {p.articleName}
        </a>
      );
    } else if (p.pmcId) {
      articleTitle = (
        <a href={`http://www.ncbi.nlm.nih.gov/pmc/articles/${p.pmcId}`} target="_blank">
          {p.articleName}
        </a>
      );
    } else if (p.doi) {
      articleTitle = (
        <a href={`http://dx.doi.org/${p.doi}`} target="_blank">{p.articleName}</a>
      );
    } else if (p.otherLink) {
      articleTitle = (
        <a href={p.otherLink} target="_blank">{p.articleName}</a>
      );
    }
    return (
      <div key={p.id} className={styles.pub}>
        <p>
          {authorNames.join(', ')}. {p.yearPublished}.
          <strong> {articleTitle} </strong>
          {p.journalName}. {p.volume}
          {!!p.issue ? `(${p.issue})` : ''}
          {!!p.ppPages ? `:${p.ppPages}` : ''}.
        </p>
        <p>
          {
            p.assayDevelopment &&
            <span className={`${styles.cat} ${styles['cat-ad']}`}>
              Assay Development
            </span>
          }
          {
            p.dataAnalysis &&
            <span className={`${styles.cat} ${styles['cat-da']}`}>
              Data Analysis
            </span>
          }
          {
            p.dataGeneration &&
            <span className={`${styles.cat} ${styles['cat-dg']}`}>
              Data Generation
            </span>
          }
          {
            p.dataIntegration &&
            <span className={`${styles.cat} ${styles['cat-di']}`}>
              Data Integration
            </span>
          }
          {
            p.dataStandards &&
            <span className={`${styles.cat} ${styles['cat-ds']}`}>
              Data Standards
            </span>
          }
          {
            p.signatureGeneration &&
            <span className={`${styles.cat} ${styles['cat-sg']}`}>
              Signature Generation
            </span>
          }
          {
            p.softwareDevelopment &&
            <span className={`${styles.cat} ${styles['cat-sd']}`}>
              Software Development
            </span>
          }
          {
            p.review &&
            <span className={`${styles.cat} ${styles['cat-review']}`}>
              Review
            </span>
          }
          <span
            onClick={this._openCitationsModal}
            className={`${styles.cat} ${styles['cat-cite']}`}
          >
            Export citation
          </span>
        </p>
      </div>
    );
  }
}

Publication.propTypes = {
  pub: PropTypes.object,
  openCitationsModal: PropTypes.func,
  closeCitationsModal: PropTypes.func,
};

export default connect(null, {
  openCitationsModal,
  closeCitationsModal,
})(Publication);
