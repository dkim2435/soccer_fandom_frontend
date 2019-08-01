export function fetchItalyData() {
  return (dispatch) => {
    fetch('https://api.sportsdata.io/v3/soccer/scores/json/CompetitionDetails/ITSA?KEY=de6e750e27e44fbf9c04137e013e6bfc')
      .then(res => res.json())
      .then(italyData => {
        dispatch({ type: 'FETCH_ITALY_DATA', italyData: italyData })
      })
  }
}