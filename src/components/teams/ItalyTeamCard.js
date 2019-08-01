import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../stylesheets/Fandom.css'

class ItalyTeamCard extends Component {

  render() {

    // console.log("In England Team Card", this.props.t.Name)
    // console.log("In England Team Card", this.props.t.Players)
    return (
      <div className="fandom-card blue-grey"  >

        <div className="fandom-card-image center">
          <img src={this.props.t.WikipediaLogoUrl} />
        </div>

        <div className="fandom-card-info center white-text">

          <p><h6><b>{this.props.t.Name}</b></h6><em>{this.props.t.Nickname1}</em></p>
        </div>
        {/* {this.props.t.Players ?
          this.props.t.Players.map(p => {
            return <PlayerCard p={p} />
        }) : null} */}
        <Link to="/players" onClick={() => this.props.dispatch({ type: 'SHOW_PLAYERS', payload: this.props.t.Players })} className="waves-effect waves-light btn white-text">more</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tPlayers: state.englandData.englandData.Teams
  }
}

export default connect(mapStateToProps)(ItalyTeamCard)