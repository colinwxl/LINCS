import React, { Component } from 'react';

import styles from '../Workflow.scss';
import PageNav from 'components/PageNav';
import PageBanner from 'components/PageBanner';
import lincsMlImg from '../images/lincs-ml.png';

export default class Workflow extends Component {

  static subTitle = 'Find attributes about genes and proteins for machine learning'
  static path = 'find-attributes-about-genes-and-proteins-for-machine-learning'

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
              mainPage="Computational Biologist Workflows"
              subPage={this.constructor.subTitle}
              isWorkflowPage
            />
            <div className={`col-md-9 col-md-pull-3 ${styles.workflow} ${styles['predict-func']}`}>
              <h3>
                DCIC processed datasets ready for machine learning
              </h3>
              <p>
                The BD2K-LINCS DCIC created a resource that contain processed datasets ready
                for machine learning to learn new knowledge about genes and proteins. This
                resource is called
                the <a href="http://amp.pharm.mssm.edu/Harmonizome" target="_blank">Harmonizome</a>.
                The Harmonizome datasets are organized as large feature tables, where the genes
                are the rows and the attributes are the columns. Every attribute (column label)
                is associated with a gene set (rows in the column). For example, a machine
                learning expert can select any gene set from any dataset to represent
                classification labels, and then build a classifier to train and predict
                gene labels from the remaining datasets.
              </p>
              <img src={lincsMlImg} alt="Machine Learning with LINCS" />
              <p>
                The Harmonizome has over one hundred preprocessed datasets ready for machine
                learning. These datasets are free and available for download.
              </p>
              <p>
                For more information on the datasets that are available, and how these were
                processed, you can watch the three lectures the DCIC prepared
                for <a href="https://www.coursera.org/course/bd2klincs" target="_blank">
                their course on Coursera</a>:
              </p>
              <div className={`row ${styles['ha-tutorial']}`}>
                <div className="col-xs-12">
                  <div className="text-xs-center">
                    <h5>The Harmonizome Concept</h5>
                    <iframe
                      src="https://www.youtube.com/embed/yGkIQjeWh9U"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className="text-xs-center">
                    <h5>The Harmonizome Datasets, Part I</h5>
                    <iframe
                      src="https://www.youtube.com/embed/ZyOIQwEh_58"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-md-6">
                  <div className="text-xs-center">
                    <h5>The Harmonizome Datasets, Part II</h5>
                    <iframe
                      src="https://www.youtube.com/embed/GIvMwWTcRcU"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <h3>Workflows</h3>
              <h5>To see all available datasets</h5>
              <ol>
                <li>
                  Visit the <a href="http://amp.pharm.mssm.edu/Harmonizome/download" target="_blank">
                  Harmonizome downloads page</a>
                </li>
                <li>Filter the tables using the search box on the top right corner</li>
                <li>Sort the tables by clicking on the column labels</li>
                <li>Select a dataset by clicking on a dataset name in the second column</li>
              </ol>
              <h5>To find relevant gene sets or attributes based on plaintext queries</h5>
              <ol>
                <li>
                  Visit the <a href="http://amp.pharm.mssm.edu/Harmonizome" target="_blank">
                  Harmonizome home page</a>
                </li>
                <li>Type keyword(s) into the search bar, for example "breast cancer"</li>
                <li>
                  Filter the results by gene sets by clicking the pink button that says
                  "Gene Set" at the top of the page. Search results will look like
                  this:
                  <a
                    href="http://amp.pharm.mssm.edu/Harmonizome/search?q=breast%20cancer&t=geneSet"
                    target="_blank"
                  >http://amp.pharm.mssm.edu/Harmonizome/search?q=breast%20cancer&t=geneSet</a>
                </li>
              </ol>
              <h5>To use the processed data based on your search terms</h5>
              <ol>
                <li>
                  For example, if we selected the following gene
                  set: <a
                    href="http://amp.pharm.mssm.edu/Harmonizome/gene_set/breast+cancer/DISEASES+Curated+Gene-Disease+Assocation+Evidence+Scores"
                    target="_blank"
                  >http://amp.pharm.mssm.edu/Harmonizome/gene_set/breast+cancer/DISEASES+Curated+Gene-Disease+Assocation+Evidence+Scores</a>
                </li>
                <li>
                  To download all the data, first visit the associated dataset page, in this
                  case: <a
                    href="http://amp.pharm.mssm.edu/Harmonizome/dataset/DISEASES+Curated+Gene-Disease+Assocation+Evidence+Scores"
                    target="_blank"
                  >http://amp.pharm.mssm.edu/Harmonizome/dataset/DISEASES+Curated+Gene-Disease+Assocation+Evidence+Scores</a>
                </li>
                <li>
                  Click on one of the links in the "Downloads" section, for
                  example: <a
                    href="http://amp.pharm.mssm.edu/static/hdfs/harmonizome/data/jensendiseasecurated/gene_attribute_matrix.txt.gz"
                    target="_blank"
                  >http://amp.pharm.mssm.edu/static/hdfs/harmonizome/data/jensendiseasecurated/gene_attribute_matrix.txt.gz</a>
                </li>
                <li>Open the file in a text or spreadsheet editor</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
