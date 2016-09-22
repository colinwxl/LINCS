import React, { Component } from 'react';
import { Link } from 'react-router';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import styles from './Overview.scss';
// Images
import neuroOutreachImg from './neuro_outreach.jpg';
import sbdssImg from './SBDSS.jpg';
import dcicImg from './dcic.png';
import youtubeImg from './youtube.png';
import cmapImg from './cmap.png';

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
                courses, training seminars, challenges, workshops and symposia to foster
                an active LINCS community.
              </p>
              <h2>Training in Big Data Science</h2>
              <div className={styles['info-block']}>
                <h5>
                  Big Data Science with the BD2K-LINCS Data Coordination and Integration Center
                </h5>
                <p>
                  Mark your calendars for the upcoming session of the BD2K-LINCS Big Data Science
                  MOOC on Coursera organized by the BD2K-LINCS DCIC that begins October 3, 2016!
                </p>
                <p>
                  This course covers various methods of analysis including: unsupervised clustering,
                  gene-set enrichment analyses, data visualization, and supervised machine learning
                  applications to LINCS data. This course also covers basic data processing and data
                  normalization methods to clean and harmonize LINCS data and other relevant data.
                  <br />
                  <a href="https://www.coursera.org/course/bd2klincs">Enroll Now</a>
                </p>
              </div>
              <h5>
                BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science
              </h5>
              <div className={styles['info-split-reverse']}>
                <div className={`${styles.right} text-xs-center`}>
                  <p>
                    <a href="http://lincs-dcic.org/#/summer-research-app#nav">
                      <img
                        className="m-b-1"
                        src={dcicImg}
                        alt="dcic"
                        width="231"
                        height="173"
                      />
                    </a>
                  </p>
                </div>
                <div className={styles.left}>
                  <p>
                    The <a href="http://lincs-dcic.org/#/summer-research-app#nav">BD2K-LINCS DCIC Summer Research
                    Training Program in Biomedical Big Data
                    Science</a> is a research intensive ten-week training program for undergraduate
                    and graduate students. The DCIC supports data science research focused on
                    developing methods that would further extract knowledge from LINCS data by
                    integrating LINCS data with other relevant resources. Summer fellows conduct
                    faculty-mentored independent research projects within laboratories affiliated
                    with the Center in the following areas: data integration, dynamic data
                    visualization, machine learning, data harmonization, computational drug
                    discovery, metadata and APIs, knowledge modeling, Bayesian networks and
                    statistical mining.
                  </p>
                  <ul>
                    <li>

                      <a href="http://lincs-dcic.org/#/summer-fellows-2016" target="_blank">
                        2016 BD2K-LINCS DCIC Summer Fellows and Research Projects
                      </a>

                    </li>
                    <li>

                      <a href="http://lincs-dcic.org/#/summer-fellows-2015#nav">
                        2015 BD2K-LINCS DCIC Summer Fellows and Research Projects
                      </a>

                    </li>
                  </ul>
                </div>
              </div>

              <h2>Crowdsourcing Challenges</h2>
              <h5>
                Connectivity Map Challenge
              </h5>

              <div className={styles['info-split-reverse']}>
                <div className={`${styles.right} text-xs-center`}>
                  <p>
                    <img
                      className="m-b-1"
                      src={cmapImg}
                      alt="cmap"
                    />
                  </p>
                </div>
                <div className={styles.left}>
                  <p>
                    The <strong>LINCS Center for Transcriptomics</strong>, in partnership with the
                    Crowd Innovation Lab at Harvard Business School, launched their first
                    challenge, “Infer the Transcriptome”. Contestants were provided with a
                    large dataset of ~100,000 gene expression profiles on which to train an
                    inference model. Models were scored based on their accuracy in predicting
                    gene expression values for non-landmark genes in a separate test dataset.
                    The contest format was a 2-week marathon featuring a continuously updated
                    leaderboard. To determine winners, each contestant’s best model was scored
                    on its performance on a holdout dataset. <a href="https://community.topcoder.com/longcontest/stats/?module=ViewOverview&rd=16753" target="_blank">Leaderboard</a>
                  </p>
                </div>
              </div>
              <div className={styles['info-block']}>
                <h5>
                  BD2K-LINCS DCIC Crowdsourcing Portal
                </h5>

                <p> As part of our educational efforts to enhance awareness of LINCS data and
                  explain the efforts of LINCS to the general public, the DCIC developed
                  a crowdsourcing portal that engages the research community in various
                  micro- and megatasks. <a href="http://www.maayanlab.net/crowdsourcing/">Learn More</a>
                </p>
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
                    Systems Biology Data Science Symposium (SBDSS)</a> on January 19-20, 2016.
                    This symposium brought together the BD2K-LINCS DCIC, local researchers, and
                    outside experts who apply or develop computational systems biology resources.
                    In presentations, a poster reception and several working sessions, the DCIC
                    showcased <a href="http://lincs-dcic.org/#/resources">
                    tools/resources</a> and <a href="http://lincs-dcic.org/#/about#nav">
                    scientific projects</a>, connected developers with users, initiated
                    new collaborations, and obtained feedback from expert and casual users of
                    computational systems biology resources. <a href="https://www.youtube.com/playlist?list=PL0Bwuj8819U-FM6lY39xWJmHXe87TT-GZ">Watch on YouTube</a>
                  </p>
                </div>
              </div>
              <h2>LINCS Data Science Research Webinars</h2>

              <div className={styles['info-block']}>
                <p>
                  The LINCS Data Science Research Webinars serve as a general forum to engage data
                  scientists within and outside of the LINCS project to work on problems related to
                  LINCS data analysis and integration. <Link to="/community/webinars">Learn
                  More</Link>
                </p>
              </div>
              <h2>LINCS Tutorials and Training Resources</h2>

              <p>
                <a href="https://www.youtube.com/playlist?list=PL0Bwuj8819U8817LbRWK0VdoKcVEMYb8Z">BD2K-LINCS
                DCIC Tutorials</a>: The BD2K-LINCS DCIC YouTube channel includes a series of demo
                and tutorial videos on data analysis and visualization with the <a href="http://bd2k-lincs.org/#/resources">BD2K-LINCS
                DCIC tools</a>.
              </p>

              <p>
                <a href="http://lincs.hms.harvard.edu/resources/tutorials-presentations/">HMS
                LINCS Center Tutorials and Presentations</a>: Instructional tutorials on topics
                such as how to use and access certain kinds of HMS LINCS data, and HMS
                LINCS-related talks and presentations.
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
                    !function (d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                      if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + '://platform.twitter.com/widgets.js';
                        fjs.parentNode.insertBefore(js, fjs);
                      }
                    }(document, 'script', 'twitter-wjs')
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
