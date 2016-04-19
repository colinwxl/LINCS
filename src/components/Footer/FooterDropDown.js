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
    const {
      title,
      children,
    } = this.props;

    let containerClassName = styles['dropdown-children'];
    if (this.state.collapsed) {
      containerClassName += ` ${styles['dropdown-children-collapsed']}`;
    }

    return (
      <div className={`col-xs-12 hidden-lg-up ${styles.dropdown}`}>
        <div className={styles.collapse} onClick={this._handleClick}>
          {
            this.state.collapsed
            ? <i className="fa fa-chevron-right" />
            : <i className="fa fa-chevron-down" />
          }
        </div>
        <span>{title}</span>
        <div className={containerClassName}>
          {children}
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
