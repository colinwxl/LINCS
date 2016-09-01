import React, { PropTypes, Component } from 'react';
import styles from './Toggle.scss';

export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
    this.toggleState = this.toggleState.bind(this);
    this.insideStyles = this.insideStyles.bind(this);
    this.toggleStyles = this.toggleStyles.bind(this);
  }

  toggleState() {
    this.setState({
      toggle: !this.state.toggle,
    });
    this.props.handleSourceChanged();
  }

  insideStyles() {
    if (this.state.toggle) {
      return {
        background: typeof this.props.leftColor !== 'undefined' ? this.props.leftColor : '',
      };
    }
    return {
      background: typeof this.props.rightColor !== 'undefined' ? this.props.rightColor : '',
    };
  }

  toggleStyles() {
    let border;
    if (this.state.toggle) {
      border = typeof this.props.leftColor !== 'undefined' ?
        `solid 1px ${this.props.leftColor}` : '';
    } else {
      border = typeof this.props.rightColor !== 'undefined' ?
				`solid 1px ${this.props.rightColor}` : '';
    }
    return { border };
  }

  render() {
    const classStyle = this.state.toggle ?
    `${styles.inside} ${styles.active}` : `${styles.inside}`;
    return (
      <div className={styles.toggleHolder}>
        <div
          className={`${styles.toggle}`}
          style={this.toggleStyles()}
          onClick={this.toggleState}
        >
          <div className={classStyle} style={this.insideStyles()}></div>
        </div>
      </div>
    );
  }
}

Toggle.propTypes = {
  handleSourceChanged: PropTypes.func,
  leftColor: PropTypes.string,
  rightColor: PropTypes.string,
};
