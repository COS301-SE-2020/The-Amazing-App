import firebase from 'firebase/app'
import 'firebase/firestre'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAtJvbPZhsItr_y2jHm49RAq_keCe-34dE",
    authDomain: "the-amazing-app-77843.firebaseapp.com",
    databaseURL: "https://the-amazing-app-77843.firebaseio.com",
    projectId: "the-amazing-app-77843",
    storageBucket: "the-amazing-app-77843.appspot.com",
    messagingSenderId: "975571477121",
    appId: "1:975571477121:web:5bfb0464c31fc460b8e380",
    measurementId: "G-6G6XLNP3JF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots:true});
   
export default firebase;