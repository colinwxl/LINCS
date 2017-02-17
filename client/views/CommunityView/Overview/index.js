import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Collapsible from 'react-collapsible';

import PageBanner from 'components/PageBanner';
import PageNav from 'components/PageNav';
import formatDate from 'utils/formatDate';
import { loadAnnouncements } from 'actions/announcements';
import styles from './Overview.scss';
// Images
import neuroOutreachImg from './neuro_outreach.jpg';
import sbdssImg from './SBDSS.jpg';
import dcicImg from './dcic.png';
import summerInterns2016Img from 'static/files/summer_interns/dcic_ismms_summer-1.jpg';
import aacrLogo from 'static/files/aacr_logo.png';
// import youtubeImg from './youtube.png';
import cmapImg from './cmap.png';
// import dcicLogo from 'static/files/centers_logos/DCIC.svg';
// import broadLogo from 'static/files/centers_logos/CMap.svg';
// import hmsLogo from 'static/files/centers_logos/hms-lincs.png';
// import mepLogo from 'static/files/centers_logos/mep-lincs-logo.png';

import sorger from './presenter_images/sorger.png';
import mills from './presenter_images/mills.png';
import maayan from './presenter_images/maayan.png';
import heiser from './presenter_images/heiser.png';
import jaffe from './presenter_images/jaffe.png';
import golub from './presenter_images/golub.png';

const AACR = [
  {
    time: '5:00 - 5:15 PM',
    talkTitle: 'Introduction to the NIH LINCS Program',
    speaker: 'Peter K. Sorger PhD',
    speakerImg: sorger,
    // centerLogo: hmsLogo,
    centerName: 'HMS LINCS',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/hms-lincs',
  },
  {
    time: '5:15 - 5:30 PM',
    talkTitle: 'Navigating the global landscape of cellular fate with LINCS data',
    speaker: "Avi Ma'ayan PhD",
    speakerImg: maayan,
    // centerLogo: dcicLogo,
    centerName: 'BD2K-LINCS DCIC',
    centerPath: 'LINCS/centers/dcic',
  },
  {
    time: '5:30 - 5:45 PM',
    talkTitle: 'Mining LINCS drug-response databases to identify novel activities'
    + ' of investigational breast cancer therapeutics',
    speaker: 'Caitlin Mills PhD',
    speakerImg: mills,
    // centerLogo: hmsLogo,
    centerName: 'HMS LINCS',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/hms-lincs',
  },
  {
    time: '5:45 - 6:00 PM',
    talkTitle: 'The L1000 Platform and Next Generation Connectivity Map',
    speaker: 'Todd R. Golub MD',
    speakerImg: golub,
    // centerLogo: broadLogo,
    centerName: 'LINCS Transcriptomics',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/lincs-transcriptomics',
  },
  {
    time: '6:00 - 6:15 PM',
    talkTitle: 'Systematic study of the influence of the microenvironment'
    + 'on cancer cell phenotypes: An overview of the MEP-LINCS center',
    speaker: 'Laura M. Heiser PhD',
    speakerImg: heiser,
    // centerLogo: mepLogo,
    centerName: 'MEP-LINCS',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/mep-lincs',
  },
  {
    time: '6:15 - 6:30 PM',
    talkTitle: 'Proteomic connectivity maps of chromatin and'
    + 'signaling for functional drug discovery',
    speaker: 'Jake Jaffe PhD',
    speakerImg: jaffe,
    // centerLogo: broadLogo,
    centerName: 'LINCS PCCSE',
    centerPath: 'LINCS/centers/data-and-signature-generating-centers/lincs-transcriptomics',
  },
];

const mapStateToProps = (state) => ({
  announcements: state.announcements.announcements,
});

export class Overview extends Component {
  componentDidMount() {
    // Render the Google+ Follow Button
    // https://developers.google.com/+/web/follow/#javascript_api
    if (window && window.gapi) {
      window.gapi.follow.go(styles.wrapper);
    }
    this.props.loadAnnouncements();
  }

  latestSort(anns) {
    let latestAnnsIdx = anns.length;
    const today = new Date();
    for (let i = 0; i < anns.length; i++) {
      const annDate = new Date(anns[i].eventDate);
      if (annDate < today) {
        latestAnnsIdx = i;
        break;
      }
    }
    const latestAnns = anns.slice(0, latestAnnsIdx).reverse();
    const remainingAnns = anns.slice(latestAnnsIdx).reverse();
    return latestAnns.concat(remainingAnns);
  }

  findWebinars(anns) {
    return anns.filter(ann => ann.webinar);
  }

  render() {
    const webinars = this.findWebinars(this.props.announcements);
    const latestWebinars = this.latestSort(webinars).slice(0, 2);
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
              <br />
              <h5>Listed below are upcoming LINCS outreach activities</h5>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>CONFERENCE</h6>
                <div className={styles['ann-content']}>
                  <h3>AACR Annual Meeting 2017</h3>
                  <h5>
                    <a
                      href="http://www.abstractsonline.com/pp8/#!/4292/session/901"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      Special Session 17:
                      Advancing Cancer Therapy Using Data from the NIH LINCS Program
                    </a>
                  </h5>
                  <div>
                    <img
                      src={aacrLogo}
                      alt="AACR Logo"
                      style={{ width: '20rem' }}
                      className={styles['inline-img-left']}
                    />
                    <h6><strong>Date:</strong> April 4, 2017, 5:00 - 6:30 PM</h6>
                    <h6><strong>Location:</strong>
                      &nbsp;Room 147, Level 1, Washington Convention Center, Washington, DC
                    </h6>
                  </div>
                  <p>
                    Cancer cells respond to small molecule drugs and components of
                    the microenvironment in a complex, time-dependent manner that
                    varies from one cell type to the next and, within a genetically
                    homogenous population, from one cell to the next. This session
                    highlights recent results from the NIH-funded Library of Network-Based
                    Cellular Signatures (LINCS) program, which is assembling
                    libraries of perturbagen-response signatures using high-throughput
                    transcript and proteomic profiling, live and fixed-cell imaging and
                    phenotypic assays. Ways of accessing and analyzing LINCS data,
                    software and experimental protocols will be presented along with
                    recent insights into oncogenic mechanisms and responses to therapeutic
                    drugs derived from large-scale profiling studies.
                  </p>
                  <Collapsible
                    trigger="Session Schedule ▸"
                    triggerWhenOpen="Session Schedule ▾"
                    transitionTime={300}
                  >
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ width: '140px' }}>Time</th>
                          <th>Title</th>
                          <th style={{ textAlign: 'center' }}>Presenter</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          AACR.map((pres, idx) => (
                            <tr key={idx}>
                              <td>{pres.time}</td>
                              <td><strong>{pres.talkTitle}</strong></td>
                              <td>
                                <div className={styles['center-box']}>
                                  <img
                                    src={pres.speakerImg}
                                    alt={pres.speakerImg}
                                    className={styles.presenterImage}
                                  />
                                  <i>{pres.speaker}</i>
                                  <br />
                                  <Link to={pres.centerPath} className={styles.link}>
                                    {pres.centerName}
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>
                  </Collapsible>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>LINCS DATA SCIENCE WEBINAR</h6>
                <div className={styles['ann-content']}>
                  <h3>LINCS Data Science Research Webinars</h3>
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PL0Bwuj8819U-G9Ob0jIGHp5AtwpCghLV5"
                    frameBorder="0"
                    allowFullScreen=""
                    style={{ width: '16rem', height: '12rem' }}
                    className={styles['inline-img-left']}
                  />
                  <div className={styles['info-block']}>
                    <p>
                      The LINCS Data Science Research Webinars serve as a general
                      forum to engage data scientists within and outside of the
                      LINCS project to work on problems related to
                      LINCS data analysis and integration.&nbsp;
                      <Link to="/community/webinars">Learn More</Link>
                    </p>
                    <br />
                    <div>
                      <h6>
                        <strong>
                          Webinars are held on select Tuesdays at 3:00 PM Eastern Time
                        </strong>
                      </h6>
                      <div>
                        How to Connect with GoToMeeting
                        <ul className={styles.ol}>
                          <li>
                            <b>1.</b> Join from your computer, tablet, or smartphone by
                            visiting&nbsp;
                            <a href="https://global.gotomeeting.com/join/168894253" target="_blank">
                              https://global.gotomeeting.com/join/168894253
                            </a>
                          </li>
                          <li>
                            <b>2.</b>Use your microphone and speakers (VOIP) for audio.
                            You’ll sound best with a headset. You can also call
                            in using your telephone: United States (Long distance)
                            : +1 (312) 757-3121
                          </li>
                          <li><b>3.</b>When prompted, enter access code 168-894-253</li>
                          <li>
                            <b>4.</b>You may need an audio PIN. If so,
                            this will be shown after joining the session
                          </li>
                        </ul>
                      </div>
                      <div>
                        <strong>Upcoming Webinars</strong>
                        <ul>
                            {latestWebinars.map((web, idx) => (
                              <li key={idx}>
                                {formatDate(web.eventDate)}:&nbsp;
                                <Link to="/community/webinars">
                                  {web.title}
                                </Link>
                                {web.presenter ? ` (Speaker: ${web.presenter})` : null}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>SYMPOSIA</h6>
                <div className={styles['ann-content']}>
                  <h3>BD2K-LINCS Data Science Symposium 2017</h3>
                  <h4>Systems Biology of Cellular Perturbations</h4>
                  <p>
                    <img
                      className={styles['inline-img-left']}
                      src={sbdssImg}
                      alt="SBDSS"
                      width="350"
                    />
                    The <a href="http://www.lincs-dcic.org" target="_blank">
                    BD2K-LINCS Data Coordination and Integration Center
                    (DCIC)</a> and the University of Cincinnati Medical Center
                     will host the second annual&nbsp;
                    <a href="https://sites.google.com/view/sbdss2017" target="_blank">
                      BD2K-LINCS Data Science
                    </a> Symposium (DSS 2017) on May 16-18, 2017.
                  </p>
                  <p>
                    The symposium will bring together data scientists
                    and translational scientists from academia, industry
                    and government to discuss uses of big data in biomedicine.
                    The general theme of the symposium is the systems biology
                    of perturbation signatures and applications in drug
                    development, translational biomedicine and environmental
                    health. Talks will address a range of issues related to
                    leveraging Big Data in translational research including
                    FAIR data principles and the emerging NIH Big Data ecosystem.
                    The program will also provide a survey of data science
                    research pertaining to BD2K (Big Data to Knowledge) and
                    LINCS (Library of Network-Based Cellular Signatures)
                    consortia.
                  </p>
                  <p>
                    The symposium will feature invited talks, poster session,
                    and selected poster presentation sessions. Special session
                    on Big Data in Environmental Health will be held in the
                    afternoon of May 16. For the list of invited speakers please
                    refer to the agenda. To participate, please register free
                    of charge.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>TRAINING PROGRAM</h6>
                <div className={styles['ann-content']}>
                  <h3>
                    BD2K-LINCS DCIC Summer Research Training Program
                    in Biomedical Big Data Science
                  </h3>
                  <div className="clearfix">
                    <p>
                      <img
                        className={styles['inline-img-left']}
                        src={summerInterns2016Img}
                        alt="summer-interns"
                        width="331"
                        height="173"
                      />
                      We are currently accepting applications for the&nbsp;
                      <a href="http://lincs-dcic.org/#/summer-research-app#nav" target="_blank">
                        BD2K-LINCS DCIC Summer Research Training
                        Program in Biomedical Big Data Science
                      </a>
                      ,  a research intensive ten-week training program for undergraduate and
                      graduate students. The DCIC supports data science research focused on
                      developing methods that would further extract knowledge from LINCS data
                      by integrating LINCS data with other relevant resources. Summer fellows
                      conduct faculty-mentored independent research projects
                      within laboratories affiliated with the Center in the following areas:
                      data integration, dynamic data visualization, machine learning, data
                      harmonization, computational drug discovery, metadata and APIs,
                      knowledge modeling, Bayesian networks and statistical mining.&nbsp;
                      <a href="http://lincs-dcic.org/#/summer-research-app" target="_blank">
                        How to Apply
                      </a>
                      <br />
                    </p>
                  </div>
                  <div className={styles['info-block']}>
                    <strong>
                      Application Deadline: March 1, 2017 at 12 Midnight Eastern Time
                    </strong>
                    <br />
                    Program Dates: June 5, 2017 - August 11, 2017
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
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>MOOC ON COURSERA</h6>
                <div className={styles['ann-content']}>
                  <h3>
                    Big Data Science with the BD2K-LINCS Data Coordination and Integration Center
                  </h3>
                  <div>
                    <a href="http://lincs-dcic.org/#/summer-research-app#nav">
                      <img
                        className={styles['inline-img-left']}
                        src={dcicImg}
                        alt="dcic"
                        width="231"
                        height="173"
                      />
                    </a>
                    <h6><strong>
                      Next session of this course begins on Coursera February 20, 2017!
                    </strong></h6>
                  </div>
                  <p>
                    This course covers various methods of analysis including:
                    unsupervised clustering, gene-set enrichment analyses,
                    data visualization, and supervised machine learning
                    applications to LINCS data. This course also covers
                    basic data processing and data normalization methods to
                    clean and harmonize LINCS data and other relevant data.&nbsp;
                    <a href="https://www.coursera.org/course/bd2klincs">Enroll Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>CROWDSOURCING CHALLENGE</h6>
                <div className={styles['ann-content']}>
                  <h3>Connectivity Map Challenge: Infer the Transcriptome</h3>
                  <div className="clearfix">
                    <p>
                      <img
                        className={styles['inline-img-left']}
                        src={cmapImg}
                        alt="cmap"
                      />
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
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>CROWDSOURCING CHALLENGE</h6>
                <div className={styles['ann-content']}>
                  <h3>
                    <a
                      href="http://crowdsourcing.topcoder.com/cmap2"
                      target="_blank"
                      style={{ textDecoration: 'none' }}
                    >
                      Connectivity Map 2 Data Science Challenge
                    </a>
                  </h3>
                  <p>
                    <img
                      className={styles['inline-img-left']}
                      src={cmapImg}
                      alt="cmap"
                    />
                    The LINCS Center for Transcriptomics at the Broad
                    Institute launched a second data science challenge
                    through the Topcoder crowd-sourcing platform.
                    The challenge is currently underway!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>CROWDSOURCING CHALLENGE</h6>
                <div className={styles['ann-content']}>
                  <h3>BD2K-LINCS DCIC Crowdsourcing Portal</h3>
                  <p> As part of our educational efforts to enhance awareness of LINCS data and
                    explain the efforts of LINCS to the general public, the DCIC developed
                    a crowdsourcing portal that engages the research community in various
                    micro- and megatasks. <a href="http://www.maayanlab.net/crowdsourcing/">Learn More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>SYMPOSIA</h6>
                <div className={styles['ann-content']}>
                  <h3>LINCS Consortium Meeting 2016</h3>
                  <div className="clearfix">
                    <a href="http://lincs-dcic.org/#/2016-data-science-symposium">
                      <img
                        className={styles['inline-img-left']}
                        src={sbdssImg}
                        alt="SBDSS"
                        width="350"
                      />
                    </a>
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
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <div className={styles['ann-card']}>
                <h6 className={styles['ann-group']}>SYMPOSIA</h6>
                <div className={styles['ann-content']}>
                  <h3>LINCS Outreach Meeting 2016</h3>

                  <div className="clearfix">
                    <a href="https://meetings.ninds.nih.gov/Home/Index/13365">
                      <img
                        className={styles['inline-img-left']}
                        src={neuroOutreachImg}
                        alt="neuro_outreach"
                        width="165"
                        height="225"
                      />
                    </a>
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
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  loadAnnouncements: PropTypes.func,
  announcements: PropTypes.array,
};

export default connect(mapStateToProps, {
  loadAnnouncements,
})(Overview);


// <div className="row">
//   <div className="col-md-9">
//     <div className={styles['ann-card']}>
//       <h6 className={styles['ann-group']}>CONFERENCE</h6>
//       <div className={styles['ann-content']}>
//         <h3>BD2K-LINCS Data Science Symposium 2017</h3>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="row">
//   <div className="col-md-9">
//     <h2>Social Media</h2>
//
//     <div className={styles.social}>
//       <a href="https://www.youtube.com/channel/UC88h_MIO1LP7Jv52VQ4qKkg">
//         <img
//           src={youtubeImg}
//           alt="YouTube"
//           title="BD2K-LINCS DCIC Youtube Channel"
//           height="60"
//         />
//       </a>
//
//       <div
//         className="g-follow"
//         data-annotation="bubble"
//         data-height="20"
//         data-href="https://plus.google.com/114413939991307460842"
//         data-rel="author"
//       />
//       <div className={styles.twitter}>
//         <iframe
//           id="twitter-widget-0"
//           scrolling="no"
//           frameBorder="0"
//           allowTransparency="true"
//           className="twitter-follow-button twitter-follow-button-rendered"
//           title="Twitter Follow Button"
//           src="http://platform.twitter.com/widgets/follow_button.b9740740e0bcf9b0657c5b11bd4388da.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=BD2KLINCSDCIC&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=1458571889834"
//           data-screen-name="BD2KLINCSDCIC"
//         />
//         {
          /* eslint-disable */
//           // <![CDATA[
//           !function (d, s, id) {
//             var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
//             if (!d.getElementById(id)) {
//               js = d.createElement(s);
//               js.id = id;
//               js.src = p + '://platform.twitter.com/widgets.js';
//               fjs.parentNode.insertBefore(js, fjs);
//             }
//           }(document, 'script', 'twitter-wjs')
//           // ]]&gt;
//           /* eslint-enable */
//         }
//         <iframe
//           id="twitter-widget-1"
//           scrolling="no"
//           frameBorder="0"
//           allowTransparency="true"
//           className="twitter-follow-button twitter-follow-button-rendered"
//           title="Twitter Follow Button"
//           src="http://platform.twitter.com/widgets/follow_button.b9740740e0bcf9b0657c5b11bd4388da.en.html#dnt=false&amp;id=twitter-widget-1&amp;lang=en&amp;screen_name=CMap_Broad&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=1458571889836"
//           data-screen-name="CMap_Broad"
//         />
//         <iframe
//           id="twitter-widget-2"
//           scrolling="no"
//           frameBorder="0"
//           allowTransparency="true"
//           className="twitter-follow-button twitter-follow-button-rendered"
//           title="Twitter Follow Button"
//           src="http://platform.twitter.com/widgets/follow_button.b9740740e0bcf9b0657c5b11bd4388da.en.html#dnt=false&amp;id=twitter-widget-2&amp;lang=en&amp;screen_name=NeuroLINCS&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=145857188987"
//           data-screen-name="NeuroLINCS"
//         />
//       </div>
//     </div>
//   </div>
// </div>
