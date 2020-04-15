/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import DarkMode from './DarkMode'
import {NavLink,Link}  from 'react-router-dom'
import logo from '../assets/img/covid_19.svg'
import '../assets/styles/css/NavBarStyle.css'
import { GoMarkGithub as GithubIcon } from "react-icons/go"
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa"


const SocialNavItem = ({ href, title, children }) => (
  <a href={href} title={title} className="css_icon" sx={{color: 'socialLink'}}>
    {children} 
  </a>
)
const NavItem = ({ linkTo, children}) => (  
  <li className="css_nav_item" >
    <Link to={linkTo} className="css_nav_item_a" sx={{color:'link'}}>
      {children}
    </Link>
  </li>
)

export default function Header() {
  return (
    <>
      <header sx={{ bg: 'background', borderBottomStyle:`solid`, borderBottomColor:'borderNavbar',borderBottomWidth:'1px'}} className="navbar_css"> 
        <div className="div_navigation">
          <Link to="/" className="css_link_img">
            <img src={logo} className="css_logo" />
            <span sx={{fontWeight:'bold',color:'text'}}>Covid19</span>
          </Link>
          <nav className="nav_navigation">
            <ul className="css_list">
              <NavItem linkTo={'/about'}>Datos Mundiales</NavItem>
              <NavItem linkTo={'/coide-source'}>Datos Paises</NavItem>
              <NavItem linkTo={'/prevencion'}>Datos Regiones</NavItem>
            </ul>
          </nav>
          <div className="css_icons">
            <SocialNavItem href="https://github.com/Covid19-Peru/Covid19-Peru" title="GitHub" >
              <GithubIcon />
            </SocialNavItem>
            <SocialNavItem href="https://twitter.com/Minsa_Peru?ref_src=twsrc%5Etfw" title="Twitter">
              <TwitterIcon />
            </SocialNavItem>
            <DarkMode />
          </div>
        </div>
      </header>
    </>
  )
}