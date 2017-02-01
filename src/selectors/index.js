export const isLoggedIn = state => state.user.uid ? true : false

export const userHasSets = state => state.user.sets ? true : false

export const getCurrentView = state => state.view[state.view.length - 1]

export const getViewParams = state => getCurrentView(state)[1]
