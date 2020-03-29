import React from 'react';
import {NavLink}  from 'react-router-dom'
import Awebo from'./../assets/coronavirus192.png'


const Navbar = () => {
  return (
      <header>

        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
          <img className="Awebo" alt="" />
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
          </div>
        </nav>
      
        
      </header>
  )
}
export default Navbar
