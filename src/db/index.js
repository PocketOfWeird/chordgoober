import Firebase from 'firebase'
import settings from '../../.config/settings'


const firebase = Firebase.initializeApp(settings)
export default firebase


const googleAuth = new Firebase.auth.GoogleAuthProvider()

export const loginWithGoogle = () => {
  firebase.auth().signInWithRedirect(googleAuth)
}

export const logoutUser = () => {
  firebase.auth().signOut()
}

firebase.auth().getRedirectResult().catch(err => console.log(err))
