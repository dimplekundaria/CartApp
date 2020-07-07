import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbi8sTWzuW5uIM2R9iWpJamDG2WNe3olM",
  authDomain: "cart-d7db6.firebaseapp.com",
  databaseURL: "https://cart-d7db6.firebaseio.com",
  projectId: "cart-d7db6",
  storageBucket: "cart-d7db6.appspot.com",
  messagingSenderId: "85505799651",
  appId: "1:85505799651:web:0f4f6be6751b222bc65cd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

