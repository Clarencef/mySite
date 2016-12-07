import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';
import 'font-awesome/css/font-awesome.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducers from './reducers';
import Todos from './todos';
import Main from './main';
import HomePage from './page/HomePage';
import CheckoutPage from './page/CheckoutPage';
import FormPage from './page/FormPage';

import './style/index.scss';


// Add the reducer to store on the `routing` key
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

console.log(store.getState());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={HomePage} />
        <Route path="/todos" component={Todos} />
        <Route path="/FormPage" component={FormPage} />
        <Route path="/CheckoutPage" component={CheckoutPage} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('app')
);

