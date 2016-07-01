import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';

import styles from './Dataset.scss';

const mapStateToProps = (state) => ({
  datasets: state.entities.datasets,
});

export class Dataset extends Component {
  render() {
    const { className, datasets, datasetId } = this.props;
    const dataset = datasets[datasetId];
    if (!dataset) {
      return null;
    }
    return (
      <div className={`${styles.dataset} ${className}`}>
        <div className={styles['ds-header']}>
          <div className="row">
            <div className="col-xs-7">
              <h5>
                <Link to={`/data/releases/${datasetId}`}>{dataset.method}</Link>
              </h5>
              <p className={styles.creator}>{dataset.center.name}</p>
            </div>
            <div className="col-xs-5">
              <p className={`text-muted ${styles['info-date']}`}>
                {dataset.lincsId}
              </p>
              <p className={`text-muted ${styles['info-date']}`}>
                <em>{moment(dataset.dateReleased).format('MMM Do, YYYY')}</em>
              </p>
            </div>
          </div>
        </div>
        <p className={styles.description}>{dataset.description}</p>
        <Link to={`/data/releases/${datasetId}`}>Click here to view dataset page</Link>
      </div>
    );
  }
}

Dataset.propTypes = {
  className: PropTypes.string,
  datasets: PropTypes.object,
  datasetId: PropTypes.number,
  loadDataset: PropTypes.func,
};

export default connect(
  mapStateToProps
)(Dataset);
