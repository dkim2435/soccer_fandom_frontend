const API_URL = "http://localhost:3000/api/v1/";

export function fetchUserData() {
  return (dispatch) => {

    fetch(`${API_URL}/init-state`, {
      headers: { Authorization: `Bearer ${localStorage.token}` }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.user)
          dispatch({ type: 'SET_USER', user: res.user })
      })
  }
}


export function fandom(token, teamData) {
  // console.log('action data', teamData)
  const auth = 'Bearer ' + token
  console.log(auth)
  return (dispatch) => {
    fetch(`${API_URL}add_fandom`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: auth
      },
      body: JSON.stringify({ team: teamData })
    })
      .then(res => res.json())
      .then(teams => {
        // console.log(teams)
        dispatch({
          type: 'FANDOM',
          payload: teams
        })
      })
      .catch(error => {
        dispatch({ type: 'ADD_ALERT_MESSAGE', message: error.teams.data })
      })
  }
}