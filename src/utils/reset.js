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
  }
`

export const Reset = () => {
  return <GloabalStyle />
}
