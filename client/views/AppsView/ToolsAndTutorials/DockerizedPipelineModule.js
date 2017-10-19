import React, { Component } from 'react';
import styles from '../AppsView.scss';

import Pipeline from 'components/Pipeline';

export default class DockerizedPipelineModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'Shuffled',
    };
  }

  render() {
    return (

      <div className="row">
        <h3
          style={{ paddingLeft: '0.9375rem' }}
          className={styles['section-title']}
        >
          Dockerized Pipelines
        </h3>
        <br />
      {
        <div className="col-xs-12 col-md-12 col-xl-6">
          <Pipeline
            name="MEP LINCS (MicroEnvironment MicroArray)"
            title="Docker container for using MEMA R package in RStudio"
            description="The processing pipeline implemented in the vignettes
            starts with Level 1 data and produces Level 2, Level 3 and Level 4
            along with interactive visualization of data."
            centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/mep-lincs"
            githubUrl="https://github.com/uc-bd2k/mema"
            dockerHubUrl="https://hub.docker.com/r/ucbd2k/mema/"
            toolTipItems=""
          />
        </div>
      }
      {
        <div className="col-xs-12 col-md-12 col-xl-6">
          <Pipeline
            name="LINCS PCCSE (P100 and GCP)"
            title="Docker container for running PCCSE processing pipelines in RStudio"
            description="The processing pipeline starts with Level 2 data (
            raw numerical data, RPT) and ultimately produces Level 4 data
            (differential quantification, DIFF)."
            centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/lincs-pccse"
            githubUrl="https://github.com/uc-bd2k/pccse"
            dockerHubUrl="https://hub.docker.com/r/ucbd2k/pccse/"
            toolTipItems=""
          />
        </div>
      }
      {
        <div className="col-xs-12 col-md-12 col-xl-6">
          <Pipeline
            name="NeuroLINCS (RNA-seq)"
            title="Docker container for generating NeuroLINCS RNA-seq signature (Step-2) in RStudio"
            description="The platform is provided in the form of an RStudio
            instance. The analysis scripts within the the container create
            NeuroLINCS RNA-seq level 4 signature data (differential expression
            profile) from level 3 (raw counts) data."
            centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/neurolincs"
            githubUrl="https://github.com/uc-bd2k/Nl_rnaseq"
            dockerHubUrl="https://hub.docker.com/r/ucbd2k/nl_rnaseq/"
            toolTipItems=""
          />
        </div>
      }
      {
        <div className="col-xs-12 col-md-12 col-xl-6">
          <Pipeline
            name="HMS LINCS (Cell-Count)"
            title="Docker container for generating Growth-rate inhibition (GR)
            values and fitted curve metrics in RStudio"
            description="The processing pipeline implemented in a form of an R
            script starts with Level 2 data (cell counts) and create Level 3
            data (average cell counts) and Level 4 data (dose response curve
            metrics)."
            centerUrl="http://www.lincsproject.org/LINCS/centers/data-and-signature-generating-centers/hms-lincs"
            githubUrl="https://github.com/uc-bd2k/hms-cellcount/"
            dockerHubUrl="https://hub.docker.com/r/ucbd2k/hms-cellcount/"
            toolTipItems=""
          />
        </div>
      }
      </div>
    );
  }
}
