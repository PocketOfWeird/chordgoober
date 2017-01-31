import firebase from '../db'
import { INITIALIZE, userState, firebaseUpdate } from '../actions'
import { newUserState } from '../helpers'


const firebase_on = store => next => action => {
  if (action.type === INITIALIZE) {
    // setup observers
    // user
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('/users/' + user.uid)
        .on('value', snapshot => {
          const state = snapshot.exportVal()
          if (state) {
            store.dispatch(userState(state))
          } else {
            store.dispatch(firebaseUpdate(
              '/users/' + user.uid,
              newUserState(user)
            ))
          }
        })
      }
    })
  }
  return next(action)
}

export default firebase_on
