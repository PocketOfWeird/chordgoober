import { SET_VIEW } from '../actions'


const defaultState = {
  currentView: ['home']
}

const view = (state=defaultState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return Object.assign({}, state, { currentView: action.payload })
    default:
      return state
  }
}

export default view
