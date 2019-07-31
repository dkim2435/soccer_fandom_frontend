import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Tabs, Tab } from 'react-materialize'
import Sidenav from '../materialize/Sidenav'
import '../../stylesheets/FandomsContainer.css'

import Fandom from '../Fandom/Fandom'
import FandomHighlights from '../Fandom/FandomHighlights'


class FandomsContainer extends Component {

  render() {
    console.log(this.props.fanLights)
    // console.log("container", this.props.fanLights)
    // console.log(this.props.fanTeams)
    if (!this.props.fanTeams)
      return null

    return (

      <div >
        <Sidenav />
        <Tabs className="tab-demo z-depth-1">
          <Tab title="Fandoms" active>
            <Link to="/teams" className="waves-effect waves-light btn white-text">add</Link>
            <div className='fandom'>
              {this.props.fanTeams.map(team => {
                return <Fandom key={team.id} team={team} />
              })}
            </div>
          </Tab>
          <Tab title="Latest" >
            <div>
              {this.props.fanLights.map(h => {
                return <FandomHighlights h={h} />
              })}
            </div>
          </Tab>
        </Tabs>


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