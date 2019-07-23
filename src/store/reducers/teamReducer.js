//default data is used if no state data is assigned
const initState = {
  //team data
  teams: [
    { id: '1', title: 'evan1', content: 'first team' },
    { id: '2', title: 'evan2', content: 'second team' },
    { id: '3', title: 'evan3', content: 'third team' }
  ]
}

//create reducer with state and action parameters
const teamReducer = (state = initState, action) => {
  return state
}

export default teamReducer