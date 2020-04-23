import React, { useState } from "react"
import "./welcome.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"
import Image from "./image"
import { useInterval } from "react-use"
import Typewriter from "typewriter-effect"
const textArray = ["scalable", "beautiful", "secure", "user-friendly"]

const WelcomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [text, setText] = useState(textArray[0])
  useInterval(() => {
    const nextIndex = currentIndex + 1
    setText(textArray[currentIndex])
    setCurrentIndex(nextIndex)
    if (nextIndex === textArray.length) setCurrentIndex(0)
  }, 6000)

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
              I make{" "}
              <Typewriter
                options={{
                  pauseFor: 3500,
                  strings: textArray,
                  autoStart: true,
                  loop: true,
                }}
              />
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
