import React, { PropTypes } from 'react';

import styles from './Footer.scss';

export default function FooterDropDown(props) {
  const { title, children, collapsed, onClick } = props;

  let containerClassName = styles['dropdown-children'];
  let iconClassName = 'fa fa-chevron-up';
  if (collapsed) {
    containerClassName += ` ${styles['dropdown-children-collapsed']}`;
    iconClassName = 'fa fa-chevron-down';
  }

  return (
    <div className="col-xs-12 hidden-lg-up">
      <div className={styles.dropdown}>
        <h5 className={styles['dropdown-target']} onClick={onClick}>
          {title} <i className={iconClassName} />
        </h5>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
    </div>
  );
}

FooterDropDown.propTypes = {
  title: PropTypes.string,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
};
