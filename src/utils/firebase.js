// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEdSSx-ACTRsGpbNqKbwm-4p6w6Gvbkto",
  authDomain: "netflix-gpt-e270a.firebaseapp.com",
  projectId: "netflix-gpt-e270a",
  storageBucket: "netflix-gpt-e270a.appspot.com",
  messagingSenderId: "910947242409",
  appId: "1:910947242409:web:c72e103fdbf2923b2fb4b8",
  measurementId: "G-DH3EDBV3N8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
