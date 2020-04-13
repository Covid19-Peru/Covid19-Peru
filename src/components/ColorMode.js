import React from 'react';
import { useColorMode } from 'theme-ui'

export default function ColorMode() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')} }>
          Modo  {colorMode === 'default' ? 'Dark' : 'Light'}
        </button>
    </>
  )
}