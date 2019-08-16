import React from "react"
import { createGlobalStyle } from "styled-components"

// Utils
import { latinFonts } from "./fonts"

const GloabalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    scroll-behavior: smooth;
  }

  html, body {
    min-height: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: ${latinFonts.body};
    color: #5B5D69;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  /* Layout */
  .container {
    max-width: 1188px;
    padding: 1rem 2em;
    margin: auto;
  }
`

export const Reset = () => {
  return <GloabalStyle />
}
