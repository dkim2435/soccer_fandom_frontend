import React from 'react'
import { connect } from 'react-redux'
import PlayerCard from '../teams/PlayerCard'

function PlayersContainer(props) {
  if (!props.players)
    return null

  console.log(props.players)
  return (
    <div id='PlayersContainer'>
      {props.players.map(p => <PlayerCard player={p} key={p.PlayerId} />)}
    </div>
  )
}

let mapStateToProps = state => ({ players: state.teams.showPlayers })
export default connect(mapStateToProps)(PlayersContainer)
