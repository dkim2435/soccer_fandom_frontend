import React, { Component } from 'react'
import Sidenav from '../materialize/Sidenav'
import { Tabs, Tab } from 'react-materialize'
import EnglandTeamCard from '../teams/EnglandTeamCard'
import SpainTeamCard from '../teams/SpainTeamCard'
import GermanyTeamCard from '../teams/GermanyTeamCard'
import ItalyTeamCard from '../teams/ItalyTeamCard'

import { connect } from 'react-redux'

class TeamInformation extends Component {

  render() {
    // console.log("In TeamInformation", this.props.eTeams)
    console.log("In TeamInformation", this.props.sTeams)

    return (
      <div>
        <Sidenav />
        <Tabs className="tab-demo z-depth-1">
          <Tab title="EPL" active>
            {this.props.eTeams ?
              this.props.eTeams.map(t => {
                return <EnglandTeamCard t={t} />
              }) : null}
          </Tab>
          <Tab title="La Liga" >
            {this.props.sTeams ?
              this.props.sTeams.map(t => {
                return <SpainTeamCard t={t} />
              }) : null}
          </Tab>
          <Tab title="Bundesliga" >
            {this.props.gTeams ?
              this.props.gTeams.map(t => {
                return <GermanyTeamCard t={t} />
              }) : null}
          </Tab>
          <Tab title="Serie A" >
            {this.props.iTeams ?
              this.props.iTeams.map(t => {
                return <ItalyTeamCard t={t} />
              }) : null}
          </Tab>
        </Tabs>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    eTeams: state.englandData.englandData.Teams,
    sTeams: state.spainData.spainData.Teams,
    gTeams: state.germanyData.germanyData.Teams,
    iTeams: state.italyData.italyData.Teams
  }
}

export default connect(mapStateToProps)(TeamInformation)