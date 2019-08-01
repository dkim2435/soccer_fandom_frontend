import React, { Component } from 'react'
import '../../stylesheets/PlayerCard.css'
// import { connect } from 'react-redux'



export default function PlayerCard(props) {
  let { player } = props
  return (
    <div className="player-card blue-grey" >

      <div className="player-card-image">
        <img src={player.PhotoUrl} />
      </div>

      <div className="player-card-info center white-text">
        <p><h6><b>{player.ShortName}</b></h6></p>
        <p><em><b>{player.Jersey}</b></em></p>
        <p>Nationality: <b>{player.Nationality}</b></p>
        <p>Position: <b>{player.Position}</b></p>
      </div>

      {/* <a
          className="btn-floating waves-effect waves-light red right plus"><i className="material-icons"
            onClick={this.handleClick}>add</i>
        </a> */}

    </div >
  )
}
