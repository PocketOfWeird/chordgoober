import { CHANGE_CURRENT_VIEW, CHANGE_CURRENT_VIEW_FORCE, GO_BACK } from '../actions'

const pop = state => state.slice(0, state.length - 1)

const view = (state=[['home']], action) => {
  switch (action.type) {
    case CHANGE_CURRENT_VIEW:
      return [...state, action.payload]
    case CHANGE_CURRENT_VIEW_FORCE:
      return [...pop(state), action.payload]
    case GO_BACK:
      return pop(state)
    default:
      return state
  }
}

export default view
