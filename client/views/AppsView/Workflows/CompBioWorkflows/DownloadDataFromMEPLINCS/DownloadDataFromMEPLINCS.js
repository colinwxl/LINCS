import React, { Component } from 'react';

import styles from '../../Workflow.scss';
import PageNav from 'components/PageNav';
import CodeBlock from 'components/CodeBlock';
import PageBanner from 'components/PageBanner';
import ReactMarkdown from 'react-markdown';
import clMarkdown from 'raw!./mep-cl.md';
import pythonMarkdown from 'raw!./mep-python.md';
import rMarkdown from 'raw!./mep-r.md';
import previousMarkdown from 'raw!./mep-previous.md';

export default class Workflow extends Component {

  static subTitle = 'Download data release from MEP-LINCS'
  static path = 'download-most-recent-data-from-mep-lincs'

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
              mainPage="Computational Biologist Workflow"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['sm-profiled']}`}>

              <h3>Installing Synapse Client</h3>
              <p>
                If the Synapse client has already been installed on your machine,
                you can skip this section and continue to the sections below. To
                install the Synapse client, please follow the section titled
                "Installing Synapse Clients" on the&nbsp;
                <a href="http://docs.synapse.org/articles/getting_started.html" target="_blank">
                  Getting Started
                </a> page.
              </p>

              <h3>Downloading from current data release</h3>
              <p>
                The data from a release can be downloaded using one of the Synapse clients
                (R, Python,&nbsp;
                <a href="http://docs.synapse.org/python/CommandLineClient.html" target="_blank">
                  command line
                </a>, or Java). All files are annotated and queries can
                be performed to find those that are desired. For example, to get the Level 4
                files for the current release, the following code snippets can be used:
              </p>
              <h5>Command Line</h5>
              <ReactMarkdown
                source={clMarkdown}
                renderers={
                  Object.assign({}, ReactMarkdown.renderers, { CodeBlock })}
              />
              <h5>Python</h5>
              <ReactMarkdown
                source={pythonMarkdown}
                renderers={
                  Object.assign({}, ReactMarkdown.renderers, { CodeBlock })}
              />
              <h5>R</h5>
              <ReactMarkdown
                source={rMarkdown}
                renderers={
                  Object.assign({}, ReactMarkdown.renderers, { CodeBlock })}
              />
              <br />
              <h3>Downloading from a previous data release</h3>
              <p>
                To download data for a specific previous release, use the file manifest table
                for the release desired. You can download all data, or filter for specific
                files based on annotations. For example, the following Python code will
                download all Level 4 data from the 09-Mar-2016 release, using the&nbsp;
                <a href="https://www.synapse.org/#!Synapse:syn5715419/tables/query/eyJsaW1pdCI6MjUsICJzcWwiOiJTRUxFQ1QgKiBGUk9NIHN5bjU3MTU0MTkgV0hFUkUgTGV2ZWw9NCIsICJpc0NvbnNpc3RlbnQiOnRydWUsICJvZmZzZXQiOjB9" target="_blank">
                  file manifest table (syn5691738)
                </a>:
                <br />
                <br />
                <ReactMarkdown
                  source={previousMarkdown}
                  renderers={
                    Object.assign({}, ReactMarkdown.renderers, { CodeBlock })}
                />
              </p>
              <br />
              <p>
                For more information on how to use the Synapse clients for downloading
                data, see the Synapse&nbsp;
                <a href="http://docs.synapse.org/articles/downloading_data.html" target="_blank">
                  user guide for downloading data</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
