import { firebaseUpdate } from './firebaseActions'
import { randomId } from '../helpers'


export const NEW_SET_NAME = 'NEW_SET_NAME'

export const newSetName = e => ({
  type: NEW_SET_NAME,
  payload: e.target.value
})

export const newSetSave = () => (dispatch, getState) => {

  const user = getState().user
  const setName = getState().newSet
  let updatedUser
  if (user.sets) {
    updatedUser = {
      ...user,
      sets: { ...user.sets , [randomId()]:{ name: setName, chords: [] } }
    }
  } else {
    updatedUser = {
      ...user,
      sets: { [randomId()]:{ name: setName, chords: [] } }
    }
  }
  console.log('updatedUser', updatedUser)
  return dispatch(firebaseUpdate('/users/' + user.uid, updatedUser))
}
