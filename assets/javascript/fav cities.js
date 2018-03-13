$(".favCity").click(function(event) {
  event.preventDefault();

  if (!user) {
    alert("must be logged in to favorite a city");
    return;
  }

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

    var cityName = $(".cityTitle").text();
    favs.push(cityName);

    myCitiesRef.set(favs);

    //print whatever we need to print
  });
});
