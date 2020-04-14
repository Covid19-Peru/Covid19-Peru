/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import ColorMode from './ColorMode'
import { useColorMode } from "theme-ui"
import {NavLink,Link}  from 'react-router-dom'
import logo from '../assets/img/covid_19.svg'
import logoInverted from '../assets/img/coronavirus192.png'
import '../assets/styles/css/NavBarStyle.css'
import { GoMarkGithub as GithubIcon } from "react-icons/go"
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa"


const SocialNavItem = ({ href, title, children }) => (
  <a href={href} title={title} className="css_icon">
    {children} 
  </a>
)
const NavItem = ({ linkTo, children, color}) => (  
  <li className="css_nav_item" >
    <Link to={linkTo} className="css_nav_item_a" style={{color:color}}>
      {children}
    </Link>
  </li>
)

export default function Header() {
  const [colorMode] = useColorMode()
  const color_link = colorMode ==='default' ? '#48434f' : 'rgba(255,255,255,0.6)'
  return (
    <>
      <header sx={{ bg: 'background'}} className="navbar_css">
        <div className="div_navigation">
          <Link to="/" className="css_link_img">
            <img src={logo} className="css_logo" />
          </Link>
          <nav className="nav_navigation">
            <ul className="css_list">
              <NavItem linkTo={'/about'} color={color_link}>Datos Mundiales</NavItem>
              <NavItem linkTo={'/coide-source'} color={color_link}>Datos Mundiales</NavItem>
              <NavItem linkTo={'/prevencion'} color={color_link}>Datos Mundiales</NavItem>
            </ul>
          </nav>
          <div className="css_icons">
            <SocialNavItem href="https://github.com/gatsbyjs/gatsby" title="GitHub" >
              <GithubIcon />
            </SocialNavItem>
            <SocialNavItem href="https://twitter.com/gatsbyjs" title="Twitter">
              <TwitterIcon />
            </SocialNavItem>
            <SocialNavItem href="https://gatsby.dev/discord" title="Discord">
              <DiscordIcon />
            </SocialNavItem>
            <ColorMode></ColorMode>
          </div>
        </div>
      </header>
    </>
  )
}