import firebase from "firebase";
import "firebaseui/dist/firebaseui.css";
import { db, auth } from "./firebaseConfig";
var firebaseui = require("firebaseui");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("logged in");
  } else {
    //prompt a login
    console.log("not logged in");
  }
});

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(auth);

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      console.log("Success");
      console.log(authResult);
      const user = authResult.user;
      db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
      return true;
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "#",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

ui.start("#firebaseui-auth-container", uiConfig);

export function googleLogout() {
  auth.signOut().then(() => {
    console.log("Signed out");
  });
}
