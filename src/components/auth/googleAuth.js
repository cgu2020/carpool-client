import firebase from "firebase";
import "firebaseui/dist/firebaseui.css";
var firebaseui = require("firebaseui");

var login = false;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    login = true;
    var uid = user.uid;
    var name = user.displayName;
    var icon = user.icon;
    console.log("logged in");
    // ...
  } else {
    //prompt a login
    console.log("not logged in");
  }
});

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.default.auth());

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      console.log("Success");
      return true;
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "#",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

ui.start("#firebaseui-auth-container", uiConfig);
