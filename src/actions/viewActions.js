export const SET_VIEW = 'SET_VIEW'
export const GO_BACK = 'GO_BACK'

export const setView = viewArray => ({
  type: SET_VIEW,
  payload: viewArray
})

export const goBack = () => ({
  type: GO_BACK
})
