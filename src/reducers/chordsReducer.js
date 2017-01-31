import { SET_CHORDS, LOGGING_OUT } from '../actions'

const chords = (state=[], action) => {
  switch (action.type) {
    case SET_CHORDS:
      return action.payload
    case LOGGING_OUT:
      return []
    default:
      return state
  }
}

export default chords
