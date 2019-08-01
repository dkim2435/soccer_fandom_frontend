import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Tabs, Tab, Collapsible, CollapsibleItem } from 'react-materialize'
import Sidenav from '../../components/materialize/Sidenav'
import '../../stylesheets/GameSchedules.css'



class GameSchedules extends Component {
  render() {
    // console.log("in schedule", this.props.eSchedule)
    return (
      <div>
        <Sidenav />
        <Tabs className="tab-demo  white-text z-depth-1">
          <Tab title="EPL" active>
            {this.props.eSchedule ?
              this.props.eSchedule.map(s => {
                return <Collapsible className="
                collapse" popout>
                  <CollapsibleItem header={s.HomeTeamKey + " " + "vs" + " " + s.AwayTeamKey} icon="today">
                    <p>Round: {s.Week}</p>
                    <p>(Home) <b>{s.HomeTeamName}</b> vs <b>{s.AwayTeamName}</b> (Away)</p>
                    <p><em>{s.DateTime}</em></p>
                  </CollapsibleItem>
                </Collapsible>
              }) : null}

          </Tab>
          <Tab title="La Liga" >
            {this.props.sSchedule ?
              this.props.sSchedule.map(s => {
                return <Collapsible className="
                collapse" popout>
                  <CollapsibleItem  header={s.HomeTeamKey + " " + "vs" + " " + s.AwayTeamKey} icon="today">
                    <p>Round: {s.Week}</p>
                    <p>(Home) <b>{s.HomeTeamName}</b> vs <b>{s.AwayTeamName}</b> (Away)</p>
                    <p><em>{s.DateTime}</em></p>
                  </CollapsibleItem>
                </Collapsible>
              }) : null}

          </Tab>
          <Tab title="Bundesliga" >
            {this.props.gSchedule ?
              this.props.gSchedule.map(s => {
                return <Collapsible className="
                collapse" popout>
                  <CollapsibleItem  header={s.HomeTeamKey + " " + "vs" + " " + s.AwayTeamKey} icon="today">
                    <p>Round: {s.Week}</p>
                    <p>(Home) <b>{s.HomeTeamName}</b> vs <b>{s.AwayTeamName}</b> (Away)</p>
                    <p><em>{s.DateTime}</em></p>
                  </CollapsibleItem>
                </Collapsible>
              }) : null}

          </Tab>
          <Tab title="Serie A" >
            {this.props.iSchedule ?
              this.props.iSchedule.map(s => {
                return <Collapsible className="
                collapse" popout>
                  <CollapsibleItem  header={s.HomeTeamKey + " " + "vs" + " " + s.AwayTeamKey} icon="today">
                    <p>Round: {s.Week}</p>
                    <p>(Home) <b>{s.HomeTeamName}</b> vs <b>{s.AwayTeamName}</b> (Away)</p>
                    <p><em>{s.DateTime}</em></p>
                  </CollapsibleItem>
                </Collapsible>
              }) : null}

          </Tab>
        </Tabs>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    eSchedule: state.englandData.englandData.Games,
    sSchedule: state.spainData.spainData.Games,
    gSchedule: state.germanyData.germanyData.Games,
    iSchedule: state.italyData.italyData.Games
  }
}

export default connect(mapStateToProps)(GameSchedules)