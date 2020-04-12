import React from "react"
import PropTypes from "prop-types"
import "./welcome.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import Image from "./image"

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <SectionContent>
        <div
          className="image-wrapper"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-delay="50"
          data-sal-easing="ease"
        >
          <Image name="welcome-image-reggie-pangilinan" maxWidth={1124} />
        </div>
      </SectionContent>
    </section>
  )
}

WelcomeSection.propTypes = {}

export default WelcomeSection
