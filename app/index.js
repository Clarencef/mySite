import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory} from 'react-router';

import Todos from './todos';
import FormPage from './page/FormPage';
import Sum from './components/sum';

import 'font-awesome/css/font-awesome.css';
import './style/normalize.css';
import './style/index.scss'; 

class Home extends Component {
  render () {
    return (
      <h1>Hi</h1>
    );
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/todos" component={Todos} />
    <Route path="/FormPage" component ={FormPage} /> 
  </Router>,
  document.getElementById('app')
);

