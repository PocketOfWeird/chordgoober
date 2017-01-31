import { SET_VIEW, GO_BACK } from '../actions'


const view = (state=[['home']], action) => {
  switch (action.type) {
    case SET_VIEW:
      return [...state, action.payload]
    case GO_BACK:
      return state.slice(0, state.length - 1)
    default:
      return state
  }
}

export default view
