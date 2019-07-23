import React from 'react'

const ProjectList = () => {
  return (
    <div className="project-list section">

      {/* We use the card class to create a card. */}
      <div className="card z-depth-0 project-summary">
        {/* With the card-content class, we create the body part of the card space. */}
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Team title</span>
          <p>Team Information</p>
          <p className="grey-text">Links to the Team Profile Page</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        {/* With the card-content class, we create the body part of the card space. */}
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Team title</span>
          <p>Team Information</p>
          <p className="grey-text">Links to the Team Profile Page</p>
        </div>
      </div>

      <div className="card z-depth-0 project-summary">
        {/* With the card-content class, we create the body part of the card space. */}
        <div className="card-content grey-text text-darken-3">
          <span className="card-title ">Team title</span>
          <p>Team Information</p>
          <p className="grey-text">Links to the Team Profile Page</p>
        </div>
      </div>

    </div>
  )
}

export default ProjectList