import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'


const BurgerMenu = ({ siteTitle }) => (
<div>
    <Menu width={ 280 }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="episodes" className="menu-item" href="/episodes">Episodes</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  </div>
)

BurgerMenu.propTypes = {
  siteTitle: PropTypes.string,
}

BurgerMenu.defaultProps = {
  siteTitle: ``,
}

export default BurgerMenu