import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from '../components/Modal';

import '../style/FormPage.scss';

export default class FormPage extends Component {
  constructor() {
    super();
    this.state = {
      mounted: false,
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  handleBtnClick(e) {
    this.setState({
      mounted: false,
    });
    e.preventDefault();
  }

  render() {
    let child;

    if (this.state.mounted) {
      child = (<Modal onSubmit={this.handleBtnClick} />);
    }

    return (
      <div className="FormPage_container">
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
