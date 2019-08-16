import React from "react"
import { createGlobalStyle } from "styled-components"

// Utils
import { latinFonts } from "./fonts"
import colors from "./colors"

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
    display: flex;
    margin: 0;
    flex-direction: column;
    overflow: hidden;

    background-color: #fff;
    color: #5B5D69;
    
    font-size: calc(16px + .25vw);
    font-family: ${latinFonts.body};
    font-feature-settings: 'onum' 1;
    font-weight: 400;
  }

  *, ::after, ::before {
    box-sizing: border-box;
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

  p {
    line-height: 1.8em;
  }
  
  /* Layout */
  header.container {
    padding: 1rem 2rem 3rem 2em;
  }
  .container {
    max-width: 1188px;
    padding: 3rem 2em;
    margin: auto;
  }

  /* Titles */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h2 {
    display: block;
    width: 100%;
    margin-bottom: 3rem;
    
    color: ${colors.secondary.dark};
    text-transform: uppercase;
    text-align: center;
  }
`

export const Reset = () => {
  return <GloabalStyle />
}
