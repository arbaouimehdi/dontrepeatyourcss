import React from "react"
import styled from "styled-components"

// Utils
import colors from "../../utils/colors"

// Components
import Button from "../uis/button"

/**
 * Style
 */
const NavStyled = styled.nav`
  margin-bottom: 50px;

  a {
    color: ${colors.primary.dark};
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    li {
      margin-left: 45px;
    }
  }
`

/**
 * Component
 */
const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#course-goal">Course Goal</a>
        </li>
        <li>
          <a href="#lessons-list">Lessons</a>
        </li>
        <li>
          <a href="#faq">Faq</a>
        </li>
        <li>
          <Button
            link="https://www.udemy.com"
            className="btn btn-outline btn-outline-primary"
          >
            Start Learning Now
          </Button>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav
