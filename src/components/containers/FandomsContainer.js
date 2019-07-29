import React, { Component } from 'react'

// import FandomsList from '../Fandoms/FandomsList'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TeamCard from '../teams/TeamCard'


class FandomsContainer extends Component {
  render() {
    // console.log(this.props)
    if (!this.props.fanTeams)
      return null

    return (
      <div>
        <Link to="/teams" className="waves-effect waves-light btn white-text">add</Link>
        <div className='fandom-container'>
          {this.props.fanTeams.map(team => {
            return <TeamCard key={team.id} team={team} />
          })
          }
        </div>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    fanTeams: state.auth.user.teams
  }
}
export default connect(mapStateToProps)(FandomsContainer)