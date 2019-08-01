const initState = {
  spainData: []
}

function spainDataReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_SPAIN_DATA':
      return {
        ...state,
        spainData: action.spainData
      }
    default:
      return state
  }
}
export default spainDataReducer