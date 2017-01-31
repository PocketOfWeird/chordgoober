export const FIREBASE_UPDATE = 'FIREBASE_UPDATE'

export const firebaseUpdate = (path, values) => ({
  type: FIREBASE_UPDATE,
  path,
  values
})
