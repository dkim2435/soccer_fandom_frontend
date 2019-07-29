//import the reducers to be merged
import authReducer from './authReducer'
import teamsReducer from './teamsReducer'
import fandomsReducer from './fandomsReducer'

//call the combiner module
import { combineReducers } from 'redux'


//merge using combineReducer
const rootReducer = combineReducers({
  auth: authReducer,
  teams: teamsReducer,
  fandoms: fandomsReducer
})

export default rootReducer