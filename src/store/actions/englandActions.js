export function fetchEnglandData() {
  return (dispatch) => {
    fetch('https://api.sportsdata.io/v3/soccer/scores/json/CompetitionDetails/epl?key=de6e750e27e44fbf9c04137e013e6bfc')
      .then(res => res.json())
      .then(englandData => {
        dispatch({ type: 'FETCH_ENGLAND_DATA', englandData: englandData })
      })
  }
}