export * from './userActions'
export * from './viewActions'
export * from './firebaseActions'
export * from './chordActions'
export * from './filterActions'
export * from './setActions'

export const INITIALIZE = 'INITIALIZE'

export const initializeStore = () => ({
  type: INITIALIZE
})
