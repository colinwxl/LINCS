import React from 'react';

import Story from './Story';
import styles from '../NewsView.scss';

export default function Story20150208() {
  return (
    <Story
      title="Publication Highlight | BD2K-LINCS Data Coordination and Integration Center"
      date="December 21th, 2017"
      author="Alexandra B. Keenan"
    >
      <img
        src=" https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/nar/PAP/10.1093_nar_gkx1063/1/gkx1063fig2.jpeg?Expires=1513896915&Signature=bPAzn0gYGGaxixm9A9QlK4NZoO62xgjcTQazv2S3SyqRdqbDLIm-53mWcO6~xv54kl0VaCRdxJU5pIf9MoQoDr9vA0P0Lmp1P~1Vp-~5OiaFm6iW8dg0VVNDZTpl9d8nHOHmFY0i98RhbbV6VI7LnqW3~bWhsZnpsBkpqWk7r0eUYys7f5270UvO1PBCyvrKGspNKo9pUyJPWfHS3U6-fWpeWlk0ZB7Bg4JOWYONQlzHR8Qu4NMAtLPpTHkvwWf3F4PyFFeVj7B61aeSniU4GmV~so7RBS7mxdn3XT1izZi5FcKSYbebQKfImDWg~ZU10jAM8SjYs-E~lZIjqPO3Aw__&Key-Pair-Id=APKAIUCZBIA4LVPAVW3Q"
        alt="dcic"
        className={styles['inline-img-left']}
        style={{ maxWidth: '25rem', maxHeight: '25rem' }}
      />

      <p>
        <strong>
          LINCS Data Portal and LINCS Data Registry
        </strong>
      </p>

      <p>
        Koleti et al. (2017) highlight the features of the <a href="http://lincsportal.ccs.miami.edu/">
        LINCS Data Portal</a> in a recent publication in Nucleic Acids Research
        database issue. The
        LINCS Data Portal provides integrated access to LINCS data and analysis
        tools. The authors also describe the LINCS Data Registry which is designed
        to meet the challenges of integrating data and metadata from diverse assay
        technologies employed by the six LINCS Data and Signature Generation
        Centers (DSGCs).
      </p>
      <p>
        Koleti, A. <i>et al</i>. Data Portal for the Library of Integrated Network-based
        Cellular Signatures (LINCS) program: integrated access to diverse large-scale
        cellular perturbation response data. Nucleic <i>Acids Res</i>, doi:10.1093/nar/gkx1063
        (2017).
      </p>

      <span className={styles['twitter-label']} style={{ marginBottom: '2rem' }}>
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
