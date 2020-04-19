import React from "react"
import PropTypes from "prop-types"
import "./menu.styles.scss"
import { Link } from "gatsby"
import ig from "./icon-ig.svg"
import linkedin from "./icon-linkedin.svg"
import github from "./icon-github.svg"

const Menu = ({ isMenuOpen }) => {
  return (
    <nav className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
      <ul>
        <li>
          <Link to="/" activeStyle={{ color: "red" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/timeline/">Timeline</Link>
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
          <a href="https://github.com/reggieboyYEAH">
            <img src={github} alt="https://github.com/reggieboyYEAH" />
          </a>
          <a href="https://linkedin.com/in/reggiepangilinan/">
            <img
              src={linkedin}
              alt="https://linkedin.com/in/reggiepangilinan/"
            />
          </a>
          <a href="https://www.instagram.com/reggiepangilinanphotos/">
            <img
              src={ig}
              alt="https://www.instagram.com/reggiepangilinanphotos/"
            />
          </a>
        </div>
        <a href="">Download my CV here</a>
        <small>This website is handcrafted with pride using Gatsby. 💯</small>
      </footer>
    </nav>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
}

export default Menu
