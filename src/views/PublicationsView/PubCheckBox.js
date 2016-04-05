import React, { PropTypes, Component } from 'react';

export default class PubCheckBox extends Component {
  _onRadioClicked = (e) => {
    this.props.onChange(this.props.name, e.target.checked);
  }

  render() {
    return (
      <label style={{ width: '100%' }}>
        <input
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this._onRadioClicked}
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
