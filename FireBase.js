// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";


// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiQNElUio0jd-Datep4tYAtqhTfN84NvQ",
    authDomain: "my-mithril-todo-project.firebaseapp.com",
    databaseURL: "https://my-mithril-todo-project.firebaseio.com",
    projectId: "my-mithril-todo-project",
    storageBucket: "my-mithril-todo-project.appspot.com",
    messagingSenderId: "391603322987",
    appId: "1:391603322987:web:1079fb22bb0e708f0ab12e",
    measurementId: "G-DC8T99P59Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export var db = firebase.firestore();