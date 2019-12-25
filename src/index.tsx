import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const firebaseConfig = {
  apiKey: "AIzaSyAjMd3IpD-_0uC78g0avWsNQptr3_RHJvY",
  authDomain: "codenames-keycard.firebaseapp.com",
  databaseURL: "https://codenames-keycard.firebaseio.com",
  projectId: "codenames-keycard",
  storageBucket: "codenames-keycard.appspot.com",
  messagingSenderId: "355003535679",
  appId: "1:355003535679:web:3a149187e407713e3d438a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
