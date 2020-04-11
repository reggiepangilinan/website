import React from "react"
import "./menu.styles.scss"
import { Link } from "gatsby"
import ig from "./icon-ig.svg"
import linkedin from "./icon-linkedin.svg"
import github from "./icon-github.svg"

const Menu = () => {
  return (
    <nav>
      <ul
        data-sal="slide-up"
        data-sal-duration="2000"
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

export default Menu
