export const SET_FILTER = 'SET_FILTER'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
})

export const clearFilter = () => ({
  type: CLEAR_FILTER
})
