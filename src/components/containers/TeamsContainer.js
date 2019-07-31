import { connect } from 'react-redux'
import React from 'react';

import TeamsList from '../teams/TeamsList'

import { Dropdown, Divider, Button } from 'react-materialize'
import Sidenav from '../materialize/Sidenav'



class TeamsContainer extends React.Component {
  // if (props.teams[0])
  // console.log("Team Container props: ", props.teams[0][0])
  state = {
    search: false,
    filter: false,
    sort: false
  }

  getTeams = () => {
    let showTeams = this.props.teams

    if (this.state.filter)
      showTeams = showTeams.filter(t => t.league.leaguename === this.state.filter)

    return showTeams
  }


  render() {
    // console.log(this.props.teams)

    if (!this.props.teams)
      return null

    return (
      <div className="TeamsContainer" >
        <Sidenav />
        <Dropdown title="test" trigger={<Button>Filter by League</Button>}>
          <a onClick={() => this.setState({ filter: false })}>All</a>
          <a onClick={() => this.setState({ filter: 'EPL' })}>EPL</a>
          <a onClick={() => this.setState({ filter: 'La Liga' })}>La Liga</a>
          <a onClick={() => this.setState({ filter: 'Bundesliga' })}>Bundesliga</a>
          <a onClick={() => this.setState({ filter: 'Serie A' })}>Serie A</a>
          <Divider />
        </Dropdown>

        <TeamsList teams={this.getTeams()} />
      </div>
    )
  }
}
//function that gets data from store
const mapStateToProps = (state) => {
  return {
    teams: state.teams.teams[0]
  }
}

export default connect(mapStateToProps)(TeamsContainer)