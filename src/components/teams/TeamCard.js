import React from 'react'
import '../../stylesheets/TeamCard.css'
const TeamCard = (props) => {

  // handleClick = (e) => {
  //   e.preventDefault()
  //   this.props.fandom(window.localStorage.getItem)
  // }

  return (
    <div className="team-card blue-grey">

      <div className="team-card-image center">
        <img src={props.team.image} />
      </div>

      <div className="team-card-info center white-text">
        <p><h6><b>{props.team.teamname}</b></h6><em>{props.team.league.leaguename}</em></p>
      </div>

      <a className="btn-floating waves-effect waves-light red right plus"><i
        className="material-icons">add</i></a>
      {/* onClick={this.handleClick(console.log("clicked"))}>add</i></a> */}


    </div >
  )
}

export default TeamCard
