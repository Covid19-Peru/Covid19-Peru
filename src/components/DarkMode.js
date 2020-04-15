/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react';
import { useColorMode } from 'theme-ui'
import { GiMoon as Luna } from "react-icons/gi";
import { FaSun as Sol } from "react-icons/fa";
export default function ColorMode() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
        <a href="#"onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')}} sx={{color: 'socialLink'}}>
          {colorMode === 'default' ? <Luna/> : <Sol/>}
        </a>
    </>
  )
}