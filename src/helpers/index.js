export const newUserState = user => ({
  uid: user.uid,
  email: user.email,
  photoURL: user.photoURL,
  displayName: user.displayName,
  budgets: {}
})
