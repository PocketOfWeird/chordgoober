import firebase from '../db'
import { CHANGE_CURRENT_VIEW } from '../actions'


const viewMiddleware = store => next => action => {
  if (action.type === CHANGE_CURRENT_VIEW) {

  }
  return next(action)
}

export default viewMiddleware
