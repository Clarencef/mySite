import React, { Component } from 'react';
import './style/normalize.css';
import './style/style.scss';

import Header from './components/Header/Header';

class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="main_container">
            {this.props.children}
          </div>
      </div>
    );
  }
}

export default Main;
