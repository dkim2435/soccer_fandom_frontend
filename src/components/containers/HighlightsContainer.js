import React, { Component } from 'react'
import '../../stylesheets/HighlightsContainer.css'
import Sidenav from '../materialize/Sidenav'

class HighlightsContainer extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <div className='highlights-container center'>

          <iframe src="https://www.scorebat.com/embed/" allowfullscreen allow="autoplay; fullscreen" className="_scorebatEmbeddedPlayer_"></iframe>
        </div>
      </div>
    )
  }
}

export default HighlightsContainer