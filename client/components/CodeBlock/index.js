import React, { Component } from 'react';
import PropTypes from 'prop-types';
const hljs = window.hljs;

export default class CodeBlock extends Component {
  componentDidMount = () => {
    this.highlightCode();
  }

  componentDidUpdate = () => {
    this.highlightCode();
  }

  highlightCode = () => {
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    return (
      <pre>
        <code className={this.props.language} ref="code">
          {this.props.literal}
        </code>
      </pre>
    );
  }
}

CodeBlock.propTypes = {
  literal: PropTypes.string,
  language: PropTypes.string,
};
