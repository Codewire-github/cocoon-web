// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDltFOzMEHkxCgFhmPCrAWRIqGh-9LqTqQ",
  authDomain: "react-auth-923e9.firebaseapp.com",
  projectId: "react-auth-923e9",
  storageBucket: "react-auth-923e9.appspot.com",
  messagingSenderId: "872063332409",
  appId: "1:872063332409:web:be61b4ac4f9b3dfb025de8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

//Firebase api for authentication
