export const newUserState = user => ({
  uid: user.uid,
  email: user.email,
  photoURL: user.photoURL,
  displayName: user.displayName
})

export const randomId = () => {
  return Math.random().toString(36).substr(2,24)
}
