import React,{ Component } from 'react';


class Checkout extends Component {
  render () {
    return (
      <div className="checkoutInfo_container">
        {this.props.children}
      </div>
    );
  }
}

export default Checkout;