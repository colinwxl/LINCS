import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';
import natureCoverImg from './images/nature-cover.png';


export default function Story201511192() {
  return (
    <Story
      title="LINCS in the News"
      date="November 19th, 2015"
    >
      <div className="clearfix">
        <img
          className={`${styles['img-border']} ${styles['inline-img-left']}`}
          src={natureCoverImg}
          alt="Nature Outlook Cover"
        />
        <h5>Genetics: Big Hopes for Big Data</h5>
        <p>Jill U. Adam</p>
        <p>
          Nature 527, S108–S109 (19 November 2015) doi:10.1038/527S108a.
          Published online 18 November 2015
        </p>
        <p>
          <a
            href="http://www.nature.com/nature/journal/v527/n7578_supp/full/527S108a.html"
            target="_blank"
          >
            Learn More
          </a>
        </p>
      </div>
    </Story>
  );
}
