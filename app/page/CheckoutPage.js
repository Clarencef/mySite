import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Overlay from '../components/Overlay';
import Card from '../components/Card/Card';
import ImagePreview from '../components/ImagePreview/ImagePreview';
import Checkout from '../components/Checkout/Checkout';
import OrderSummary from '../components/Checkout/OrderSummary';
import Payment from '../components/Checkout/Payment';
import DateRangePickerWrapper from '../components/Checkout/DateRangePickerWrapper';
import checkoutCSS from '../style/Checkout.scss';

export default class CheckoutPage extends Component {
  constructor () {
    super();
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <div className="checkout_container">
        <Overlay
          overlayImg = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg"
          />
        
        <Card>
          <DateRangePickerWrapper/>
          <ImagePreview />
          <Checkout>
            <OrderSummary />
            <Payment />
          </Checkout>
        </Card>
      </div>
    );
  }
}


