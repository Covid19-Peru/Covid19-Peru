import React from 'react';
import ColorMode from './ColorMode'
import {NavLink}  from 'react-router-dom'
import icono from '../assets/img/coronavirus192.png'
import twitter from '../assets/img/twitter.svg'
import youtube from '../assets/img/youtube.svg';
import facebook from '../assets/img/facebook.svg';
import '../assets/styles/css/NavBarStyle.css'
import '../assets/styles/css/EstilosGenerales.css'

export default function Navbar() {
  return (
      <header>

        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          
          <NavLink className="navbar-brand" to="/">
            <img className = "icono" src = {icono} alt="icono" />
            Covid19
          </NavLink>
          
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">¿Quien lo hizo?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/coide-source">¿Como lo hicieron?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/prevencion">Prevenir el Covid19</NavLink>
              </li>
            </ul>
            <img className="facebook" src={facebook} alt="" />
            <img className="youtube" src={youtube} alt="" />
            <img className="twitter" src={twitter} alt="" />
            <ColorMode/>
          </div>
        </nav>
      
        
      </header>
  )
}