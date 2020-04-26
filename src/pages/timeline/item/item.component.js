import React from "react"
import PropTypes from "prop-types"
import "./item.styles.scss"

const TimelineItem = ({
  dateFrom,
  dateTo,
  title,
  company,
  location,
  website,
  text,
}) => {
  return (
    <div className="timeline-item">
      <div className="dates">
        <div className="from">{dateFrom}</div>
        <div className="to">{dateTo}</div>
      </div>

      <div className="content">
        <div className="heading">
          <h3>{`${title} at ${company}`}</h3>
          <small>{location}</small>
          <a href={website}>{website}</a>
        </div>
        <p>{text}</p>
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default TimelineItem
