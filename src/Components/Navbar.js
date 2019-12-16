import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import tandem from "../tandem.png";

export default class Nav extends React.Component {
  render() {
    return (
      <div
        style={{
          padding: "35px",
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "flex-start",
          alignItems:'flex-start'
        }}
      >
        <div>
          <img src={tandem} style={{ width: "65%" }} />
        </div>
        <div style={{display:'flex',}}>
          <div className='item'>
            <Link to="/"> Home</Link>
          </div>
          <div className='item'>
            <Link to="/plants"> Plants</Link>
          </div>
          <div className='item'>
            <Link to="/calendar"> Calendar</Link>
          </div>
        </div>
      </div>
    );
  }
}
