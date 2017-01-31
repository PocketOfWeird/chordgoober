import { combineReducers } from 'redux'
import user from './userReducer'
import view from './viewReducer'
import chords from './chordsReducer'
import newSet from './newSetReducer'


const rootReducer = combineReducers({
  chords,
  newSet,
  user,
  view
})

export default rootReducer
