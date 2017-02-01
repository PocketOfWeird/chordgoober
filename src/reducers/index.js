import { combineReducers } from 'redux'
import user from './userReducer'
import view from './viewReducer'
import chords from './chordsReducer'
import set from './setReducer'


const rootReducer = combineReducers({
  chords,
  set,
  user,
  view
})

export default rootReducer
