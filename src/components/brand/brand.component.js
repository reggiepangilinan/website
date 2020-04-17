import React from "react"
import logo from "./logo-reggie-pangilinan.svg"
import "./brand.styles.scss"
import { Link } from "gatsby"

const Brand = () => (
  <div className="brand">
    <Link to="/">
      <img src={logo} alt="Reggie Pangilinan." />
    </Link>
    <div className="brand-title">Software Developer.</div>
  </div>
)
export default Brand
