import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzamkUkfVnF1iG0hgvLsW-IXj5E7Se8Pk",
  authDomain: "tic-tac-toe-b433f.firebaseapp.com",
  projectId: "tic-tac-toe-b433f",
  storageBucket: "tic-tac-toe-b433f.appspot.com",
  messagingSenderId: "164428868002",
  appId: "1:164428868002:web:8f2054b2de2cc57ed22afb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
