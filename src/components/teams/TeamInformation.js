import React, { Component } from 'react'
import Sidenav from '../materialize/Sidenav'
import { Tabs, Tab } from 'react-materialize'
import EnglandTeamCard from '../teams/EnglandTeamCard'
import { connect } from 'react-redux'

class TeamInformation extends Component {

  render() {
    // console.log("In TeamInformation", this.props.eTeams)
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

          </Tab>
          <Tab title="Bundesliga" >

          </Tab>
          <Tab title="Serie A" >

          </Tab>
        </Tabs>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    eTeams: state.englandData.englandData.Teams
  }
}

export default connect(mapStateToProps)(TeamInformation)