import React from "react"
import PropTypes from "prop-types"
import "./header.styles.scss"
import Brand from "../brand/brand.component"

const Header = ({ isMenuOpen, setIsMenuOpen, hideTitle }) => {
  return (
    <header>
      <Brand hideTitle={hideTitle} />
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
  hideTitle: PropTypes.bool.isRequired,
}

export default Header
