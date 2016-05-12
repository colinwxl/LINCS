import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { openCitationsModal, closeCitationsModal } from 'actions/modals';
import styles from './PublicationsView.scss';

export class Publication extends Component {
  openCitationsModal = () => {
    this.props.openCitationsModal({
      pubId: this.props.pub.id,
      onModalClose: this.props.closeCitationsModal,
    });
  }

  handleADClicked = () => this.props.onCatClicked('assayDevelopment');
  handleDAClicked = () => this.props.onCatClicked('dataAnalysis');
  handleDGClicked = () => this.props.onCatClicked('dataGeneration');
  handleDIClicked = () => this.props.onCatClicked('dataIntegration');
  handleDSClicked = () => this.props.onCatClicked('dataStandards');
  handleSGClicked = () => this.props.onCatClicked('signatureGeneration');
  handleSDClicked = () => this.props.onCatClicked('softwareDevelopment');
  handleRClicked = () => this.props.onCatClicked('review');

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
        <p className={styles.categories}>
          {
            p.assayDevelopment &&
              <span
                onClick={this.handleADClicked}
                className={`${styles.cat} ${styles['cat-ad']}`}
              >
                Assay Development
              </span>
          }
          {
            p.dataAnalysis &&
              <span
                onClick={this.handleDAClicked}
                className={`${styles.cat} ${styles['cat-da']}`}
              >
                Data Analysis
              </span>
          }
          {
            p.dataGeneration &&
              <span
                onClick={this.handleDGClicked}
                className={`${styles.cat} ${styles['cat-dg']}`}
              >
                Data Generation
              </span>
          }
          {
            p.dataIntegration &&
              <span
                onClick={this.handleDIClicked}
                className={`${styles.cat} ${styles['cat-di']}`}
              >
                Data Integration
              </span>
          }
          {
            p.dataStandards &&
              <span
                onClick={this.handleDSClicked}
                className={`${styles.cat} ${styles['cat-ds']}`}
              >
                Data Standards
              </span>
          }
          {
            p.signatureGeneration &&
              <span
                onClick={this.handleSGClicked}
                className={`${styles.cat} ${styles['cat-sg']}`}
              >
                Signature Generation
              </span>
          }
          {
            p.softwareDevelopment &&
              <span
                onClick={this.handleSDClicked}
                className={`${styles.cat} ${styles['cat-sd']}`}
              >
                Software Development
              </span>
          }
          {
            p.review &&
              <span
                onClick={this.handleRClicked}
                className={`${styles.cat} ${styles['cat-review']}`}
              >
                Review
              </span>
          }
          <span
            onClick={this.openCitationsModal}
            className={`${styles.cat} ${styles['cat-cite']}`}
          >
            Export citation
          </span>
        </p>
        {
          p.resourceLinks &&
            <p className={styles.resources}>
              <em>Relevant Resources: </em>
              {
                Object.keys(p.resourceLinks).map((resource, index) => {
                  const val = p.resourceLinks[resource];
                  return (
                    <span key={index} className={styles.resource}>
                      {index !== 0 && <span> - </span>}
                      {
                        typeof val === 'string' || val instanceof String
                          ? <a href={val}>{resource}</a>
                            : <span>{resource}</span>
                      }
                    </span>
                  );
                })
              }
            </p>
        }
      </div>
    );
  }
}

Publication.propTypes = {
  pub: PropTypes.object,
  onCatClicked: PropTypes.func,
  openCitationsModal: PropTypes.func,
  closeCitationsModal: PropTypes.func,
};

export default connect(null, {
  openCitationsModal,
  closeCitationsModal,
})(Publication);
