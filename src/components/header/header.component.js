import React from "react"
import PropTypes from "prop-types"
import logo from "./logo-reggie-pangilinan.svg"
import "./header.styles.scss"
import { Link } from "gatsby"

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header>
      <div></div>
      <Link to="/">
        <img src={logo} />
      </Link>

      <div
        className="header-title"
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        Software Developer.
      </div>

      {isMenuOpen ? (
        <div
          className="header-menu"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-delay="100"
          data-sal-easing="ease"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          Close
        </div>
      ) : (
        <div
          className="header-menu"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-delay="100"
          data-sal-easing="ease"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          Menu
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
}

export default Header
