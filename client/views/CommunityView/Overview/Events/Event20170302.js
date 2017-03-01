import React from 'react';
import styles from '../Overview.scss';
import poster from 'static/files/BME_LINCS_Seminar.png';
import Collapsible from 'react-collapsible';

export default function Event20170302() {
  return (
    <div className={styles['ann-card']}>
      <h6 className={`${styles['ann-group']} ${styles.challenge}`}>March 2, 2017</h6>
      <div className={styles['ann-content']}>
        <h3>BME LINCS Special Seminar</h3>
        <h4>Insights To Treatment Resistant Prostate Cancer</h4>
        <p>
          You can learn more about the event details <a
            href={'https://www.ohsu.edu/xd/education/schools/school-of-medicine/' +
              'departments/basic-science-departments/biomedical-engineering/news-' +
              'and-events/events-calendar.cfm?trumbaEmbed=eventid%3D120190928%26view' +
              '%3Devent%26-childview%3D'}
            target="_blank"
          >here</a>.
        </p>
        <p>
          Also available by live streaming and recorded for later viewing&nbsp;
          <a
            href={'https://echo360ess.ohsu.edu:8443/ess/portal/' +
              'section/4a507bbf-b35a-45cd-92ee-2a5cfefadd6a'
            }
            target="_blank"
          >here</a>.
        </p>
        {
          // <h6>Professor Colin Collins, PhD</h6>
          // <h6>University of British Columbia</h6>
          // <h6>Department of Urologic Sciences</h6>
          // <h6>Senior Scientist</h6>
          // <h6>Vancouver Prostate Centre</h6>
          //
          // <div>
          //   <h6><strong>Date:</strong> March 2, 2017</h6>
          //   <h6><strong>Time:</strong> 2:30 – 3:30 PM (Pacific)</h6>
          //   <h6><strong>Location:</strong><br />
          //     Oregon Health & Science University<br />
          //     Center for Health & Healing<br />
          //     CHH 3rd Floor, Conference Room 1A&B<br />
          //     3303 SW Bond Avenue<br />
          //     Portland, OR  97239<br />
          //   </h6>
          // </div>
        }
        <Collapsible trigger="▸ See Poster" open triggerWhenOpen="▾ Close Poster">
          <div className={styles.poster}>
            <img
              style={{ width: '100%' }}
              role="presentation"
              src={poster}
            />
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
