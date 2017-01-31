import { NEW_SET_NAME, FIREBASE_UPDATE } from '../actions'


const newSet = (state='', action) => {
  switch (action.type) {
    case NEW_SET_NAME:
      return action.payload
    case FIREBASE_UPDATE:
      return ''
    default:
      return state
  }
}

export default newSet
