import React from 'react'
import TeamCard from './TeamCard';

export default function TeamsList(props) {
  return (
    <div className="teams-list">
      {props.teams.map(team => <TeamCard key={team.id} team={team} />)}
    </div>
  )
}
