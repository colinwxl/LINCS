import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';


export default function Story20160831() {
  return (
    <Story
      title="LINCS Consortium Meeting"
      date="August 31st, 2016"
    >
      <div className="clearfix">
        <p>
          Mark your calendars for the upcoming LINCS Consortium Face-to-Face
          Meeting that will be held on September 19-20, 2016 at the NIH Campus
          in Bethesda, MD.&nbsp;
          <a
            href="https://twitter.com/hashtag/LINCSDATA?src=hash"
            target="_blank"
          >
            #LINCSDATA
          </a>
        </p>
        <span className={styles['twitter-label']}>
          <a
            title="Follow @LINCSProgram on Twitter"
            href="https://twitter.com/LINCSProgram"
          >
            Follow <strong>@LINCSProgram</strong>
          </a>
        </span>
      </div>
    </Story>
  );
}
