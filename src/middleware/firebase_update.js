import firebase from '../db'
import { FIREBASE_UPDATE } from '../actions'

const firebase_update = store => next => action => {
  if (action.type === FIREBASE_UPDATE) {
    firebase.database().ref(action.path).set(action.values)
    .then(() => {})
    .catch(err => console.log(err))
  }
  return next(action)
}

export default firebase_update
