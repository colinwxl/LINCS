import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
// import each from 'lodash/each';

import { loadDataset } from 'actions/entities';
import styles from './Dataset.scss';

const mapStateToProps = ({ entities }) => ({
  datasets: entities.datasets,
});

export class Dataset extends Component {
  componentWillMount() {
    this.props.loadDataset(this.props.datasetId);
  }

  render() {
    const { className, datasets, datasetId } = this.props;
    const ds = datasets[datasetId];
    if (!ds) {
      return null;
    }
    return (
      <div className={`${styles.dataset} ${className}`}>
        <div className={styles['ds-header']}>
          <div className="row">
            <div className="col-xs-7">
              <h5>
                <Link to={`/data/releases/${datasetId}`}>{ds.method}</Link>
              </h5>
              <p className={styles.creator}>{ds.center.name}</p>
            </div>
            <div className="col-xs-5">
              <p className={`text-muted ${styles['info-date']}`}>
                {ds.lincsId}
              </p>
              <p className={`text-muted ${styles['info-date']}`}>
                <em>{moment(ds.dateRetrieved).format('MMM Do, YYYY')}</em>
              </p>
            </div>
          </div>
        </div>
        <p className={styles.description}>{ds.description}</p>
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

export default connect(mapStateToProps, { loadDataset })(Dataset);
