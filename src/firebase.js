import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ6eLv7OSPTvMeKmrhDie2VsZOT-8WEew",
  authDomain: "netflix-clone-6bc94.firebaseapp.com",
  projectId: "netflix-clone-6bc94",
  storageBucket: "netflix-clone-6bc94.appspot.com",
  messagingSenderId: "1083598154305",
  appId: "1:1083598154305:web:e8466ca0100e30a21ab4c0",
  measurementId: "G-YHNLPSDX5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (email, name, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.error("Signup error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error:", error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Logout function
const logout = () => {
  signOut(auth);
};

// Export functions
export { auth, db, signup, login, logout };
