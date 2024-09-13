// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpIIQ3EUs7298eEUM5z9lkvpSMxYN0nq8",
  authDomain: "aconews-585dd.firebaseapp.com",
  projectId: "aconews-585dd",
  storageBucket: "aconews-585dd.appspot.com",
  messagingSenderId: "390545457201",
  appId: "1:390545457201:web:87386fa9e40fe6c2599510",
  measurementId: "G-E20C91ZQ32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);