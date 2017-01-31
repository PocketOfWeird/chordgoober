import { combineReducers } from 'redux'
import user from './userReducer'
import view from './viewReducer'
import chords from './chordsReducer'


const rootReducer = combineReducers({
  chords,
  user,
  view
})

export default rootReducer
