import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './css/index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0ONm2dEL4MZ-sGAORjHkd6KZDd5HbpeM",
  authDomain: "savethearctic-adhoc.firebaseapp.com",
  projectId: "savethearctic-adhoc",
  storageBucket: "savethearctic-adhoc.appspot.com",
  messagingSenderId: "1026501406830",
  appId: "1:1026501406830:web:0087803e9b57ff694ef67f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);