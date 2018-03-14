var trendCities = [
  "Seattle, WA",
  "Boston, MA",
  "Boulder, CO",
  "Charlotte, NC",
  "New York, NY",
  "Chicago, IL",
  "Cincinnati, OH",
  "Miami, FL",
  "Nashville, TN",
  "Salt Lake City, UT"
];
var favCities = [];

//function to render city buttons
function showCityBtn() {
  $(".trending-cities").empty();

  for (i = 0; i < trendCities.length; i++) {
    var trendCityBtn = $(
      "<button type='button' class='hollow button' href='#'>" +
        trendCities[i] +
        "</button>"
    );
    trendCityBtn.attr("data-name", trendCities[i]);
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
      "<button type='button' class='hollow button' href='#'>" +
        favCities[i] +
        ", " +
        $("#state-input").val() +
        "</button>"
    );
    favCityBtn.attr("data-name", favCities[i] + ", " + $("#state-input").val());
  }
  $(".fav-cities").append(favCityBtn);
  $("#city-buttons").append(favCityBtn);
  $("#city-input").val(null);
});

showCityBtn();
