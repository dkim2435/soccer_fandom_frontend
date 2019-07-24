import React, { Component } from 'react'
import Image1 from "/Users/Evan/Desktop/project/soccer_fandom_frontend/src/images/Red-Devils-logo.png";


class TeamCard extends Component {


  render() {
    return (
      <div className="row">
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img src={Image1} />
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
            </div>
            <div className="card-content blue-grey white-text">
              <span className="card-title white-text">title</span>
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamCard