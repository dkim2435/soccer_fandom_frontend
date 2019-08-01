import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Tabs, Tab, Collapsible, CollapsibleItem } from 'react-materialize'
import Sidenav from '../../components/materialize/Sidenav'



class GameSchedules extends Component {
  render() {
    // console.log("in schedule", this.props.eSchedule)
    return (
      <div>
        <Sidenav />
        <Tabs className="tab-demo z-depth-1">
          <Tab title="EPL" active>
            {this.props.eSchedule ?
              this.props.eSchedule.map(s => {
                return <Collapsible popout>
                  <CollapsibleItem className="blue-grey" header={s.HomeTeamKey + " " + "vs" + " " + s.AwayTeamKey} icon="today">
                    <p>Round: {s.Week}</p>
                    <p>(Home) <b>{s.HomeTeamName}</b> vs <b>{s.AwayTeamName}</b> (Away)</p>
                    <p><em>{s.DateTime}</em></p>
                  </CollapsibleItem>
                </Collapsible>
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
    eSchedule: state.englandData.englandData.Games
  }
}

export default connect(mapStateToProps)(GameSchedules)