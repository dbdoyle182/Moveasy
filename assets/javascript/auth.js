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
var database = firebase.database();
var user = null;
firebase.auth().onAuthStateChanged(function (firebUser) {
  console.log("authstatechanged");
  user = firebUser;

  if (user) {
    $("#login-button").hide();
    $("#signup-button").hide();
    $("#pref-form").hide();
    //show favorite buttons
    $(".user-signed-in").html("<p>you are signed in</p>");
  } else {
    $("#login-button").show();
    $("#signup-button").show();
    $("#pref-form").show();
    //hide favorite buttons
    $(".user-signed-in").html("<p>you are signed out</p>");
  }
});

//Create a new account by passing the new user's email address and password
//to createUserWithEmailAndPassword:

//If the new account was created, the user is signed in automatically.
//Users remain signed in, even when browser closes.
$(".signUp").click(function (event) {
  event.preventDefault();

  var email = $("#signUpEmail").val().trim();
  console.log(email)
  var password = $("#signUpPassword").val();
  console.log(password)
  var userInfo = {
    // below variables will eventually be input values
    industry: $("#job-input-SU").val(),
    climate: $("#weather-input-SU").val(),
    housing: $("#housing-input-SU").val(),
    demog: $("#size-input-SU").val()
  };

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      var uid = user.uid;

      firebase
        .database()
        .ref("/" + uid)
        .set(userInfo);
      console.log(userInfo);
    })
    .catch(function (error) {
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
      console.log(errorMessage);
    });
  // $(".reveal").hide();
  // $(".reveal-overlay").hide();
});

//When a user signs in to your app, pass the user's email address and password
//to signInWithEmailAndPassword:
$(".signIn").click(function (event) {
  event.preventDefault();

  var email = $("#signInEmail").val();
  var password = $("#signInPassword").val();


  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (user) {
      var uid = user.uid;

      var database = firebase.database();
      database
        .ref()
        .child("/" + uid)
        .once("value")
        .then(function (snapshot) {
          var userInfo = snapshot.val();
          // ...
          console.log(userInfo);
          console.log(user);
        });
    })
    .catch(function (error) {
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
  // $(".reveal").hide();
  // $(".reveal-overlay").hide();
});

//sign-out click function
$(".signOut").click(function (event) {
  event.preventDefault();
  console.log("hello");
  firebase.auth().signOut();
  $("#login-button").show();
  $("#signup-button").show();
  $("#pref-form").show();
  // $(".reveal").hide();
  // $(".reveal-overlay").hide();
});