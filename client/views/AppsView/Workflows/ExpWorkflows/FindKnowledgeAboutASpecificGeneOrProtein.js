import React, { Component } from 'react';
import { Link } from 'react-router';
import extend from 'extend';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';

// Images
import arrowDownImg from '../images/arrow-down.png';
import creedsLogoImg from '../images/creeds-logo.png';

const lcEngineFieldMap = {
  geneinfo: 'pr_gene_symbol',
  pertinfo: 'pert_iname',
};

export default class Workflow extends Component {

  static subTitle = 'Find knowledge about a specific gene or protein'
  static path = 'find-knowledge-about-a-specific-gene-or-protein'

  constructor(props) {
    super(props);
    this.state = {
      lincsCloudQ: {
        engine: 'geneinfo',
        term: '',
      },
      creedsQ: '',
    };
  }

  handleEngineChanged = (e) => {
    // Duplicate lincsCloudQ currently in state
    const lincsCloudQ = extend(true, {}, this.state.lincsCloudQ);
    // Set new engine
    lincsCloudQ.engine = e.target.value;
    // Update state
    this.setState({ lincsCloudQ });
  }

  handleTermChanged = (e) => {
    // Duplicate lincsCloudQ currently in state
    const lincsCloudQ = extend(true, {}, this.state.lincsCloudQ);
    // Set new term
    lincsCloudQ.term = e.target.value;
    // Update state
    this.setState({ lincsCloudQ });
  }

  handleLQSubmit = (e) => {
    e.preventDefault();
    const base = 'http://api.lincscloud.org/a2/';
    const key = 'lincsdemo';
    const { engine, term } = this.state.lincsCloudQ;
    const field = lcEngineFieldMap[engine];
    if (window) {
      window.open(
        `${base}${engine}?q={"${field}":"${term.toUpperCase()}"}&user_key=${key}`, '_blank'
      );
    }
  }

  handleCreedsQChanged = (e) => {
    this.setState({ creedsQ: e.target.value });
  }

  handleCreedsSubmit = (e) => {
    e.preventDefault();
    const { creedsQ } = this.state;

    if (window) {
      window.open(`http://amp.pharm.mssm.edu/CREEDS/#similarity/${creedsQ}`, '_blank');
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle={this.constructor.subTitle}
        />
        <div className="container">
          <div className="row">
            <PageNav
              mainPage="Experimentalist Workflows"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow}`}>
              <p>
                The BD2K-LINCS DCIC is systematically collecting knowledge about the
                properties of genes and proteins from online available omics resources
                such as <a href="https://genome.ucsc.edu/ENCODE/" target="_blank">
                ENCODE</a>, <a href="http://www.gtexportal.org/home/" target="_blank">
                GTEx</a>, <a href="http://cancergenome.nih.gov/" target="_blank">
                TCGA</a>, <Link to="/">LINCS</Link> and many more. This accumulating
                knowledge is served on a web portal called
                the&nbsp;
                <a
                  href="http://amp.pharm.mssm.edu/Harmonizome/"
                  target="_blank"
                >
                  Harmonizome
                </a>. You can find novel and
                known information about a gene or a protein by typing the name in the
                Harmonizome search bar available below:
              </p>
              <div className={styles.harmonizome}>
                <a
                  href="http://amp.pharm.mssm.edu/Harmonizome/"
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                >
                  <img
                    src="/LINCS/files/tools_logos/harmonizome-logo-lg.png"
                    alt="Harmonizome Logo"
                  />
                  <h1>Harmonizome</h1>
                </a>
                <form
                  acceptCharset="utf-8"
                  className="form-horizontal"
                  action="http://amp.pharm.mssm.edu/Harmonizome/search"
                  method="GET"
                  target="_blank"
                >
                  <select
                    className="form-control"
                    name="t"
                    style={{ backgroundImage: `url(${arrowDownImg})` }}
                  >
                    <option value="all">All</option>
                    <option value="gene">Genes</option>
                    <option value="geneSet">Gene Sets</option>
                    <option value="dataset">Datasets</option>
                  </select>
                  <div className={`${styles.submit} input-group-btn`}>
                    <button type="submit" className="btn btn-default">
                      <span className="fa fa-search" />
                    </button>
                  </div>
                  <div className={styles.input}>
                    <label htmlFor="q" className="sr-only">Search</label>
                    <span className={styles['input-wrap']}>
                      <input
                        type="text"
                        className="form-control"
                        name="q"
                        autoComplete="off"
                        spellCheck="false"
                        dir="auto"
                      />
                    </span>
                  </div>
                </form>
              </div>
              <p>
                LINCS also contains data about the changes in mRNA expression after
                knocking down or over-expressing individual genes. To find information
                about these experiments, please register for an account at&nbsp;
                <a href="http://clue.io" target="_blank">
                  clue.io
                </a> and use the search engine on the homepage for any gene or
                compound of interest.
              </p>
              <div className={styles.lincscloud}>
                <a
                  href="https://clue.io"
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                >
                  <img
                    src="/LINCS/files/tools_logos/cmap.png"
                    alt="Lincscloud Logo"
                  />
                </a>
              </div>
              <div className={styles.creeds}>
                <p>
                  The BD2K-LINCS DCIC, through a crowdsourcing effort, also collected data from
                  gene perturbation followed by expression from GEO, and generated expression
                  signatures from this data. You can check if your gene of interest was
                  processed by this effort by typing it here:
                </p>
                <a
                  href="http://amp.pharm.mssm.edu/creeds/"
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                >
                  <img src={creedsLogoImg} alt="CREEDS Logo" />
                </a>
                <h4>Search signatures by term</h4>
                <p>
                  Examples: <a href="http://amp.pharm.mssm.edu/CREEDS/#similarity/TP53" target="_blank">
                  TP53</a>, <a href="http://amp.pharm.mssm.edu/CREEDS/#similarity/Breast cancer" target="_blank">
                  Breast cancer</a>, <a href="http://amp.pharm.mssm.edu/CREEDS/#similarity/Imatinib" target="_blank">
                  Imatinib</a>
                </p>
                <form
                  acceptCharset="utf-8"
                  className="form-horizontal"
                  onSubmit={this.handleCreedsSubmit}
                >
                  <div className="input-group">
                    <input
                      id="creeds"
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      spellCheck="false"
                      dir="auto"
                      value={this.state.creedsQ}
                      onChange={this.handleCreedsQChanged}
                    />
                    <span className="input-group-btn">
                      <button className={`btn btn-info ${styles['creeds-btn']}`} type="submit">
                        Search by term
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              {
                // <div className={styles.lincscloud}>
                //   <img
                //     src="/LINCS/files/tools_logos/lincscloud-logo.png"
                //     alt="Lincscloud Logo"
                //   />
                //   <form
                //     acceptCharset="utf-8"
                //     className="form-horizontal"
                //     onSubmit={this.handleLQSubmit}
                //   >
                //     <select
                //       id="engine"
                //       className="form-control"
                //       style={{ backgroundImage: `url(${arrowDownImg})` }}
                //       onChange={this.handleEngineChanged}
                //       value={this.state.lincsCloudQ.engine}
                //     >
                //       <option value="geneinfo">Genes</option>
                //       <option value="pertinfo">Perturbations</option>
                //     </select>
                //     <div className={`${styles.submit} input-group-btn`}>
                //       <button type="submit" className="btn btn-default">
                //         <span className="fa fa-search" />
                //       </button>
                //     </div>
                //     <div className={styles.input}>
                //       <label htmlFor="lq" className="sr-only">Search</label>
                //       <span className={styles['input-wrap']}>
                //         <input
                //           id="lq"
                //           type="text"
                //           className="form-control"
                //           autoComplete="off"
                //           spellCheck="false"
                //           dir="auto"
                //           value={this.state.lincsCloudQ.term}
                //           onChange={this.handleTermChanged}
                //         />
                //       </span>
                //     </div>
                //   </form>
                // </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
