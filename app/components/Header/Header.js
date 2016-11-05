import React, {Component} from 'react';
import { Link } from 'react-router';

import '../../style/Header.scss';

export default class Header extends Component {
  render () {
    return (
      <nav className="header">
        <ul>
          {this.props.links.map((Linkitem,i)=> {
            return (
              <li key = {i}>
                <Link to = {Linkitem.url}>
                  {Linkitem.text}
                </Link>
              </li>
            );
          })
          }
        </ul>
      </nav>
    );
  }
}

Header.propTypes = {

};

Header.defaultProps = {
  links: [
    {
      text: 'main',
      url: '/'
    }, {
      text: 'FormPage',
      url: '/FormPage'
    }, {
      text: 'CheckoutPage',
      url: '/CheckoutPage'
    }, {
      text: 'todo',
      url: '/todos'
    }, {
      text: 'dddd',
      url: '#'
    },
  ],
};

