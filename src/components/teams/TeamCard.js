import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../../stylesheets/TeamCard.css'

import { fandom } from '../.././store/actions/fandomActions'

class TeamCard extends Component {

  handleClick = (e) => {
    e.preventDefault()
    // console.log('jwt token', localStorage.token)
    this.props.dispatch(fandom(localStorage.token, this.props.team))

  }
  render() {
    return (
      <div className="team-card blue-grey" >

        <div className="team-card-image">
          <img src={this.props.team.image} />
        </div>

        <div className="team-card-info center white-text">
          <p><h6><b>{this.props.team.teamname}</b></h6><em>{this.props.team.league.leaguename}</em></p>
        </div>

        <a
          className="btn-floating waves-effect waves-light red right plus"><i className="material-icons"
            onClick={this.handleClick}>add</i>
        </a>

      </div >
    )
  }
}
export default connect()(TeamCard)
