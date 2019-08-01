//import the reducers to be merged
import authReducer from './authReducer'
import teamsReducer from './teamsReducer'
import fandomsReducer from './fandomsReducer'
import highlightsReducer from './highlightsReducer'
import englandDataReducer from './englandDataReducer'

//call the combiner module
import { combineReducers } from 'redux'



//merge using combineReducer
const rootReducer = combineReducers({
  auth: authReducer,
  teams: teamsReducer,
  fandoms: fandomsReducer,
  highlights: highlightsReducer,
  englandData: englandDataReducer
})

export default rootReducer