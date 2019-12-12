import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch
} from "react-router-dom";

import Plants from "./Plants";
import Calendar from "./Calendar";

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
