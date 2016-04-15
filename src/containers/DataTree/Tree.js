import React, { PropTypes, Component } from 'react';

import styles from './DataTree.scss';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.defaultCollapsed,
    };
  }

  handleClick = (...args) => {
    this.setState({ collapsed: !this.state.collapsed });
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  }

  render() {
    const {
      collapsed = this.state.collapsed,
      className = '',
      itemClassName = '',
      nodeLabel,
      children,
      ...rest,
    } = this.props;

    let arrowClassName = styles['tree-view-arrow'];
    let containerClassName = styles['tree-view-children'];
    if (collapsed) {
      arrowClassName += ` ${styles['tree-view-arrow-collapsed']}`;
      containerClassName += ` ${styles['tree-view-children-collapsed']}`;
    }

    const arrow = (
      <div
        {...rest}
        className={`${className} ${arrowClassName}`}
        onClick={this.handleClick}
      />
    );

    const hasChildren = !!children && children.length;

    return (
      <div className={styles['tree-view']}>
        <div className={`${styles['tree-view-item']} ${itemClassName}`}>
          <div>
            {arrow}
            {nodeLabel}
          </div>
          {
            hasChildren
            ? <span className={styles.count}>{children.length}</span>
            : <i className="fa fa-circle-o-notch fa-spin" />
          }
        </div>
        <div className={containerClassName}>
          {children}
        </div>
      </div>
    );
  }
}

Tree.propTypes = {
  collapsed: PropTypes.bool,
  defaultCollapsed: PropTypes.bool,
  nodeLabel: PropTypes.node.isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
};
