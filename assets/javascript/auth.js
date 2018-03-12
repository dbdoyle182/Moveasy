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

//When a new user signs up using sign-up form,
//complete any new account validation steps that your app requires,
//such as verifying that the new account's password was correctly typed
//and meets your complexity requirements.

//Create a new account by passing the new user's email address and password
//to createUserWithEmailAndPassword:
$(".signUp").click(function(event) {
  event.preventDefault();

  // $("#inputEmail").remove();
  // $("#inputPassword").remove();

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
      // ...
    });
});

//If the new account was created, the user is signed in automatically.

//The steps for signing in a user with a password are similar to
//the steps for creating a new account. In your app's sign-in page, do the following:

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
      // ...
    });
});

/*firebase.auth().signInWithEmailAndPassword(email, password)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });*/
