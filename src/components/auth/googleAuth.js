import firebase from "firebase";
import "firebaseui/dist/firebaseui.css";
import { db, auth } from "./firebaseConfig";
var firebaseui = require("firebaseui");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    localStorage.setItem("name", user.displayName);
    localStorage.setItem("authState", true);

    console.log("OnAuthStateChanged: logged in");
  } else {
    //prompt a login
    localStorage.setItem("authState", "");
    console.log("OnAuthStateChanged: not logged in");
  }
});

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(auth);

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const token = authResult.credential.idToken;
      localStorage.setItem("idToken", token);
      localStorage.setItem("authState", "true");

      const user = authResult.user;
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("photoURL", user.photoURL);
      db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        uid: user.uid,
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
    localStorage.setItem("authState", "");
    console.log("Signed out");
  });
}
