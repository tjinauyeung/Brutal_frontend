import React, { Component } from 'react';
import { Link } from 'react-router';
import withScroll from '../Scroll';
const logo = require('../../assets/images/logo.png');

@withScroll
class Header extends Component {
  render() {
    const { scrollPosition } = this.props;

    return (
      <Link to="/">
        <header className="header" id="header">
          <img className="logo" src={logo} />
          <div className="title">
            <span>brutalist</span><br />
            <span>appreciation</span><br />
            <span>society</span>
          </div>
        </header>
        <header
          className={
            scrollPosition > 100
              ? 'header--collapsed slide-in'
              : 'header--collapsed'
          }
        >
          <img className="logo" src={logo} />
          <div className="title">
            <span>brutalist</span><br />
            <span>appreciation</span><br />
            <span>society</span>
          </div>
        </header>
      </Link>
    );
  }
}

export default Header;
