import React from "react"
import PropTypes from "prop-types"
import "./aboutme.styles.scss"
import SectionContent from "../../../components/sectioncontent/sectioncontent.component"

const AboutMeSection = () => {
  return (
    <section className="about-me">
      <SectionContent
        style={{
          marginTop: "100px",
          paddingTop: "200px",
        }}
      >
        <h1>About me 👓</h1>
        <p>
          Amet ut sit enim eu. Ullamco labore elit sit aliquip sint amet ipsum
          esse labore. Occaecat voluptate proident cillum sint et consectetur
          quis culpa dolore. Exercitation labore minim ea excepteur sint eiusmod
          fugiat Lorem. Proident aliqua ut ipsum amet sint consectetur et
          eiusmod dolor id exercitation est id nostrud. Et ea duis non amet in
          esse eu Lorem excepteur non. Officia dolor exercitation veniam dolor
          magna esse Lorem eu sit aliquip. Enim quis minim sit et dolore ut
          ipsum exercitation mollit ullamco elit. Minim magna fugiat id duis
          laborum irure esse proident consequat cupidatat. Officia nostrud
          commodo ea deserunt eiusmod nisi labore Lorem. Ea officia laborum
          magna aliquip. Laboris fugiat ex deserunt velit eu. Ad labore nostrud
          adipisicing excepteur laboris nostrud labore excepteur. Culpa
          consequat mollit eu aute dolore. Excepteur nisi nisi non dolore amet
          consequat deserunt mollit labore ullamco Lorem quis enim sit. Veniam
          fugiat anim non nulla est voluptate deserunt aute consequat eu.
          Excepteur voluptate eiusmod ipsum esse. Qui dolore reprehenderit ut
          excepteur sunt officia sunt cillum. Adipisicing cupidatat labore
          proident do laboris voluptate fugiat. Sunt fugiat velit laboris
          occaecat. Minim ipsum exercitation non nisi dolor exercitation enim ut
          sint nostrud excepteur aliqua enim adipisicing. Mollit irure ex duis
          pariatur nisi elit culpa deserunt non adipisicing magna magna minim.
          Ipsum exercitation sint consequat anim proident adipisicing pariatur
          magna exercitation veniam esse cupidatat.
        </p>
      </SectionContent>
    </section>
  )
}

AboutMeSection.propTypes = {}

export default AboutMeSection
