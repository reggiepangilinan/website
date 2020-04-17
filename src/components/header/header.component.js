import React from "react"
import PropTypes from "prop-types"
import "./header.styles.scss"
import Brand from "../brand/brand.component"
import { useWindowScroll } from "react-use"
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const { y } = useWindowScroll()

  const lastPanel =
    document.documentElement.offsetHeight -
    document.documentElement.clientHeight -
    75

  const hasScrolledToEnd = y >= lastPanel

  return (
    <header className={hasScrolledToEnd ? "transparent" : ""}>
      <Brand />
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
