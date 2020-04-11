import React from "react"
import "./techicon.styles.scss"

const TechIcon = ({ image, name }) => {
  return (
    <div className="tech-icon">
      <img src={image} />
      <div className="tech-name">{name}</div>
    </div>
  )
}

export default TechIcon
