import React from 'react'
import TeamSummary from './TeamSummary';

const TeamList = ({ teams }) => {
  return (
    <div className="project-list section">
      {/*we can use as much teamSummary as we want */}
      {teams && teams.map(team => {
        return (
          <TeamSummary team={team} key={team.id} />
        )
      })}
    </div>
  )
}

export default TeamList