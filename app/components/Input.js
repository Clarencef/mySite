import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className="input_container">
        <input
          type={this.props.type}
          id={this.props.id}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          autoComplete="off"
          required
          aria-required="true"
        />
        <label htmlFor={this.props.id}></label>
      </div>
    );
  }
}
