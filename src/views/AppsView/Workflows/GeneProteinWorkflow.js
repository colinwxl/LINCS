import React, { Component } from 'react';
import extend from 'extend';

import styles from './Workflow.scss';
import PageBanner from 'components/PageBanner';

const lcEngineFieldMap = {
  cellinfo: 'cell_id',
  geneinfo: 'pr_gene_symbol',
  pertinfo: 'pert_iname',
};

export default class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lincsCloudQ: {
        engine: 'cell_id',
        term: '',
      },
    };
  }

  _handleEngineChanged = (e) => {
    // Duplicate lincsCloudQ currently in state
    const lincsCloudQ = extend(true, {}, this.state.lincsCloudQ);
    // Set new engine
    lincsCloudQ.engine = e.target.value;
    // Update state
    this.setState({ lincsCloudQ });
  }

  _handleTermChanged = (e) => {
    // Duplicate lincsCloudQ currently in state
    const lincsCloudQ = extend(true, {}, this.state.lincsCloudQ);
    // Set new term
    lincsCloudQ.term = e.target.value;
    // Update state
    this.setState({ lincsCloudQ });
  }

  _handleLQSubmit = (e) => {
    e.preventDefault();
    const base = 'http://api.lincscloud.org/a2/';
    const key = 'lincsdemo';
    const { engine, term } = this.state.lincsCloudQ;
    const field = lcEngineFieldMap[engine];

    if (window) {
      window.open(`${base}${engine}?q={"${field}":"${term}"}&user_key=${key}`, '_blank');
    }
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <PageBanner
          title="LINCS Workflow"
          subTitle="Finding knowledge about a specific gene or protein"
        />
        <div className="container">
          <div className="row">
            <div className={`col-xl-9 ${styles.workflow}`}>
              <p>
                The BD2K-LINCS DCIC is systematically collecting knowledge about the
                properties of genes and proteins from online available omics resources
                such as ENCODE, GTEx, TCGA, LINCS and many more. This accumulating
                knowledge is served on a web portal called the Harmonizome. You can
                find novel and known information about a gene or a protein by typing
                the name in the Harmonizome search bar available below (Note: you will
                be brought to the <a href="http://amp.pharm.mssm.edu/Harmonizome" target="_blank">
                Harmonizome web page</a>):
              </p>
              <div className={styles.harmonizome}>
                <img
                  src="/LINCS/files/harmonizome-logo-lg.png"
                  alt="Harmonizome Logo"
                />
                <h1>Harmonizome</h1>
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
                    style={{ backgroundImage: `url(${require('./arrow-down.png')})` }}
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
                about these experiments type your gene of interest below:
              </p>
              <p>
                The BD2K-LINCS DCIC, through a crowdsourcing effort, also collected data
                from gene perturbations followed by expressions from GEO and generated
                expression signatures from this data. You can check if your gene of
                interest was processed by this effort by typing it here:
              </p>
              <div className={styles.lincscloud}>
                <img
                  src="/LINCS/files/lincscloud-logo.png"
                  alt="Lincscloud Logo"
                />
                <form
                  acceptCharset="utf-8"
                  className="form-horizontal"
                  onSubmit={this._handleLQSubmit}
                >
                  <select
                    id="engine"
                    className="form-control"
                    style={{ backgroundImage: `url(${require('./arrow-down.png')})` }}
                    onChange={this._handleEngineChanged}
                    value={this.state.lincsCloudQ.engine}
                  >
                    <option value="cellinfo">Cell lines</option>
                    <option value="geneinfo">Genes</option>
                    <option value="pertinfo">Perturbations</option>
                  </select>
                  <div className={`${styles.submit} input-group-btn`}>
                    <button type="submit" className="btn btn-default">
                      <span className="fa fa-search" />
                    </button>
                  </div>
                  <div className={styles.input}>
                    <label htmlFor="lq" className="sr-only">Search</label>
                    <span className={styles['input-wrap']}>
                      <input
                        id="lq"
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        spellCheck="false"
                        dir="auto"
                        value={this.state.lincsCloudQ.term}
                        onChange={this._handleTermChanged}
                      />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
