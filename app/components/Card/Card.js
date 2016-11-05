import React, { Component } from 'react';

export default class Card extends Component {
  render () {
    return (
      <div className="checkout_Card">
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {

};

Card.defaultProps = {

};
