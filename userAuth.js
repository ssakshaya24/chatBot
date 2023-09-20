// userAuth.js
import firebase from "./Firebase.js";

// Function to sign up a new user
export const signUpWithEmailPassword = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to sign in an existing user
export const signInWithEmailPassword = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Function to sign out the current user
export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
