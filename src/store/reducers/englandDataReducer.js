
const initState = {
  englandData: []
}

function englandDataReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_ENGLAND_DATA':
      return {
        ...state,
        englandData: action.englandData
      }
    default:
      return state
  }
}
export default englandDataReducer