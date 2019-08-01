import React from 'react'
import { connect } from 'react-redux'
import PlayerCard from '../teams/PlayerCard'
import { Link } from 'react-router-dom'

function PlayersContainer(props) {
  if (!props.players)
    return null

  // console.log(props.players)
  return (
    <div id='PlayersContainer'>
      <Link to="/information" className="waves-effect waves-light btn white-text">back</Link>
      {props.players.map(p => <PlayerCard player={p} key={p.PlayerId} />)}
    </div>
  )
}

let mapStateToProps = state => ({ players: state.teams.showPlayers })
export default connect(mapStateToProps)(PlayersContainer)
