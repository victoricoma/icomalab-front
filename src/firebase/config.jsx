import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfRozO4K43PaEJWSrHZLnLhUDR-iALBeY",
  authDomain: "front-icomalab.firebaseapp.com",
  projectId: "front-icomalab",
  storageBucket: "front-icomalab.appspot.com",
  messagingSenderId: "973493663944",
  appId: "1:973493663944:web:bc273b6e53004ed8e48dfd",
  measurementId: "G-52NVV7NQS4"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}