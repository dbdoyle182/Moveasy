$("#submit-button").click(function (event) {
  event.preventDefault();

  if (!user) {
    console.log("not logged in");
    return;
  }

  var uid = user.uid;
  var myCitiesRef = database.ref("/" + uid + "/favCities");

  myCitiesRef.once("value", function (snap) {
    // get current favs from firebase
    var favs = snap.val();

    // if no value in firebase
    if (!Array.isArray(favs)) {
      // start with empty array
      favs = [];
    }

    var cityName = $("#city-input").val() + ", " + $("#state-input").val();
    console.log(cityName);
    favs.push(cityName);
    console.log(favs);

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
});