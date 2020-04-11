import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "./home/welcome/image"
import SectionContent from "../components/sectioncontent/sectioncontent.component"
import WelcomeSection from "./home/welcome/welcome.component"
import AboutMeSection from "./home/aboutme/aboutme.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WelcomeSection />
    <AboutMeSection />
  </Layout>
)

export default IndexPage
