import React from "react"
import PropTypes from "prop-types"
import "./menu.styles.scss"
import { Link } from "gatsby"
import ig from "./icon-ig.svg"
import linkedin from "./icon-linkedin.svg"
import github from "./icon-github.svg"

const Menu = ({ isMenuOpen }) => {
  return (
    <nav
      className={isMenuOpen ? "nav-menu-open" : "nav-menu"}
      data-sal="fade"
      data-sal-duration="500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      <ul
        data-sal="slide-up"
        data-sal-duration="100"
        data-sal-delay="50"
        data-sal-easing="ease"
      >
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">Timeline</Link>
        </li>
        <li>
          <Link to="">Projects</Link>
        </li>
        <li>
          <Link to="">Blog</Link>
        </li>
      </ul>

      <footer>
        <div className="social-links-wrapper">
          <Link to="">
            <img src={github} />
          </Link>
          <Link to="">
            <img src={linkedin} />
          </Link>
          <Link to="">
            <img src={ig} />
          </Link>
        </div>
        <Link to="">Download my CV here</Link>
        <small>This website is handcrafted with pride using Gatsby. 💯</small>
      </footer>
    </nav>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Menu
