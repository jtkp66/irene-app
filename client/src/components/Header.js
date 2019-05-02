import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="11">
            <a href="/">Admin</a>
          </li>,
          <li key="22">
            <a href="/">Coordinator</a>
          </li>,
          <li key="33">
            <a href="/auth/google">Login</a>
          </li>
        ];
      default:
        return [
          <li key="1" />,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.profileName}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
