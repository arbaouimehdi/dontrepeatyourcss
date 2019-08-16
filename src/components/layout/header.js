import React from "react"
import styled from "styled-components"

// Components
import Nav from "./nav"
import { HeroIllustration } from "../image"
import Button from "../uis/button"

/**
 * Styled Component
 */
const HeaderStyled = styled.header`
  a {
    text-decoration: none;
    text-transform: uppercase;
  }

  .Hero--cta {
    text-align: center;

    p {
      max-width: 600px;
      margin: 20px auto;
    }
  }
`

/**
 * Component
 */
const Header = () => {
  return (
    <HeaderStyled className="Hero container">
      <Nav />
      <div>
        <HeroIllustration />
        <div className="Hero--cta">
          <p>
            You'll write a more natural syntax, easy to read, and you'll
            prevents the need to rewrite selector multiple times
          </p>
          <Button link="https://udemy.com" className="btn btn-primary">
            Start Learning Now
          </Button>
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header
