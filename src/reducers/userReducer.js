import { USER_STATE } from '../actions'


const user = (state = {}, action) => {
  switch (action.type) {
    case USER_STATE:
      return action.payload
    default:
      return state
  }
}

export default user
