import React from 'react';
import Collapsible from 'react-collapsible';
import styles from './Events.scss';

export default function Event20170413() {
  return (
    <div className={styles['ann-card']}>
      <h6 className={`${styles['ann-group']} ${styles.webinar}`}>April 13, 2017</h6>
      <div className={styles['ann-content']}>
        <h3>bioCADDIE Webinar</h3>
        <h4>
          Enhancing and Mining the Gene Expression Omnibus and DataMed
          with Chrome Extensions
        </h4>
        <div className="row">
          <div className="col-xl-2">
            <img
              src="http://icahn.mssm.edu/files/fad_img_new/193/0000076810011253726801/0000072500001497168952.jpg"
              alt="Avi Ma'ayan PhD"
              width="125"
            />
          </div>
          <div className="col-xl-10">
            <br />
            <p>
              Avi Ma’ayan PhD, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC
            </p>
            <p>This event starts at 1:00 PM ET on April 13, 2017.</p>
            <Collapsible trigger="▸ Abstract" triggerWhenOpen="▾ Abstract">
              <span>
                In the past two years we have developed four Chrome extensions
                that enhance the functionality of the Gene Expression Omnibus
                (GEO) and DataMed. The Chrome extensions are named:&nbsp;
                <a href="http://amp.pharm.mssm.edu/g2e/" target="_blank">GEO2Enrichr</a>,&nbsp;
                <a
                  href="https://chrome.google.com/webstore/detail/archs4/ognafeffndmmiliegaamoockceneedea"
                  target="_blank"
                >
                  ARCHS4
                </a>,&nbsp;
                <a
                  href="https://chrome.google.com/webstore/detail/cite-d-lite/ipiffhgeigmiffclkpkgdaklbdgdegkk?hl=en"
                  target="_blank"
                >
                  Cite-D-Lite
                </a>, and Datasets2Tools. GEO2Enrichr enables users
                to select control and perturbation samples from GEO dataset
                landing pages, and then to compute differential expression
                between the samples. The resultant signatures are visualized
                with interactive PCA and heatmaps, and piped to downstream
                analysis tools such as&nbsp;
                <a href="http://amp.pharm.mssm.edu/Enrichr/" target="_blank">
                  Enrichr
                </a> and&nbsp;
                <a href="http://amp.pharm.mssm.edu/L1000CDS2/#/index" target="_blank">
                  L1000CDS2
                </a>. ARCHS4 provides
                access to processed RNA-seq data from all mice and human studies
                directly from GEO landing pages. The Cite-D-Lite extension adds
                buttons to export data citations to popular reference management
                software; whereas Datasets2Tools provides links from dataset
                landing pages to other pages that provide web-based interactive
                analysis of each dataset. In my presentation, I will demo these
                extensions and discuss how together these tools can enable the
                discovery of new knowledge.
              </span>
            </Collapsible>
            <a href="https://biocaddie.org/events/webinars" target="_blank">
              How to Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
