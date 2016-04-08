import React, { Component } from 'react';

import styles from './NewsView.scss';
import PageBanner from 'components/PageBanner';

export default class NewsView extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner title="News" />
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-xl-offset-1">
              <div className={styles['news-group']}>
                <h2>New Feature For LINCS Tools: ‘Quick Start With LINCS’</h2>
                <p className="text-muted"><em>Posted on March 28th, 2016 by Sherry Jenkins</em></p>
                <img
                  src={require('./quick-start-lincs.png')}
                  alt="Quick Start With LINCS"
                />
                <p>
                  The <a href="http://lincs-dcic.org/#/">‘Quick Start with LINCS‘</a> analysis tool
                  feature enables users to search signatures (L1000CDS2), access data
                  (LINCS Data Portal), analyze data (iLINCS), search transcriptomics (Slicr) and
                  visualize proteomics (piLINCS).
                </p>
              </div>
              <div className={styles['news-group']}>
                <h2>NeuroLINCS Center Releases New Tool: AChroMap</h2>
                <p className="text-muted"><em>Posted on March 28th, 2016 by Sherry Jenkins</em></p>
                <p className="clearfix">
                  <img
                    className={styles['inline-img-left']}
                    src={require('./neurolincs.png')}
                    alt="NeuroLINCS"
                  />
                  The <a href="http://lincs-dcic.org/#/">‘Quick Start with LINCS‘</a> analysis tool
                  feature enables users to search signatures (L1000CDS2), access data
                  (LINCS Data Portal), analyze data (iLINCS), search transcriptomics (Slicr) and
                  visualize proteomics (piLINCS).
                </p>
              </div>
              <div className={styles['news-group']}>
                <h2>LINCS Outreach Meeting 2016 - Video Archive</h2>
                <p className="text-muted"><em>Posted on March 23rd, 2016 by Sherry Jenkins</em></p>
                <div className={styles.youtube}>
                  <iframe
                    src="https://www.youtube.com/embed/MwJoLfc_LuM?list=PLQw7KTnzkpXdpO1WMpW8fJeriqZEuFR1i"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
