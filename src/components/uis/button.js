import React from "react"
import styled from "styled-components"

// Components
import colors from "../../utils/colors"

/**
 * Style
 */
const ButtonStyled = styled.a`
  color: #fff;

  &.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      text-decoration: none;
    }
  }

  &.btn-primary {
    background-color: ${colors.primary.dark};

    &:hover {
      background-color: ${colors.primary.light};
      color: ${colors.primary.dark};
    }
  }

  &.btn-outline {
    border-left: 2px;
    border-right: 2px;
    border-top: 2px;
    border-bottom: 2px;
    border-style: solid;

    &.btn-outline-primary {
      border-color: ${colors.primary.dark};
      color: ${colors.primary.dark};

      &:hover {
        background-color: ${colors.primary.dark};
        color: #fff;
      }
    }
  }
`

/**
 * Component
 */
const Button = ({ link, className, children }) => {
  return (
    <ButtonStyled href={link} className={className}>
      {children}
    </ButtonStyled>
  )
}

export default Button
