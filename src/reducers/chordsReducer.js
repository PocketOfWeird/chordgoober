import { SET_CHORDS } from '../actions'

const chords = (state=[], action) => {
  switch (action.type) {
    case SET_CHORDS:
      return action.payload
    default:
      return state
  }
}

export default chords
