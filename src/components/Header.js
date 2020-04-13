/** @jsx jsx */
import React from 'react';
import {
  jsx,
  Label,
  Input,
  Button,
} from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { ThemeProvider, Styled } from 'theme-ui'
import { useThemeUI } from 'theme-ui'
import { Global, css } from '@emotion/core'
//import theme from '../assets/styles/temas/theme'
import {NavLink,Link}  from 'react-router-dom'
import logo from '../assets/img/coronavirus192.png'
import logoInverted from '../assets/img/coronavirus192.png'
import { GoMarkGithub as GithubIcon } from "react-icons/go"
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa"

export default function Header(  ) {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
      <header>
        <button onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')} }>
          Cambio  {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
      </header>
    </>
  )
  
}