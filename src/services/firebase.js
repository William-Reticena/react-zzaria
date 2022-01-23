import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-ztV67lfqLWbMMdMIDgI5KSnNO17E7Ko",
  authDomain: "reactzzaria-cb182.firebaseapp.com",
  projectId: "reactzzaria-cb182",
  storageBucket: "reactzzaria-cb182.appspot.com",
  messagingSenderId: "642464930174",
  appId: "1:642464930174:web:feb7b37dd3100fd16f7b2f",
  measurementId: "G-13LDVDY48P"
}

firebase.initializeApp(firebaseConfig)

export default firebase