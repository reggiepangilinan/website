import React from "react"
import PropTypes from "prop-types"
import "./hireme.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import { Link } from "gatsby"

const HireMeSection = () => {
  return (
    <section className="hire-me">
      <SectionContent>
        <div>
          <h1
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="50"
            data-sal-easing="ease"
          >
            Let's do amazing work together. 🤝
          </h1>
          <h3
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="50"
            data-sal-easing="ease"
          >
            Email me at
          </h3>
          <a
            href="mailto:hello@reggiepangilinan.com?subject=Let's%20work%20together%20mate!"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="150"
            data-sal-easing="ease"
          >
            hello@reggiepangilinan.com
          </a>
        </div>
        <h3
          data-sal="slide-up"
          data-sal-duration="2000"
          data-sal-delay="250"
          data-sal-easing="ease"
        >
          Have a great day! 😘
        </h3>
      </SectionContent>
    </section>
  )
}

HireMeSection.propTypes = {}

export default HireMeSection
