
const initState = {
  germanyData: []
}

function germanyDataReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_GERMANY_DATA':
      return {
        ...state,
        germanyData: action.germanyData
      }
    default:
      return state
  }
}
export default germanyDataReducer