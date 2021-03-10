import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'

import Logo from "../images/vhbbblogo2.png"

const Header = ({ siteTitle }) => (
<div className="header">
    <Menu width={ 280 }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="episodes" className="menu-item" href="/episodes">Episodes</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
    <div className="logo--container">
    <Link to="/">
        <img className="logo--container" src={Logo} alt="Van Hemmo & The Babbling Bell Brother‪s‬" />
    </Link>
  </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header