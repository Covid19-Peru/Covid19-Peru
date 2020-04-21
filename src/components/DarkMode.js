/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import { useColorMode } from 'theme-ui'
import { GiMoon as Luna } from "react-icons/gi";
import { FaSun as Sol } from "react-icons/fa";

export default function DarkMode(props) {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
        <span role="link" onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')}} sx={{color: 'socialLink',fontSize: '1.25rem',paddingLeft: '0.5rem',paddingRight: '0.5rem'}}>
          {colorMode === 'default' ? <Luna/> : <Sol/>}
        </span>
    </>
  )
}