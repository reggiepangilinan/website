import React from "react"
import "./techicon.styles.scss"

const TechIcon = ({ image, name }) => {
  return (
    <div
      className="tech-icon"
      data-sal="fade"
      data-sal-duration="1500"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      <img src={image} />
      <div className="tech-name">{name}</div>
    </div>
  )
}

export default TechIcon
