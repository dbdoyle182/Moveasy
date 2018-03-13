// Initialize Firebase
var config = {
  apiKey: "AIzaSyBoRf2opIwzk3_xyHoriWMOSHL6CLFhvKc",
  authDomain: "moving-app-38018.firebaseapp.com",
  databaseURL: "https://moving-app-38018.firebaseio.com",
  projectId: "moving-app-38018",
  storageBucket: "moving-app-38018.appspot.com",
  messagingSenderId: "760163561059"
};
firebase.initializeApp(config);

//Create a new account by passing the new user's email address and password
//to createUserWithEmailAndPassword:

//If the new account was created, the user is signed in automatically.
//Users remain signed in, even when browser closes.
$(".signUp").click(function(event) {
  event.preventDefault();

  email = $("#inputEmail").val();
  password = $("#inputPassword").val();

  var userInfo = {
    // below variables will eventually be input values
    industry: "marketing",
    climate: "mild",
    housing: "apartment",
    demog: "hispanic"
  };

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      var uID = firebase.auth().currentUser.uid;

      firebase
        .database()
        .ref("/" + uID)
        .set(userInfo);
      console.log(userInfo);
      console.log(user);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        alert("Email already in use.");
      } else if (errorCode === "auth/invalid-email") {
        alert("Invalid email address.");
      } else if (errorCode === "auth/weak-password") {
        alert("Weak password. Please pick another.");
      } else {
        alert(errorMessage);
      }
      console.log(errorCode);
    });
  // $("#inputEmail").remove();
  // $("#inputPassword").remove();
});

//When a user signs in to your app, pass the user's email address and password
//to signInWithEmailAndPassword:
$(".signIn").click(function(event) {
  event.preventDefault();

  email = $("#inputEmail").val();
  password = $("#inputPassword").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function() {
      var user = firebase.auth().currentUser;

      if (user != null) {
        var uid = user.uid;

        var database = firebase.database();
        database
          .ref()
          .child("/" + uid)
          .once("value")
          .then(function(snapshot) {
            var userInfo = snapshot.val();
            // ...
            console.log(userInfo);
            console.log(user);
          });
      }
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else if (errorCode === "auth/invalid-email") {
        alert("Invalid password.");
      } else if (errorCode === "auth/user-not-found") {
        alert("User not found.");
      } else {
        alert(errorMessage);
      }
      console.log(errorCode);
    });
  // $("#inputEmail").remove();
  // $("#inputPassword").remove();
});

//sign-out click function
$(".signOut").click(function(event) {
  event.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
    })
    .catch(function(error) {
      // An error happened.
    });
});
