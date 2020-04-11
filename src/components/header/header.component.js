import React from "react"
import logo from "./logo-reggie-pangilinan.svg"
import "./header.styles.scss"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} />
      </Link>

      <div className="header-title">Software Developer.</div>
    </header>
  )
}

export default Header
