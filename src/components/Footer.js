import React from "react";
import "./Footer.css";
import Logo from '../images/clarusway_logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div id="fot">
        <p id="foot">
          Clarusway Web Design, Copyright © 2021
          <br />
          <a href="http://www.clarusway.com" target="_blank" rel="noreferrer">
            <img src={Logo} alt="Clarusway" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
