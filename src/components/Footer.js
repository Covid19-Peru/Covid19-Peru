/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="my-4 pt-2 text-muted text-center text-small">
                <hr sx={{borderBottomStyle:`solid`, borderBottomColor:'borderNavbar',borderBottomWidth:'1px'}}></hr>
                <p className="mb-1">Desarrollado con &hearts; en Javascript</p>
            </footer>
        </>
    )
}