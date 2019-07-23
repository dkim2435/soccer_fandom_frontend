//create actions called addTeam
export const addTeam = (team) => {
  return (dispatch, getState) => {
    //async operation wich dsipatch
    dispatch({ type: 'ADD_TEAM', team })
  }
}