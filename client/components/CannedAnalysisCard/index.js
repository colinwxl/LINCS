import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import styles from './CannedAnalysisCard.scss';

// "dataset_info": {
//   "dataset_accession": "MULTI-03",
//   "datasets": ["LDG-1241", "LDG-1242", "LDG-1243", "LDG-1244", "LDG-1245", "LDG-1246", "LDG-1247", "LDG-1248", "LDG-1252", "LDG-1253", "LDG-1254", "HMS-20268", "HMS-20269", "HMS-20278", "HMS-20279", "HMS-20280", "HMS-20281", "HMS-20282", "HMS-20283", "HMS-20284", "HMS-20285", "HMS-20286"]
// },
// "lca_accession": "LCA-MULT03",
// "dataset_url": "",
// "tool_name": "GR Browser",
// "tool_logo_url": "http://lincsproject.org/LINCS/files/tools_logos/GR_Calculator_logo.png",
// "analysis_center": "HMS LINCS",
// "analysis_center_logo": "http://lincsproject.org/LINCS/files/centers_logos/hms-lincs.png",
// "analysis_center_url": "/LINCS/centers/data-and-signature-generating-centers/hms-lincs",
// "tool_url": "http://www.grcalculator.org/grbrowser/",
// "canned_analysis_url": "http://www.grcalculator.org/grbrowser/",
// "canned_analysis_description": "An online tool for calculating dose-response metrics and browsing response data",
// "screen_path": "./ca_screenshot/multi_03_gr_browser.png"


export default class CannedAnalysisCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    const { ca } = this.props;
    return (
      <div className={styles.ca}>

        <div className={styles['ca-inner']}>
          <a href={ca.canned_analysis_url} className={styles['ca-link']} target="_blank">
            <img src={require(ca.screen_path)} className={styles.thumbnail} alt={ca.lca_accession} />
          </a>

          <div className={styles['ca-details']}>
            <a href={ca.canned_analysis_url} className={styles['ca-link']} target="_blank">
              <label className={styles['ca-title']}>{ca.lca_accession}</label>
            </a>

            <Link
              to={`LINCS/centers/data-and-signature-generating-centers/${ca.analysis_center.toLowerCase()}`}
              className={styles['ca-link']}
            >
              <span className={styles['ca-center']}>{ca.analysis_center}</span>
            </Link>

            <div className={styles['ca-description']}>
              {
                ca.canned_analysis_description.length > 185 && this.state.width >= 1200 ?
                  <span
                    data-tip="Information is not available at this time."
                    data-for={ca.lca_accession}
                  >
                    {
                      this.state.width >= 1200 ?
                      ca.canned_analysis_description.split(' ').slice(0, 17).join(' ')
                      : ca.canned_analysis_description.split(' ').slice(0, 35).join(' ')
                    }...
                  </span>
                  : <span>{ca.canned_analysis_description}</span>
              }

              {
                this.state.width >= 1200 ?
                  <ReactTooltip
                    id={ca.lca_accession}
                    place="right"
                    type="dark"
                    effect="float"
                  >
                    <div style={{ maxWidth: '10rem' }}>
                      {ca.canned_analysis_description}
                    </div>
                  </ReactTooltip>
                : null
              }
            </div>
            <span className={styles['ca-tool-name']}>Analyzed with&nbsp;
              <a href={ca.tool_url} className={styles['ca-link']} target="_blank">
                {ca.tool_name}
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}


CannedAnalysisCard.propTypes = {
  ca: PropTypes.object,
};
