export function fetchSpainData() {
  return (dispatch) => {
    fetch('https://api.sportsdata.io/v3/soccer/scores/json/CompetitionDetails/esp?key=de6e750e27e44fbf9c04137e013e6bfc')
      .then(res => res.json())
      .then(spainData => {
        dispatch({ type: 'FETCH_SPAIN_DATA', spainData: spainData })
      })
  }
}