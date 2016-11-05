import React,{ Component } from 'react';

class OrderSummary extends Component {
  render () {
    return (
      <div className="checkout_summary">
        <h2 className="checkout_summary_title">Order Summary</h2>
        <div className="checkout_summary_detail">
        </div>
        <div className="checkout_summary_total">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }
}
export default OrderSummary;