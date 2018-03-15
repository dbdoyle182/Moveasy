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

    var city = $("#city-input").val();
    var state = $("#state-input").val();
    var cityName = $("#city-input").val() +
      ", " + $("#state-input").val();
    console.log(cityName);
    favs.push(cityName);
    console.log(favs);

    myCitiesRef.set(favs);
    $(".fav-cities-si").empty();
    for (i = 0; i < favs.length; i++) {

      var savedCityBtn = $(
        "<button type='button' class='hollow button favBtnSI' href='#' data-city='" + favs[i] + "'>" +
        favs[i] + "</button>");

      // savedCityBtn.attr("data-city", $("#city-input").val());
      // savedCityBtn.attr("data-state", $("#state-input").val());
      $(".fav-cities-si").append(savedCityBtn);
    }
  })
})