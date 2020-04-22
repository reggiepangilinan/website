import React from "react"
import PropTypes from "prop-types"
import "./welcome.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import Image from "./image"

const WelcomeSection = () => {
  return (
    <section className="welcome">
      <SectionContent>
        <div className="image-wrapper">
          <div
            className="greeting part1"
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="50"
            data-sal-easing="ease"
          >
            <div>
              Hey there!{" "}
              <span role="img" className="wave">
                👋
              </span>
            </div>
            <div>I'm Reggie.</div>
          </div>

          <div
            className="greeting part2"
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="50"
            data-sal-easing="ease"
          >
            <div>
              I make <span>scalable</span>
            </div>
            <div>solutions.</div>
          </div>

          <Image
            name="welcome-image-reggie-pangilinan"
            maxWidth={1124}
            data-sal="fade"
            data-sal-duration="500"
            data-sal-delay="50"
            data-sal-easing="ease"
          />
        </div>
      </SectionContent>
    </section>
  )
}

WelcomeSection.propTypes = {}

export default WelcomeSection
