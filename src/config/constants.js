import Rebase from 're-base'
import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyAy4BekrK5nsy5Nf5pfo99EszAYlhJdojY",
    authDomain: "watch-out-81324.firebaseapp.com",
    databaseURL: "https://watch-out-81324.firebaseio.com",
    projectId: "watch-out-81324",
    storageBucket: "watch-out-81324.appspot.com",
    messagingSenderId: "315113657848"
  };
const app = firebase.initializeApp(config)


export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();