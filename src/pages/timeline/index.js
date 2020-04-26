import React from "react"
import { Link } from "gatsby"
import SectionContent from "../../components/sectioncontent/sectioncontent.component"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./timeline.styles.scss"
import TimelineItem from "./item/item.component"

const TimelinePage = () => (
  <Layout hideTitle>
    <SEO title="Timeline" />
    <section className="timeline">
      <SectionContent>
        <TimelineItem
          dateFrom="Jan 2019"
          dateTo="To Present"
          title=".Net Developer"
          company="Infotrack AU"
          location="Sydney, Australia"
          website="https://infotrack.com.au"
          text="Do id minim incididunt ullamco non elit incididunt consequat ad aliqua. Aliquip adipisicing culpa sit adipisicing irure duis. Sit voluptate fugiat sunt aute deserunt magna occaecat in. Ea aute magna excepteur mollit voluptate. Do id minim incididunt ullamco non elit incididunt consequat ad aliqua. Aliquip adipisicing culpa sit adipisicing irure duis. Sit voluptate fugiat sunt aute deserunt magna occaecat in. Ea aute magna excepteur mollit voluptate."
        />
        <TimelineItem
          dateFrom="May 2018"
          dateTo="To Jan 2019"
          title="Software Developer"
          company="Stationfive"
          location="Sydney, Australia"
          website="https://stationfive.com.au"
          text="Do id minim incididunt ullamco non elit incididunt consequat ad aliqua. Aliquip adipisicing culpa sit adipisicing irure duis. Sit voluptate fugiat sunt aute deserunt magna occaecat in. Ea aute magna excepteur mollit voluptate. Do id minim incididunt ullamco non elit incididunt consequat ad aliqua. Aliquip adipisicing culpa sit adipisicing irure duis. Sit voluptate fugiat sunt aute deserunt magna occaecat in. Ea aute magna excepteur mollit voluptate."
        />

        <TimelineItem
          dateFrom="May 2018"
          dateTo="To Jan 2019"
          title="Software Developer"
          company="Stationfive"
          location="Sydney, Australia"
          website="https://stationfive.com.au"
          text="Do id minim incididunt ullamco non elit incididunt consequat ad aliqua. Aliquip adipisicing culpa sit adipisicing irure duis. Sit voluptate fugiat sunt aute deserunt magna occaecat in. Ea aute magna excepteur mollit voluptate. Do id minim incididunt ullamco non elit incididunt consequat ad aliqua. Aliquip adipisicing culpa sit adipisicing irure duis. Sit voluptate fugiat sunt aute deserunt magna occaecat in. Ea aute magna excepteur mollit voluptate."
        />
      </SectionContent>
    </section>
  </Layout>
)

export default TimelinePage
