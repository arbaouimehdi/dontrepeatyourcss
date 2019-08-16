import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Components
import Nav from "./nav"

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <Nav />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
