import React from "react"
import PropTypes from "prop-types"
import "./sectioncontent.styles.scss"

const SectionContent = ({ style, children }) => {
  return (
    <div className="section-content" style={style}>
      {children}
    </div>
  )
}

SectionContent.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
}

export default SectionContent
