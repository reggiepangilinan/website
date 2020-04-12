import React from "react"
import PropTypes from "prop-types"
import "./mytoolbelt.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import tools from "./tools"
import TechIcon from "../../../components/techicon/techicon.component"

const MyToolbeltSection = () => {
  return (
    <section className="my-toolbelt">
      <SectionContent>
        <h1
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="50"
          data-sal-easing="ease"
        >
          What's in my toolbelt?
        </h1>
        <div className="tools-wrapper">
          {tools.map(t => (
            <TechIcon image={t.icon} name={t.name} />
          ))}
        </div>
      </SectionContent>
    </section>
  )
}

MyToolbeltSection.propTypes = {}

export default MyToolbeltSection
