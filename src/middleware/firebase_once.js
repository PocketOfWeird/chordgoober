import firebase from '../db'
import { INITIALIZE, setChords } from '../actions'


const firebase_once = store => next => action => {
  let result = next(action)
  if (action.type === INITIALIZE) {
    const chords = store.getState().chords
    if (chords.length === 0) {
      firebase.database().ref('/chords').once('value')
      .then(snapshot => {
        store.dispatch(setChords(snapshot.val()))
      })
      .catch(err => {
        // TODO: handle error
      })
    }
  }
  return result
}

export default firebase_once
