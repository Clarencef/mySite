import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.BtnSetting.btnClass}>
        {this.props.BtnSetting.btnText}
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    );
  }
}

Button.propTypes = {
  BtnSetting: React.PropTypes.shape({
    btnText: React.PropTypes.string,
    btnClass: React.PropTypes.string,
  }),
};

