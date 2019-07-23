import React from 'react';

const TeamSummary = ({ team }) => {
  console.log(team)
  return (
    <div>
      {/* We use the card class to create a card. */}
      <div className="card z-depth-0 project-summary">
        {/* With the card-content class, we create the body part of the card space. */}
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">{team.title}</span>
          <p>created by Evan</p>
          <p className="grey-text">Back button</p>
        </div>
      </div>
    </div>
  )
}

export default TeamSummary
