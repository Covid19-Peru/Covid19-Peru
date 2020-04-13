/** @jsx jsx */
import React from 'react';
import {
  jsx,
  Box,
  Label,
  Input,
  Button,
} from 'theme-ui'
import { useColorMode } from 'theme-ui'
import { ThemeProvider, Styled } from 'theme-ui'
import theme from '../assets/styles/temas/theme'
import {NavLink,Link}  from 'react-router-dom'
import logo from '../assets/img/coronavirus192.png'
import logoInverted from '../assets/img/coronavirus192.png'
import { GoMarkGithub as GithubIcon } from "react-icons/go"
import {
  FaTwitter as TwitterIcon,
  FaDiscord as DiscordIcon,
} from "react-icons/fa"
import { createGlobalStyle } from 'styled-components'

export default function Color() {
  alert("xd")
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}