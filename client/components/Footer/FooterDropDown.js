import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

export default function FooterDropDown(props) {
  const { title, children, collapsed, onClick } = props;
  const widthClass = props.widthClass || 'col-md-2';

  let containerClassName = styles['dropdown-children'];
  let iconClassName = 'fa fa-chevron-up';
  if (collapsed) {
    containerClassName += ` ${styles['dropdown-children-collapsed']}`;
    iconClassName = 'fa fa-chevron-down';
  }

  return (
    <div>
      <div className={`${widthClass} hidden-md-down`}>
        <h5>{title}</h5>
        {children}
      </div>
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
    </div>
  );
}

FooterDropDown.propTypes = {
  title: PropTypes.string,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  widthClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
};
