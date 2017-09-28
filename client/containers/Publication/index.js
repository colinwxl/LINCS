import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { openCitationsModal, closeCitationsModal } from 'actions/modals';
import PublicationCategory from 'components/PublicationCategory';
import styles from './Publication.scss';

export class Publication extends Component {
  componentWillMount() {
    const altMetricScript = document.createElement('script');
    altMetricScript.src = 'https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js';
    altMetricScript.async = true;
    document.body.appendChild(altMetricScript);
  }

  openCitationsModal = () => {
    this.props.openCitationsModal({
      pubId: this.props.pub.id,
      onModalClose: this.props.closeCitationsModal,
    });
  }

  categoryKeyToName = (key) => key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

  categoryToCssClass = (category) => {
    const cssClass = category
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .toLowerCase();
    return `cat-${cssClass}`;
  }

  render() {
    const { pub, categories } = this.props;
    const authorNames = pub.authors.map(author => author.name);
    let articleTitle = pub.articleName;
    if (pub.pmId) {
      articleTitle = (
        <a href={`http://www.ncbi.nlm.nih.gov/pubmed/${pub.pmId}`} target="_blank">
          {pub.articleName}
        </a>
      );
    } else if (pub.pmcId) {
      articleTitle = (
        <a href={`http://www.ncbi.nlm.nih.gov/pmc/articles/${pub.pmcId}`} target="_blank">
          {pub.articleName}
        </a>
      );
    } else if (pub.doi) {
      articleTitle = (
        <a href={`http://dx.doi.org/${pub.doi}`} target="_blank">{pub.articleName}</a>
      );
    } else if (pub.otherLink) {
      articleTitle = (
        <a href={pub.otherLink} target="_blank">{pub.articleName}</a>
      );
    }
    return (
      <div key={pub.id} className={styles.pub}>
        <p>
          {authorNames.join(', ')}. {pub.yearPublished}.
          <strong> {articleTitle} </strong>
          {pub.journalName}. {pub.volume}
          {!!pub.issue ? `(${pub.issue})` : ''}
          {!!pub.ppPages ? `:${pub.ppPages}` : ''}.
        </p>
        <p className={styles.categories}>
          {categories.map((category, i) => {
            const cssClass = this.categoryToCssClass(category);
            const categoryName = this.categoryKeyToName(category);
            if (pub[category]) {
              return (
                <PublicationCategory
                  redirect={this.props.redirect}
                  key={i}
                  onClick={() => this.props.onCatClicked(category)}
                  className={`${styles.cat} ${styles[cssClass]}`}
                  categoryName={categoryName}
                />
              );
            }

            return null;
          })}
          <span
            onClick={this.openCitationsModal}
            className={`${styles.cat} ${styles['cat-cite']}`}
          >
            Export citation
          </span>
          <div
            className="altmetric-embed"
            data-badge-type="4"
            data-doi={pub.doi}
            data-pmid={pub.pmId}
          >
          </div>
        </p>
        {
          pub.resourceLinks &&
            <p className={styles.resources}>
              <em>Relevant Resources: </em>
              {
                Object.keys(pub.resourceLinks).map((resource, index) => {
                  const val = pub.resourceLinks[resource];
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
  redirect: PropTypes.bool,
  categories: PropTypes.array,
  onCatClicked: PropTypes.func,
  openCitationsModal: PropTypes.func,
  closeCitationsModal: PropTypes.func,
};

Publication.defaultProps = {
  onCatClicked: function noop() {},
};

export default connect(null, {
  openCitationsModal,
  closeCitationsModal,
})(Publication);
