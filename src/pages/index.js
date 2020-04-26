import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WelcomeSection from "./home/welcome/welcome.component"
import AboutMeSection from "./home/aboutme/aboutme.component"
import HireMeSection from "./home/hireme/hireme.component"
import MyToolbeltSection from "./home/mytoolbelt/mytoolbelt.component"

const IndexPage = () => (
  <Layout hideTitle={false}>
    <SEO title="Home" />
    <WelcomeSection />
    <AboutMeSection />
    <MyToolbeltSection />
    <HireMeSection />
  </Layout>
)

export default IndexPage
