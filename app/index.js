import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import 'font-awesome/css/font-awesome.css';

import Todos from './todos';
import Main from './main';
import CheckoutPage from './page/CheckoutPage';
import FormPage from './page/FormPage';


import './style/index.scss';

const Home = () => {
  return <h1>Hi!!!!!!!</h1>;
};

render(
  <Router history={hashHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
      <Route path="/todos" component={Todos} />
      <Route path="/FormPage" component={FormPage} />
      <Route path="/CheckoutPage" component={CheckoutPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);

