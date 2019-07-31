// import { FETCH_HIGHLIGHTS } from './types'



export function fetchHighlights() {
  return (dispatch) => {
    fetch('https://www.scorebat.com/video-api/v1/')
      .then(res => res.json())
      .then(highlights => {
        // console.log(highlights)
        dispatch({ type: 'FETCH_HIGHLIGHTS', highlights: highlights })
      })
  }
}

