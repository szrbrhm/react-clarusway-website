import React from "react";
import "./Navbar.css";

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
          <a className="link1 link2" href="./index.html">
            HOME
          </a>
        </div>
        <div>
          <a className="link1 link3" href="./about.html" target="_blank">
            ABOUT
          </a>
        </div>
        <div>
          <a className="link1 link4" href="./services.html" target="_blank">
            SERVICES
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
