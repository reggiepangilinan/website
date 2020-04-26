import React from "react"
import logo from "./logo-reggie-pangilinan.svg"
import "./brand.styles.scss"
import { Link } from "gatsby"

const Brand = ({ hideTitle }) => (
  <div className="brand">
    <Link to="/">
      <img src={logo} alt="Reggie Pangilinan." />
    </Link>
    <div className={hideTitle ? "brand-title hidden" : "brand-title"}>
      Software Developer.
    </div>
  </div>
)
export default Brand
