import React from "react"
import PropTypes from "prop-types"
import "./welcome.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import Image from "./image"

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <SectionContent style={{ marginTop: "120px" }}>
        <Image name="welcome-image-reggie-pangilinan" maxWidth={1124} />
      </SectionContent>
    </section>
  )
}

WelcomeSection.propTypes = {}

export default WelcomeSection
