//import the reducers to be merged
import authReducer from './authReducer'
import teamReducer from './teamReducer'

//call the combiner module
import { combineReducers } from 'redux'


//merge using combineReducer
const rootReducer = combineReducers({
  auth: authReducer,
  team: teamReducer
})

export default rootReducer