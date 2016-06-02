import React from 'react';
import { Link } from 'react-router';

import Story from './Story';
import styles from '../NewsView.scss';
import neuroOutreachImg from './images/neuro-outreach.jpg';


export default function Story20160204() {
  return (
    <Story
      title="LINCS Outreach Meeting 2016"
      date="February 4th, 2016"
    >
      <div className="clearfix">
        <img
          className={styles['inline-img-right']}
          src={neuroOutreachImg}
          alt="LINCS Outreach"
        />
        <p className={styles.center}>
          <a href="https://meetings.ninds.nih.gov/Home/General/13365" target="_blank">
            General Info
          </a>
          {' | '}
          <a href="https://meetings.ninds.nih.gov/Home/Agenda/13365" target="_blank">
            Agenda
          </a>
          {' | '}
          <a href="https://meetings.ninds.nih.gov/Home/Registration/13365" target="_blank">
            Registration
          </a>
          {' | '}
          <a href="https://meetings.ninds.nih.gov/Home/General/13365" target="_blank">
            General Info
          </a>
        </p>
        <p className={styles.justify}>
          The Library of Integrated Network-based Cellular Signatures (LINCS) program
          aims to create a network-based understanding of biology by cataloging changes
          induced by exogenous perturbations on cellular processes through the lens of
          molecular and morphological profiling signatures. By generating, integrating,
          and publicly releasing data and tools that indicate how cells respond to
          various genetic and environmental stressors, the LINCS project will help us
          gain a more detailed understanding of cell pathways and aid efforts to develop
          therapies that might restore perturbed pathways and networks to their normal
          states. Come join us at our first ever Outreach Meeting to see examples of
          LINCS in action and learn how to effectively work with these unprecedented
          datasets.
        </p>
      </div>
      <h5>Confirmed Speakers:</h5>
      <ul>
        <li>Walter Koroshetz, NINDS</li>
        <li>Zak Kohane, Harvard Medical School</li>
        <li>Henry Rodriguez, NCI</li>
        <li>Jane Roskams, Allen Institute for Brain Science</li>
        <li>Fred Gage, The Salk Institute</li>
        <li>Gustavo Stolovitzky, IBM</li>
        <li>Phil Nelson, Google</li>
        <li>Trey Ideker, UCSD</li>
      </ul>
      <p>
        Meet investigators from
        the <Link to="/centers/data-and-signature-generating-centers">
        LINCS Data and Signature Generation Centers</Link> and
        the <Link to="/centers/dcic">
        BD2K-LINCS Data Coordination and Integration Center</Link> to
        establish collaborations!
      </p>
      <p>
        Present your work at our poster session! A limited number
        of <a href="https://meetings.ninds.nih.gov/Home/Tab1/13365" target="_blank">
        travel fellowships</a> are available.
      </p>
    </Story>
  );
}
