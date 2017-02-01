import { combineReducers } from 'redux'
import user from './userReducer'
import view from './viewReducer'
import chords from './chordsReducer'
import set from './setReducer'
import filter from './filterReducer'


const rootReducer = combineReducers({
  chords,
  filter,
  set,
  user,
  view
})

export default rootReducer
