export function fetchGermanyData() {
  return (dispatch) => {
    fetch('https://api.sportsdata.io/v3/soccer/scores/json/CompetitionDetails/bundesliga?key=de6e750e27e44fbf9c04137e013e6bfc')
      .then(res => res.json())
      .then(germanyData => {
        dispatch({ type: 'FETCH_GERMANY_DATA', germanyData: germanyData })
      })
  }
}