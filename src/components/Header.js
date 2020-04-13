import React from 'react';
import ColorMode from './ColorMode'
import {NavLink,Link}  from 'react-router-dom'
import logo from '../assets/img/coronavirus192.png'
import logoInverted from '../assets/img/coronavirus192.png'
import { GoMarkGithub as GithubIcon } from "react-icons/go"
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa"

export default function Header() {
  return (
    <>
      <header>
        <ColorMode></ColorMode>
      </header>
    </>
  )
}