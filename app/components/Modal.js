import React, { Component } from 'react';

import Input from './Input';
import Button from './Button';

export default class Modal extends Component {
  constructor() {
    super();
    this.state = {
      inputItem: [{
        type: 'text',
        id: 'form_username',
        value: '',
        placeholder: 'Albert Fang',
      }, {
        type: 'email',
        id: 'form_email',
        value: '',
        placeholder: 'Hr00090241@gmail.com',
      }, {
        type: 'password',
        id: 'form_password',
        value: '',
        placeholder: 'password',
      }],
      button: {
        btnText: 'LOG IN',
        btnClass: 'btn',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const newState = this.state.inputItem.map((item, i) => {
      if (item.id === e.target.id) {
        item.value = e.target.value;
      }
      return item;
    });
    this.setState({
      inputItem: newState,
    });
    console.log(newState);
  }

  render() {
    return (
      <div className="modal">
        <form onSubmit={this.props.onSubmit} className="modal_form">
          {this.state.inputItem.map((item, i) => {
            return (
              <Input
                key={i}
                type={item.type}
                id={item.id}
                value={item.value}
                placeholder={item.placeholder}
                onChange={this.handleInputChange}
              />
            );
          })}
          <Button
            BtnSetting={this.state.button}
          />
        </form>
      </div>
    );
  }
}

Modal.propTypes = {
  onSubmit: React.PropTypes.func,
};
