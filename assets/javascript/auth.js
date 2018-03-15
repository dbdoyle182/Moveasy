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
firebase.auth().onAuthStateChanged(function(firebUser) {
  console.log("authstatechanged");
  user = firebUser;

  if (user) {
    $("#login-button").hide();
    $("#signup-button").hide();
    $("#pref-form").hide();
    $(".user-signed-in").html("<p>you are signed in</p>");
    $(".not-signed-in").hide();
    $(".signed-in").show();
    $("#city-buttons-nsi").hide();
    $("#city-buttons-si").show();
    $(".fav-cities-si").show();
    $(".fav-cities-nsi").hide();
    $(".favBtnSI").show();
    $(".favBtnNSI").hide();

    function showSavedBtns() {
      if (user) {
        var uid = user.uid;
        var myCitiesRef = database.ref("/" + uid + "/favCities");

        myCitiesRef.once("value", function(snap) {
          // get current favs from firebase
          var favs = snap.val();

          // if no value in firebase
          if (!Array.isArray(favs)) {
            // start with empty array
            favs = [];
          }
          myCitiesRef.set(favs);
          $(".fav-cities-si").empty();
          $("#city-buttons-si").empty();
          for (i = 0; i < favs.length; i++) {
            var favCity = favs[i].split(", ")[0];
            var favState = favs[i].split(", ")[1];
            var savedCityBtn = $(
              "<button type='button' class='hollow button favBtnSI' href='#' data-city='" +
                favCity +
                "' data-state='" +
                favState +
                "'>" +
                favs[i] +
                "</button>"
            );

            var savedCityBtn2 = savedCityBtn.clone();
            $(".fav-cities-si").append(savedCityBtn);
            $("#city-buttons-si").append(savedCityBtn2);
          }
        });
      }
    }
    showSavedBtns();
  } else {
    $("#login-button").show();
    $("#signup-button").show();
    $("#pref-form").show();
    //hide favorite buttons
    $(".user-signed-in").html("<p>you are signed out</p>");
    $(".not-signed-in").show();
    $(".signed-in").hide();
    $("#city-buttons-nsi").show();
    $("#city-buttons-si").hide();
    $(".fav-cities-si").hide();
    $(".fav-cities-nsi").show();
    $(".favBtnSI").hide();
    $(".favBtnNSI").show();
  }
});

//Create a new account by passing the new user's email address and password to createUserWithEmailAndPassword:

//If the new account was created, the user is signed in automatically.
//Users remain signed in, even when browser closes.
$(".signUp").click(function(event) {
  event.preventDefault();

  var email = $("#signUpEmail")
    .val()
    .trim();
  console.log(email);
  var password = $("#signUpPassword").val();
  console.log(password);
  var userInfo = {
    industry: $("#job-input-SU").val(),
    climate: $("#weather-input-SU").val(),
    housing: $("#housing-input-SU").val(),
    demog: $("#size-input-SU").val()
  };

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      var uid = user.uid;

      firebase
        .database()
        .ref("/" + uid)
        .set(userInfo);
      console.log(userInfo);
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
      console.log(errorMessage);
    });
});

//When a user signs in to the app, pass the user's email address and password to signInWithEmailAndPassword:
$(".signIn").click(function(event) {
  event.preventDefault();

  var email = $("#signInEmail").val();
  var password = $("#signInPassword").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
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
});

//sign-out click function
$(".signOut").click(function(event) {
  event.preventDefault();
  console.log("hello");
  firebase.auth().signOut();
  $("#login-button").show();
  $("#signup-button").show();
  $("#pref-form").show();
});
