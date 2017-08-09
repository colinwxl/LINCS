/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import formatDate from 'utils/formatDate';

import styles from './CannedAnalysisCard.scss';

export default class CannedAnalysisCard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const w = window;
    const width = w.innerWidth;
    const height = w.innerHeight;
    this.setState({ width, height });
  }

  _generateUrlForDataset(dataset) {
    const ldpBaseDatasetUrl = 'http://lincsportal.ccs.miami.edu/datasets/#/view/';
    const hmsBaseDatasetUrl = 'http://lincs.hms.harvard.edu/db/datasets/';
    let datasetUrl;
    if (dataset.indexOf('HMS') !== -1) {
      datasetUrl = hmsBaseDatasetUrl + dataset.slice(4);
    } else {
      datasetUrl = ldpBaseDatasetUrl + dataset;
    }
    return datasetUrl;
  }

  _incrementClick = (id) => {
    this.props.incrementClick([id]);
  }

  render() {
    const ca = this.props.ca;
    if (ca) {
      const datasets = ca.datasetAccessionsList.split(", ");
      return (
        <div className={styles.ca}>
          <div className={styles['ca-inner']}>
            <a
              href={ca.cannedAnalysisUrl}
              onClick={() => this._incrementClick(ca.id)}
              className={styles['ca-link']}
              target="_blank"
            >
              <img
                src={ca.caImageUrl}
                className={styles.thumbnail}
                alt={ca.title}
              />
            </a>

            <div className={styles['ca-details']}>
              <a
                href={ca.cannedAnalysisUrl}
                onClick={() => this._incrementClick(ca.id)}
                className={styles['ca-link']}
                target="_blank"
              >
                <label className={styles['ca-title']}>
                  {ca.title}
                </label>
                <span
                  data-tip="Information is not available at this time."
                  data-for={ca.cannedAnalysisDescription}
                >
                  <span className={styles['ca-center']}>{ca.subtitle}</span>
                </span>
              </a>

              <div className={styles['ca-description']}>
                {
                  ca.cannedAnalysisDescription.length > 185 && this.state.width >= 1200 ?
                    <span
                    >
                      {
                        this.state.width >= 1200 ?
                        null
                        : ca.cannedAnalysisDescription.split(' ').slice(0, 35).join(' ')
                      }
                    </span>
                    : <span>{ca.cannedAnalysisDescription}</span>
                }

                {
                  this.state.width >= 1200 ?
                    <ReactTooltip
                      id={ca.cannedAnalysisDescription}
                      place="right"
                      type="dark"
                      effect="float"
                    >
                      <div style={{ maxWidth: '30rem' }}>
                        {ca.cannedAnalysisDescription}
                      </div>
                    </ReactTooltip>
                  : null
                }
              </div>
              <span className={styles['ca-tool-name']}>Analyzed with&nbsp;
                <a href={ca.toolUrl} className={styles['ca-link']} target="_blank">
                  {ca.toolName}
                </a>
              </span>
              <span className={styles['ca-clicks-date']}>
                {
                  // ca.clicks === 1 ? `${ca.clicks} visit` : `${ca.clicks} visits`
                  // &#8226;
                }
                Posted on {formatDate(ca.createdAt)}

              </span>
              <i
                className={`fa fa-info-circle ${styles.tooltip}`}
                aria-hidden="true"
                data-tip="Information is not available at this time."
                data-for={`${datasets.join('_')}_ds`}
              />
              <ReactTooltip
                id={`${datasets.join('_')}_ds`}
                className={styles['tooltip-stay']}
                delayHide={1000}
                effect="solid"
                place="bottom"
                type="dark"
                effect="float"
              >
                <span className={styles['ds-title']}>
                  {datasets.length > 1 ? "Datasets" : "Dataset" }
                </span>
                {
                  datasets.map(ds => (
                    <a
                      href={this._generateUrlForDataset(ds)}
                      target="_blank"
                      key={ds}
                      className={styles.ds}
                    >
                      {ds}
                    </a>
                  ))
                }
              </ReactTooltip>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

CannedAnalysisCard.propTypes = {
  incrementClick: PropTypes.func,
  ca: PropTypes.object,
};
