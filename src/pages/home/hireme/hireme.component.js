import React, { useRef } from "react"
import "./hireme.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import { Link } from "gatsby"
import { useWindowScroll } from "react-use"
import Brand from "../../../components/brand/brand.component"
const HireMeSection = () => {
  const { y } = useWindowScroll()
  const ref = useRef(null)

  const isSectionFocused = ref.current && y >= ref.current.offsetTop

  return (
    <section
      className={isSectionFocused ? "hire-me colored" : "hire-me"}
      ref={ref}
    >
      <SectionContent>
        <div className="content-wrapper">
          <div className="content-top">
            <h1
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              Let's do amazing things together.{" "}
              <span role="img" className="wave">
                🤝
              </span>
            </h1>
            <h3
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              Email me at
            </h3>
            <a
              href="mailto:hello@reggiepangilinan.com?subject=Let's%20work%20together%20mate!"
              data-sal="slide-up"
              data-sal-duration="500"
              data-sal-delay="50"
              data-sal-easing="ease"
            >
              hello@reggiepangilinan.com
            </a>
          </div>
          <h3
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="50"
            data-sal-easing="ease"
          >
            Have a great day! 😘
          </h3>
        </div>
      </SectionContent>
    </section>
  )
}

HireMeSection.propTypes = {}

export default HireMeSection
