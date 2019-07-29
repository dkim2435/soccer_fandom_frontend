import { FETCH_TEAMS, LOADING_TEAMS } from './types'


const API_URL = "http://localhost:3000/api/v1/";

export function fetchTeams() {
  return (dispatch) => {
    dispatch({ type: LOADING_TEAMS })
    fetch(`${API_URL}/teams`, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(teams => {
        // console.log('teamsAction', teams)
        dispatch({ type: FETCH_TEAMS, payload: teams })
      })
  }
}

