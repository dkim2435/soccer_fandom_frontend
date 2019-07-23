import React, { Component } from 'react'

class AddTeam extends Component {
  render() {
    return (
      <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Add a new Team</h5>
          <div className="input-field">
            <input type="text" id='title' />
            <label htmlFor="title">Team Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea"></textarea>
            <label htmlFor="content">Team content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTeam