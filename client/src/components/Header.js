import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <a href="/">Coordinator</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
