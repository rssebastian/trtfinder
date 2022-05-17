import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClinicsContextProvider } from './store/clinics-context';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJfFlKJSUQufk7L6cqm0xzNY5nYzoj5nE',
  authDomain: 'trtfinder-6f7e0.firebaseapp.com',
  databaseURL: 'https://trtfinder-6f7e0-default-rtdb.firebaseio.com',
  projectId: 'trtfinder-6f7e0',
  storageBucket: 'trtfinder-6f7e0.appspot.com',
  messagingSenderId: '1036401597614',
  appId: '1:1036401597614:web:8e6e7f28a138b4ad0da13f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClinicsContextProvider>
    <App />
  </ClinicsContextProvider>
);
