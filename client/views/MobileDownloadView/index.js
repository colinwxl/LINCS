import React from 'react';
import styles from './MobileDownloadView.scss';
import screenshot from './screenshot.png';
import appStore from './appstore.png';
import playStore from './playStore.png';

export default function MobileDownloadView() {
  return (
    <div className={styles.wrapper}>
      <div className={'container'}>
        <div className={styles['mobile-page']}>
          <div className={`row ${styles.bordered}`}>
            <h1 className="col-md-12">Mobile</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ul className={`list-unstyled list-inline ${styles.icons}`}>
                <li><i className="fa fa-laptop fa-3x"></i></li>
                <li><i className="fa fa-tablet fa-3x"></i></li>
                <li><i className="fa fa-mobile fa-3x"></i></li>
              </ul>
              <h4>Take LINCS with you</h4>
              <p>
                With the LINCS Project Mobile App, you can explore LINCS centers,
                resources, publications, and tools.
              </p>
              <div className={styles['store-list']}>
                <a href="https://itunes.apple.com/us/app/lincs-project-mobile-app/id1193096130?mt=8" target="_blank">
                  <img src={appStore} className={styles.store} alt="App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.lincsprojectmobile&hl=en" target="_blank">
                  <img src={playStore} className={styles.store} alt="Play Store" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img src={screenshot} className={styles.screenshot} alt="Screenshot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
