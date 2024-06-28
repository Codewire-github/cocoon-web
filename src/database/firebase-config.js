import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseSensitiveConfigs } from "./sensitive_keys";

// Web app's Firebase configuration
const firebaseConfig = firebaseSensitiveConfigs;

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
//Firebase api for storing and retriving articles
