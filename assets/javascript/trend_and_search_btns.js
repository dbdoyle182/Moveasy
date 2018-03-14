var trendCities = [
  {
    city: "Boston",
    state: "MA"
  },
  {
    city: "Chicago",
    state: "IL"
  },
  {
    city: "Seattle",
    state: "WA"
  },
  {
    city: "Boulder",
    state: "CO"
  },
  {
    city: "Charlotte",
    state: "NC"
  },
  {
    city: "New York",
    state: "NY"
  },
  {
    city: "Cincinnati",
    state: "OH"
  },
  {
    city: "Miami",
    state: "FL"
  },
  {
    city: "Nashville",
    state: "TN"
  },
  {
    city: "Salt Lake City",
    state: "UT"
  }
];

var favCities = [];

//function to render city buttons
function showCityBtn() {
  $(".trending-cities").empty();

  for (i = 0; i < trendCities.length; i++) {
    var trendCityBtn = $(
      "<button type='button' class='hollow button' href='#'>" +
        trendCities[i].city +
        ", " +
        trendCities[i].state +
        "</button>"
    );
    trendCityBtn.attr("data-city", trendCities[i].city);
    trendCityBtn.attr("data-state", trendCities[i].state);
    $(".trending-cities").append(trendCityBtn);
  }
}

//click function to generate new button based on user input
$("#submit-button").click(function(event) {
  event.preventDefault();
  $(".favorite-cities").empty();

  var submission = $("#city-input").val();
  console.log(submission);

  favCities.push(submission);

  for (i = 0; i < favCities.length; i++) {
    var favCityBtn = $(
      "<button type='button' class='hollow button favBtn' href='#'>" +
        favCities[i] +
        ", " +
        $("#state-input").val() +
        "</button>"
    );
    favCityBtn.attr("data-name", favCities[i] + ", " + $("#state-input").val());

    var favCityBtn2 = favCityBtn.clone();
  }
  $(".fav-cities-notsi").append(favCityBtn);
  $("#city-buttons-nsi").append(favCityBtn2);
  //$("#city-input").val(null);
});

showCityBtn();
