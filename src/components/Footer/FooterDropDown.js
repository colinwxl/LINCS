import React, { PropTypes, Component } from 'react';

import styles from './Footer.scss';

export default class FooterDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  _handleClick = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    const { title, children } = this.props;
    const { collapsed } = this.state;

    let containerClassName = styles['dropdown-children'];
    let iconClassName = 'fa fa-chevron-up';
    if (collapsed) {
      containerClassName += ` ${styles['dropdown-children-collapsed']}`;
      iconClassName = 'fa fa-chevron-down';
    }

    return (
      <div className="col-xs-12 hidden-lg-up">
        <div className={styles.dropdown}>
          <h5 className={styles['dropdown-target']} onClick={this._handleClick}>
            {title} <i className={iconClassName} />
          </h5>
          <div className={containerClassName}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

FooterDropDown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
};
