import React, { Component } from 'react'
import '../../stylesheets/Fandom.css'
import { removeFandom } from '../../store/actions/fandomActions'
import { connect } from 'react-redux'
import { Button } from 'react-materialize'
import { Link } from 'react-router-dom'

import FandomDetails from './GameSchedules'

class Fandom extends Component {

  state = {
    players: null,

  }

  handleClick = (e) => {
    // console.log("this is deleted")
    e.preventDefault()
    this.props.dispatch(removeFandom(localStorage.token, this.props.team.id))
  }

  handleDetails = (e) => {
    // e.preventDefault()
    let newArr = this.props.eTeams.filter(englandTeam => englandTeam.Name === this.props.team.teamname)
    let playersArr = newArr[0].Players
    this.setState({ players: playersArr })
    console.log("handling details on click", playersArr)

  }

  render() {
    return (
      <>

        <div className="fandom-card blue-grey" >

          <div className="fandom-card-image center">
            <img src={this.props.team.image} />
          </div>

          <div className="fandom-card-info center white-text">
            <p><h6><b>{this.props.team.teamname}</b></h6><em>{this.props.team.league.leaguename}</em></p>
          </div>

          {/* <div>
              <Button className="waves-effect waves-light btn white-text" onClick={this.handleDetails} >show</Button>


              {this.state.players ? this.state.players.map(p => {
            return (
              <FandomDetails p={p} />
              // <p>hello my name is: {p.FirstName}</p>
            )
          }) : null}
            </div> */}
          <a
            className="btn-floating waves-effect waves-light red right minus"><i className="material-icons"
              onClick={this.handleClick}>remove</i>
          </a>
        </div>

      </>
    )
  }
}

export default connect()(Fandom)