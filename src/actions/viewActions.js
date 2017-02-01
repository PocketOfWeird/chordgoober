export const CHANGE_CURRENT_VIEW = 'CHANGE_CURRENT_VIEW'
export const CHANGE_CURRENT_VIEW_FORCE = 'CHANGE_CURRENT_VIEW_FORCE'
export const GO_BACK = 'GO_BACK'

export const changeCurrentView = viewArray => ({
  type: CHANGE_CURRENT_VIEW,
  payload: viewArray
})

// removes previous view from history
export const changeCurrentViewForce = viewArray => ({
  type: CHANGE_CURRENT_VIEW_FORCE,
  payload: viewArray
})

export const goBack = () => ({
  type: GO_BACK
})
