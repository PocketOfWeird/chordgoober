import { USER_STATE, LOGGING_OUT } from '../actions'


const user = (state = {}, action) => {
  switch (action.type) {
    case USER_STATE:
      return action.payload
    case LOGGING_OUT:
      return {}
    default:
      return state
  }
}

export default user
