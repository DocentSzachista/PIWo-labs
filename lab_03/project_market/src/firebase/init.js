// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC38y8Neb4dKqg91C3-e5XN3OVsGr0WqBs",

  authDomain: "piwo-ddf34.firebaseapp.com",

  projectId: "piwo-ddf34",

  storageBucket: "piwo-ddf34.appspot.com",

  messagingSenderId: "280544808490",

  appId: "1:280544808490:web:4b19dbe1416c858b5c3d53",

  measurementId: "G-VY7MBDZ2M3"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);