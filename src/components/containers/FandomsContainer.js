import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Tabs, Tab } from 'react-materialize'
import Sidenav from '../materialize/Sidenav'
import '../../stylesheets/FandomsContainer.css'

import Fandom from '../Fandom/Fandom'
import FandomHighlights from '../Fandom/FandomHighlights'
import EnglandTeamCard from '../teams/EnglandTeamCard';
import { Link } from 'react-router-dom'


class FandomsContainer extends Component {

  render() {
    // console.log("container", this.props.fanLights)
    // console.log(this.props.fanTeams)
    console.log("england teams", this.props.eTeams)
    if (!this.props.fanTeams)
      return null

    return (

      <div >
        <Sidenav />

        <Link to="/teams" className="waves-effect waves-light btn white-text">add</Link>
        <div className='fandom'>
          {this.props.fanTeams.map(team => {
            return <Fandom key={team.id} team={team} />
          })}
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fanTeams: state.auth.user.teams,
    user: state.auth.user,
    fanLights: state.highlights.highlights

  }
}
export default connect(mapStateToProps)(FandomsContainer)