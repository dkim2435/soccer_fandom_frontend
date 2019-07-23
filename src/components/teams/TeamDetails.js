import React from 'react'
import { id } from 'postcss-selector-parser';

const TeamDetails = (props) => {
  const id = props.match.params.id
  console.log(props)
  return (
    // details of a team into the card structure
    <div className="container section team-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Team title- {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>created by Evan</div>
          <div>mod 5 project</div>
        </div>
      </div>
    </div>
  )
}

export default TeamDetails