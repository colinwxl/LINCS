import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';
// Images
import neuroOutreachImg from './neuro_outreach.jpg';
import sbdssImg from './SBDSS.jpg';
import youtubeImg from './youtube.png';

export default class Overview extends Component {
  componentDidMount() {
    // Render the Google+ Follow Button
    // https://developers.google.com/+/web/follow/#javascript_api
    if (window && window.gapi) {
      window.gapi.follow.go(styles.wrapper);
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="The LINCS Community"
          subTitle={
            'The consortium engages the biomedical research ' +
            'communities through various outreach activities'
          }
        />
        <div className="container">
          <div className="row">
            <PageNav isCommunityPage mainPage="Overview" />
            <div className="col-md-9 col-md-pull-3">
              <h1 className={styles.title}>Overview</h1>
              <p>
                Access to and utilization of LINCS resources by the biomedical and data science
                research communities is one of the major aims of the LINCS program.
                The <a href="http://lincs-dcic.org/#/">BD2K-LINCS Data Coordination and Integration Center</a>,
                together with the <Link to="/centers/data-and-signature-generating-centers/">
                data and signature generation centers</Link>, use approaches like webinars,
                courses, training seminars, challenges, workshops and symposia to create
                an active LINCS community.
              </p>
              <h2>Training in Big Data Science</h2>
              <h5>
                BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science
              </h5>
              <div className={styles['info-split-reverse']}>
                <div className={`${styles.right} text-xs-center`}>
                  <p>
                    <a href="http://lincs-dcic.org/#/summer-research-app#nav">
                      <img
                        className="m-b-1"
                        src="http://www.lincsproject.org/wp-content/uploads/2015/02/DCIC_FINAL_2015.01.19-expanded-500x375.png"
                        alt="DCIC_FINAL_2015.01.19-expanded-500x375"
                        width="231"
                        height="173"
                      />
                    </a>
                  </p>
                </div>
                <div className={styles.left}>
                  <p>
                    The BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data
                    Science is a research intensive ten-week training program for undergraduate and
                    graduate students. The DCIC supports data science research focusing on
                    interpreting and integrating LINCS-generated data from different data types and
                    databases in LINCS-funded projects.
                  </p>
                  <a href="http://lincs-dcic.org/#/summer-research-app#nav">Learn more</a>
                  <ul>
                    <li><strong>Program Dates</strong>: June 6 – August 12, 2016</li>
                    <li><strong>Application Deadline</strong>: March 4, 2016</li>
                    <li>
                      <strong>
                        <a href="http://www.lincsproject.org/wp-content/uploads/2012/11/dcic_summer_program.pdf">
                          2016 Program Poster
                        </a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a href="http://lincs-dcic.org/#/summer-fellows-2015#nav">
                          2015 BD2K-LINCS DCIC Summer Fellows and Research Projects
                        </a>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
              <h2>LINCS Outreach Meeting 2016</h2>
              <div className={`${styles['info-split']}`}>
                <div className={`${styles.left} text-xs-center`}>
                  <a href="https://meetings.ninds.nih.gov/Home/Index/13365">
                    <img
                      className="m-b-1"
                      src={neuroOutreachImg}
                      alt="neuro_outreach"
                      width="218"
                      height="300"
                    />
                  </a>
                </div>
                <div className={styles.right}>
                  <p>
                    On March 10-11, 2016 the LINCS Outreach Meeting will be held at the University
                    of California, Irvine. We invite the research community to come see examples of
                    LINCS in action and learn how to effectively work with these unprecedented data
                    sets.
                  </p>
                  <p className="text-xs-center">
                    <a href="https://meetings.ninds.nih.gov/Home/General/13365">
                    General Info</a> | <a href="https://meetings.ninds.nih.gov/Home/Agenda/13365">
                    Agenda</a> | <a href="https://meetings.ninds.nih.gov/Home/Registration/13365">
                    Registration</a> | <a href="http://www.lincsproject.org/wp-content/uploads/2016/02/lincs_outeach_2016.pdf">
                    Meeting Flyer</a>
                  </p>
                  <p>
                    <strong>Confirmed Speakers:</strong>
                  </p>
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
                </div>
              </div>
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
                of <a href="https://meetings.ninds.nih.gov/Home/Tab1/13365">travel fellowships</a> are
                available.
              </p>
              <div className={styles['info-block']}>
                <h5>
                  Big Data Science with the BD2K-LINCS Data Coordination and Integration Center
                </h5>
                <p>
                  This course covers various methods of analysis including: unsupervised clustering,
                  gene-set enrichment analyses, data visualization, and supervised machine learning
                  applications to LINCS data. This course also covers basic data processing and data
                  normalization methods to clean and harmonize LINCS data and other relevant data.
                  This free massive open online course (MOOC) on Coursera started September 15, 2015
                  but it is free and open for users to join at anytime.
                </p>
                <a href="https://www.coursera.org/course/bd2klincs">Visit course</a>
              </div>
              <h2>Molecular Medicine Tri-Conference 2016</h2>
              <p>
                On March 8, 2016, as part of the BD2K-LINCS DCIC’s community outreach efforts,
                Avi Ma’ayan PhD and Stephan Schurer PhD will present in
                the <a href="http://www.triconference.com/Informatics/">Informatics channel</a> at
                the Molecular Medicine Tri-Conference 2016 in San Francisco, CA.
              </p>
              <div className={styles['info-block']}>
                <h5>Bioinformatics for Big Data</h5>
                <p>
                  <strong>
                    L1000CDS2: LINCS L1000 Characteristic Direction Signature Search Engine Predicts
                    Kenpaullone as a Potential Therapeutic for Ebola
                  </strong>
                </p>
                <p><em>Avi Ma’ayan, PhD, Icahn School of Medicine at Mount Sinai</em></p>
                <a href="http://www.triconference.com/Bioinformatics-Big-Data/">Learn more</a>
              </div>
              <div className={styles['info-block']}>
                <h5>
                  Integrated Informatics Driving Translational Research and Precision Medicine
                </h5>
                <p>
                  <strong>
                    Rational Data-Driven Development of Novel Poly-Pharmacology Small Molecules
                  </strong>
                </p>
                <p>
                  <em>Stephan Schurer, PhD, Miller School of Medicine, University of Miami</em>
                </p>
                <a href="http://www.triconference.com/Integrated-Pharma-Informatics/">Learn more</a>
              </div>
              <h2>Systems Biology Data Science Symposium 2016</h2>
              <div className={styles['info-split']}>
                <div className={styles.left}>
                  <a href="http://lincs-dcic.org/#/2016-data-science-symposium">
                    <img
                      src={sbdssImg}
                      alt="SBDSS"
                      width="350"
                    />
                  </a>
                </div>
                <div className={styles.right}>
                  <p>
                    The <a href="http://lincs-dcic.org/#/">BD2K-LINCS DCIC</a> and the University
                    of Miami hosted the
                    two-day <a href="http://lincs-dcic.org/#/2016-data-science-symposium">
                    Systems Biology Data Science Symposium (SBDSS)</a> on January 19-20, 2016
                    at the University of Miami.
                  </p>
                  <p className="m-b-0">
                    This SBDSS 2016 brought together the BD2K-LINCS DCIC, local researchers, and
                    outside experts who apply or develop computational systems biology resources.
                    In presentations, a poster reception and several working sessions, the DCIC
                    showcased <a href="http://lincs-dcic.org/#/resources">
                    tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav">
                    scientific projects</a>, connected developers with users, and initiated
                    new collaborations and obtained feedback from expert and casual users of
                    computational systems biology resources.
                  </p>
                  <a href="http://lincs-dcic.org/#/2016-data-science-symposium">Learn more</a>
                </div>
              </div>
              <h2>Crowdsourcing Projects</h2>
              <div className={styles['info-block']}>
                <h5>BD2K-LINCS DCIC Crowdsourcing Portal</h5>
                <p>
                  As part of our educational efforts to bring awareness to LINCS data and
                  explain the efforts of LINCS to the general public, the DCIC developed
                  a crowdsourcing portal which engages the research community in various
                  micro- and megatasks.
                </p>
                <a href="http://www.maayanlab.net/crowdsourcing/">Learn more</a>
              </div>
              <h2>LINCS Data Science Research Webinars</h2>
              <div className={styles['info-block']}>
                <p>
                  The LINCS Data Science Research Webinars serve as a general forum to engage data
                  scientists within and outside of the LINCS project to work on problems related to
                  LINCS data analysis and integration.
                </p>
                <Link to="/community/webinars">Learn more</Link>
              </div>
              <h2>LINCS Tutorials and Training Resources</h2>
              <p>
                <a href="https://www.youtube.com/playlist?list=PL0Bwuj8819U8817LbRWK0VdoKcVEMYb8Z">BD2K-LINCS DCIC Tutorials</a>: The BD2K-LINCS DCIC YouTube channel includes a series of demo and tutorial videos on data analysis and visualization with the <a href="http://bd2k-lincs.org/#/resources">BD2K-LINCS DCIC tools</a>.
              </p>
              <p>
                <a href="http://lincs.hms.harvard.edu/resources/tutorials-presentations/">HMS LINCS Center Tutorials and Presentations</a>: Instructional tutorials on topics such as how to use and access certain kinds of HMS LINCS data and HMS LINCS-related talks and presentations.
              </p>
              <p>
                <a href="http://www.lincscloud.org/training/">LINCSCLOUD Training</a>: Learn about LINCSCLOUD resources
              </p>
              <h2>Social Media</h2>
              <div className={styles.social}>
                <a href="https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg">
                  <img
                    src={youtubeImg}
                    alt="YouTube"
                    title="BD2K-LINCS DCIC Youtube Channel"
                    height="60"
                  />
                </a>
                <div
                  className="g-follow"
                  data-annotation="bubble"
                  data-height="20"
                  data-href="https://plus.google.com/114413939991307460842"
                  data-rel="author"
                />
                <div className={styles.twitter}>
                  <iframe
                    id="twitter-widget-0"
                    scrolling="no"
                    frameBorder="0"
                    allowTransparency="true"
                    className="twitter-follow-button twitter-follow-button-rendered"
                    title="Twitter Follow Button"
                    src="http://platform.twitter.com/widgets/follow_button.b9740740e0bcf9b0657c5b11bd4388da.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=BD2KLINCSDCIC&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=1458571889834"
                    data-screen-name="BD2KLINCSDCIC"
                  />
                  {
                    /* eslint-disable */
                    // <![CDATA[
                      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs')
                    // ]]&gt;
                    /* eslint-enable */
                  }
                  <iframe
                    id="twitter-widget-1"
                    scrolling="no"
                    frameBorder="0"
                    allowTransparency="true"
                    className="twitter-follow-button twitter-follow-button-rendered"
                    title="Twitter Follow Button"
                    src="http://platform.twitter.com/widgets/follow_button.b9740740e0bcf9b0657c5b11bd4388da.en.html#dnt=false&amp;id=twitter-widget-1&amp;lang=en&amp;screen_name=CMap_Broad&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=1458571889836"
                    data-screen-name="CMap_Broad"
                  />
                  <iframe
                    id="twitter-widget-2"
                    scrolling="no"
                    frameBorder="0"
                    allowTransparency="true"
                    className="twitter-follow-button twitter-follow-button-rendered"
                    title="Twitter Follow Button"
                    src="http://platform.twitter.com/widgets/follow_button.b9740740e0bcf9b0657c5b11bd4388da.en.html#dnt=false&amp;id=twitter-widget-2&amp;lang=en&amp;screen_name=NeuroLINCS&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=145857188987"
                    data-screen-name="NeuroLINCS"
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
