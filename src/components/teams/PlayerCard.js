import React, { Component } from 'react'
import '../../stylesheets/TeamCard.css'
// import { connect } from 'react-redux'
import '../../stylesheets/Fandom.css'


export default function PlayerCard(props) {
  let { player } = props
  return (
    <div className="team-card blue-grey" >

      <div className="team-card-image">
        <img src={player.PhotoUrl} />
      </div>

      <div className="team-card-info center white-text">
        {/* <p><h6><b>{this.props.team.teamname}</b></h6><em>{this.props.team.league.leaguename}</em></p> */}
      </div>

      {/* <a
          className="btn-floating waves-effect waves-light red right plus"><i className="material-icons"
            onClick={this.handleClick}>add</i>
        </a> */}

    </div >
  )
}
