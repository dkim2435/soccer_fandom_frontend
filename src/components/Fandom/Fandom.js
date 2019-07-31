import React, { Component } from 'react'
import '../../stylesheets/Fandom.css'
import { removeFandom } from '../../store/actions/fandomActions'
import { connect } from 'react-redux'

class Fandom extends Component {

  handleClick = (e) => {
    // console.log("this is deleted")
    e.preventDefault()
    this.props.dispatch(removeFandom(localStorage.token, this.props.team.id))
  }

  render() {
    return (

      <div className="fandom-card blue-grey" >

        <div className="fandom-card-image center">
          <img src={this.props.team.image} />
        </div>

        <div className="fandom-card-info center white-text">
          <p><h6><b>{this.props.team.teamname}</b></h6><em>{this.props.team.league.leaguename}</em></p>
        </div>

        <a
          className="btn-floating waves-effect waves-light red right minus"><i className="material-icons"
            onClick={this.handleClick}
          >remove</i>
        </a>
      </div>
    )
  }
}

export default connect()(Fandom)