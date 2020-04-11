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
          data-sal="fade"
          data-sal-duration="1500"
          data-sal-delay="50"
          data-sal-easing="ease"
          style={{
            height: "70vh",
          }}
        >
          <Image name="welcome-image-reggie-pangilinan" maxWidth={1124} />
        </div>
      </SectionContent>
    </section>
  )
}

WelcomeSection.propTypes = {}

export default WelcomeSection
