import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <div className="header">
      <div className="title">
        <h1>
          <span>Clarusway</span>
          Web Design
        </h1>
      </div>

      <div className="link">
        <div id="home">
          <li className="link1 link2" >
            <Link to="/" className="link1">HOME</Link>
          </li>
        </div>
        <div>
          <li className="link1 link3" >
            <Link className="link1" to="/about">ABOUT</Link>
          </li>
        </div>
        <div>
          <li className="link1 link4">
            <Link className="link1" to="/services"> SERVICES </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
