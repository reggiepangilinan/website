import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./aboutme.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"

const AboutMeSection = () => {
  return (
    <section className="about-me">
      <SectionContent>
        <h1
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="50"
          data-sal-easing="ease"
        >
          About me
        </h1>
        <p
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="50"
          data-sal-easing="ease"
        >
          I am software developer born and raised in Manila, Philippines.
          Currently based in Sydney, Australia. I love working with people to
          create products and services that helps businesses solve their
          problems through efficient software development. It's just more fun
          that way 😁
        </p>
        <p
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="50"
          data-sal-easing="ease"
        >
          I've been doing it for 15 years and I've worked with a variety of
          organizations - from start-ups to established businesses and
          government agency in different parts of the world. Did I get you
          interested enough to see what I've been up to all those years?{" "}
          <Link to="">Please click here.</Link>
        </p>
        <p
          data-sal="slide-up"
          data-sal-duration="500"
          data-sal-delay="50"
          data-sal-easing="ease"
        >
          And for something a little philosophical, you know what keeps me
          going? The promise of a product that I've worked on improving people's
          quality of life in whatever way. 🌅🌃
        </p>
        <p>
          BTW, In my free time I go out and take 📸 photos.{" "}
          <a href="https://www.instagram.com/reggiepangilinanphotos/">
            Check it out!
          </a>
        </p>
      </SectionContent>
    </section>
  )
}

AboutMeSection.propTypes = {}

export default AboutMeSection
