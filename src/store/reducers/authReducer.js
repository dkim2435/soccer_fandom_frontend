//default data is used if no state data is assigned
const initState = {
  loggedIn: !!localStorage.token,
  user: {}
}

//create reducer with state and action parameters
export default (state = initState, action) => {
  switch (action.type) {

    case 'SET_USER': {
      return { ...state, user: action.user, loggedIn: true }
    }

    case 'LOG_OUT': {
      localStorage.removeItem('token')
      return { ...state, loggedIn: false }
    }

    // case 'FANDOM':
    //   return{...state, current}


    default:
      return state
  }
}
