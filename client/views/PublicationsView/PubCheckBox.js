import React, { PropTypes, Component } from 'react';

export default class PubCheckBox extends Component {
  onRadioClicked = (e) => {
    this.props.onChange(this.props.name, e.target.checked);
  }

  render() {
    return (
      <label style={{ width: '100%' }}>
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.onRadioClicked}
        />
        {` ${this.props.label}`}
      </label>
    );
  }
}

PubCheckBox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
