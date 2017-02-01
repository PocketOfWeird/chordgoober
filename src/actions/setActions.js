import { updateUser } from './userActions'
import { changeCurrentViewForce } from './viewActions'


export const NEW_SET_NAME = 'NEW_SET_NAME'
export const NEW_SET_NAME_ERROR = 'NEW_SET_NAME_ERROR'
export const MAKING_NEW_SET = 'MAKING_NEW_SET'


const nameExists = (sets, name) => sets ? sets[name] : false

const newSetNameError = name => ({
  type: NEW_SET_NAME_ERROR,
  payload: name
})

export const newSetName = (sets, e) => dispatch => {
  const name = e.target.value
  if (nameExists(sets, name)) {
    return dispatch(newSetNameError(name))
  }
  return dispatch({
    type: NEW_SET_NAME,
    payload: name
  })
}

export const addToSet = (setId, chordIndex) => (dispatch, getState) => {
  const user = getState().user
  const chord = getState().chords[chordIndex]
  const updatedUser = {
    ...user,
    sets: {
      ...user.sets,
      [setId]: { ...user.sets[setId], [chordIndex]: chord }
    }
  }
  console.log('user.sets[setId]', user.sets[setId])
  return dispatch(updateUser(updatedUser))
}

export const makeNewSet = () => ({
  type: MAKING_NEW_SET
})

export const addToNewSet = (sets, chordIndex) => (dispatch, getState) => {
  const name = getState().set.newSetName
  if (nameExists(sets, name)) {
    return dispatch(newSetNameError(name))
  }
  const user = getState().user
  const chord = getState().chords[chordIndex]
  if (user.sets) {
    const userWithExistingSets = {
      ...user,
      sets: {
        ...user.sets,
        [name]: { [chordIndex]: chord }
      }
    }
    return dispatch(updateUser(userWithExistingSets))
  }
  const updatedUser = {
    ...user,
    sets: {
      [name]: { [chordIndex]: chord }
    }
  }
  return dispatch(updateUser(updatedUser))
}

export const removeSet = setId => (dispatch, getState) => {
  let user = getState().user
  if (nameExists(user.sets, setId)) {
    delete user.sets[setId]
    dispatch(changeCurrentViewForce(['sets']))
    return(dispatch(updateUser(user)))
  }
}
