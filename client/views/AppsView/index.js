import React from 'react';

import WorkflowsModule from './WorkflowsModule';
import ToolsModule from './ToolsModule';
import PageBanner from 'components/PageBanner';
import styles from './AppsView.scss';

const sub = 'Tutorials, walkthroughs, and tools to help you be more productive with LINCS datasets';

export default function AppsView() {
  return (
    <div className={styles.wrapper}>
      <PageBanner title="LINCS Workflows & Applications" subTitle={sub} />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            < WorkflowsModule />
            < ToolsModule />
          </div>
        </div>
      </div>
    </div>
  );
}
