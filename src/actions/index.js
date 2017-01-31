export * from './userActions'
export * from './viewActions'
export * from './firebaseActions'
export * from './chordActions'

export const INITIALIZE = 'INITIALIZE'

export const initializeStore = () => ({
  type: INITIALIZE
})
