import React, { Component } from 'react'
import '../../stylesheets/HighlightsContainer.css'

class HighlightsContainer extends Component {
  render() {
    return (
      <div className='highlights-container center'>
        <iframe src="https://www.scorebat.com/embed/" allowfullscreen allow="autoplay; fullscreen" className="_scorebatEmbeddedPlayer_"></iframe>
      </div>
    )
  }
}

export default HighlightsContainer