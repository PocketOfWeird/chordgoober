import { loginWithGoogle } from '../db'


export const LOGGING_IN = 'LOGGING_IN'
export const USER_STATE = 'USER_STATE'

export const login = () => {
  loginWithGoogle()
  return {
    type: LOGGING_IN
  }
}

export const userState = state => ({
  type: USER_STATE,
  payload: state
})
