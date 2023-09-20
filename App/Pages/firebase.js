// Import the necessary modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDv-eROX2YJQAvXTcjAigO6kQHScWM1LOE',
  authDomain: 'reactnativemad.firebaseapp.com',
  projectId: 'reactnativemad',
  storageBucket: 'reactnativemad.appspot.com',
  messagingSenderId: '1037342887007',
  appId: '1:1037342887007:web:0a5e0793f4ff7188dd5fea',
  measurementId: 'G-WF2M1W414G', // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with AsyncStorage for persistence
const auth = getAuth(app); // Initialize the Firebase Authentication module

// Enable persistence with AsyncStorage
initializeAuth(auth, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth }; // Export the initialized authentication module for use in your components
