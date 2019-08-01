import { FETCH_TEAMS, LOADING_TEAMS } from '../actions/types'

const initState = { teams: [] }
function teamsReducer(state = initState, action) {
  switch (action.type) {
    case LOADING_TEAMS:
      return state
    case FETCH_TEAMS:
      return {
        ...state,
        teams: [action.payload]
      }
    case 'SHOW_PLAYERS': {
      return { ...state, showPlayers: action.payload }
    }

    default:
      return state
  }
}
export default teamsReducer