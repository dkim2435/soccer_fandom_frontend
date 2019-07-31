// import { FETCH_HIGHLIGHTS } from './types'

const initialiState = {
  highlights: []
}

function highlightsReducer(state = initialiState, action) {
  switch (action.type) {
    case 'FETCH_HIGHLIGHTS':
      return {
        ...state,
        highlights: action.highlights
      }
    default:
      return state
  }
}
export default highlightsReducer

