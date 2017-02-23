import React from 'react';
import styles from '../Overview.scss';
import neuroOutreachImg from '../neuro_outreach.jpg';

export default function Event20160310() {
  return (
    <div className="row">
      <div className="col-md-9">
        <div className={styles['ann-card']}>
          <h6 className={styles['ann-group']}>SYMPOSIA</h6>
          <div className={styles['ann-content']}>
            <h3>LINCS Outreach Meeting 2016</h3>
            <div className="clearfix">
              <a href="https://meetings.ninds.nih.gov/Home/Index/13365">
                <img
                  className={styles['inline-img-left']}
                  src={neuroOutreachImg}
                  alt="neuro_outreach"
                  width="165"
                  height="225"
                />
              </a>
              <p>
                On March 10-11, 2016 the LINCS Outreach Meeting was held at the University
                of California, Irvine. We invited the research community to come see examples
                of LINCS in action and learn how to effectively work with these unprecedented
                datasets. The first day of the workshop brought together the six LINCS Data
                and Signature Generation Centers and the BD2K-LINCS Data Coordination and
                Integration Center (DCIC) to review progress to date and discuss the next
                steps for data integration and analysis across the centers. The afternoon
                of the first day and the morning of the second day of the workshop included
                an outreach program with experts in stem cell biology, and big data management
                and analysis and focused on the use of current datasets.
              </p>
              <ul>
                <li><a href="https://meetings.ninds.nih.gov/Home/Index/13365">General Information</a></li>
                <li><a href="https://www.youtube.com/channel/UCNcDd4x8PsUZpt4U2Xa8sfg">Watch on YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
