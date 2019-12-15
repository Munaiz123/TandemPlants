import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navItem">
          <Link to="/plants"> Plants</Link>
        </div>
        <div className="navItem"></div>
        <Link to="/calendar"> Calendar</Link>
      </nav>
    );
  }
}
