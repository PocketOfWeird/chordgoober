import { loginWithGoogle, logoutUser } from '../db'


export const LOGGING_IN = 'LOGGING_IN'
export const USER_STATE = 'USER_STATE'
export const LOGGING_OUT = 'LOGGING_OUT'

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

export const logout = () => {
  logoutUser()
  return {
    type: LOGGING_OUT
  }
}
