import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import youtubeSreenshot from './images/nih-lincs-youtube.jpg';


export default function Story20160425() {
  return (
    <Story
      title="NIH LINCS Program On Social Media"
      date="April 25th, 2016"
      >
      <div className="clearfix">
        <img
          src={youtubeSreenshot}
          alt="YouTube screenshot"
          className={styles['inline-img-left']}
        />
        <p>
          Please follow the NIH LINCS Program on social media for information on the consortium’s
          latest news and data releases! <a href="https://www.youtube.com/channel/UCNcDd4x8PsUZpt4U2Xa8sfg" target="_blank">
          NIH LINCS Program YouTube channel</a>
        </p>
      </div>
      <span className={styles['twitter-label']}>
        <a
          title="Follow @LINCSProgram on Twitter"
          href="https://twitter.com/LINCSProgram"
          >
          Follow <strong>@LINCSProgram</strong>
        </a>
      </span>
    </Story>
  );
}
