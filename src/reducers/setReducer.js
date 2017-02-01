import { NEW_SET_NAME, NEW_SET_NAME_ERROR,
  MAKING_NEW_SET, FIREBASE_UPDATE } from '../actions'


const set = (state={}, action) => {
  switch (action.type) {
    case NEW_SET_NAME:
      return {
        ...state,
        newSetName: action.payload,
        newSetNameError: ''
      }
    case NEW_SET_NAME_ERROR:
      return {
        ...state,
        newSetName: action.payload,
        newSetNameError: 'Name already exists'
      }
    case FIREBASE_UPDATE:
      return {
        ...state,
        makingNewSet: false,
        newSetName: '',
        newSetNameError: ''
      }
    case MAKING_NEW_SET:
      return {
        ...state,
        makingNewSet: true
      }
    default:
      return state
  }
}

export default set
