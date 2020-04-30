import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "./404.styles.scss"

const NotFoundPage = () => (
  <section className="not-found">
    <SEO title="404: Not found" />
    <div>
      <span
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="200"
        data-sal-easing="ease"
        role="img"
        className="wave"
      >
        🎈
      </span>
      <h1>Are you lost?</h1>
      <Link to="">
        <small>Click here to go back</small>
      </Link>
    </div>
  </section>
)

export default NotFoundPage
