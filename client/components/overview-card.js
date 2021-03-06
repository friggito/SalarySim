import React from 'react'

/**
 * COMPONENT
 */
export const OverviewCard = props => {
    const {color1, title, number} = props
  return (
    <div  className={`card-panel ${color1} z-depth-2`}>
        <h3>{title}</h3>
        <h2>{number}</h2>
    </div>
  )
}

export default OverviewCard