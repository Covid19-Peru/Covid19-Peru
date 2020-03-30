import React from 'react';
import {NavLink}  from 'react-router-dom'
import Awebo from './../images/coronavirus192.png'
import twitter from './../images/twitter.svg';
import youtube from './../images/youtube.svg';
import './../assets/styles/NavBarStyle.css'

const Navbar = () => {
  return (
      <header>

        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <img className = "Awebo" src = {Awebo} alt="" />
          <NavLink className="navbar-brand" to="/">Covid19</NavLink>
          
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/DatosMundiales">DatosMundiales</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/DatosCountry">DatosCountry</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/DatosRegionesPeru">DatosRegionesPeru</NavLink>
              </li>
            </ul>
            <img className="youtube" src={youtube} alt="" />
            <img className="twitter" src={twitter} alt="" />
          </div>
        </nav>
      
        
      </header>
  )
}
export default Navbar
