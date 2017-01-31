import firebase from '../db'
import { SET_VIEW } from '../actions'


const viewMiddleware = store => next => action => {
  if (action.type === SET_VIEW) {
    
  }
  return next(action)
}

export default viewMiddleware
