import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxAH-ksIhmFP2TXLUdP51tUTUydw5Nw-U",
  authDomain: "tienda-ailin.firebaseapp.com",
  projectId: "tienda-ailin",
  storageBucket: "tienda-ailin.appspot.com",
  messagingSenderId: "237067220467",
  appId: "1:237067220467:web:3026f26cf4cfdcfbf60e86"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)