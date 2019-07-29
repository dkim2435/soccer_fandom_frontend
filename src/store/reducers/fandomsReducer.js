const initState = { fandoms: [] }
function fandomsReducer(state = initState, action) {
  switch (action.type) {
    case 'FANDOM':
      return {
        ...state,
        fandoms: [action.payload]
      }

    case 'ADD_ALERT_MESSAGE':
      return {
        ...state,
        message: [action.payload]
      };

    default:
      return state
  }
}

export default fandomsReducer