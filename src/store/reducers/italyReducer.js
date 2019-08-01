
const initState = {
  italyData: []
}

function italyDataReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ITALY_DATA':
      return {
        ...state,
        italyData: action.italyData
      }
    default:
      return state
  }
}
export default italyDataReducer