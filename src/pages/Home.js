import React from 'react'
import Html from '../images/logo_html.png'
import Css from '../images/logo_css.png'
import Brush from '../images/logo_brush.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div id="language">
        <div className="language1">
          <Link to="/html">  <img src={Html}alt="HTML" /> </Link>
            <br/><br/>
            <h4>HTML5 Markup</h4>
            <br/>
            <p id="htlm1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi quibusdam a totam omnis quo doloremque praesentium saepe voluptatum exercitationem.</p>
        </div>
        <div className="language1">
        <Link to="/css"> <img src={Css} alt="CSS" /></Link>
            <br/><br/>
            <h4>CSS Styling</h4>
            <br/>
            <p id="htlm1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit magnam architecto maxime ipsum natus nesciunt recusandae eum harum! Esse, repellat.</p>
        </div>
        <div className="language1">
        <Link to="/logo">  <img src={Brush} alt="Graphic" /></Link>
            <br/><br/>
            <h4>Grapghing Design</h4>
            <br/>
            <p id="htlm1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum tempora quasi non quia recusandae aspernatur possimus sed iste quo nostrum.</p>
        </div>
    </div>
    )
}

export default Home;
