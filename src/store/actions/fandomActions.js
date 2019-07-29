const API_URL = "http://localhost:3000/api/v1/";

let config = {
  header: {}
}

export function fandom(token, teamData) {
  config['headers']['Authorization'] = 'Bearer' + token
  let data = { "team": teamData }
  return (dispatch) => {
    fetch(`${API_URL}/add_fandom`, data, config)
      .then(res => res.json())
      .then(teams =>
        dispatch({
          type: 'FANDOM',
          payload: teams.data
        })
      )
      .catch(error => {
        dispatch({ type: 'ADD_ALERT_MESSAGE', message: error.teams.data })
      })
  }
}