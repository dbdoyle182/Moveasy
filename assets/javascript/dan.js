// Object array for trending cities
var preloadArr = [
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
// Determines which random city to load upon page open
var randomCity = Math.floor(Math.random() * preloadArr.length);
// Sets the initial city and state variables
var city = preloadArr[randomCity].city;
var state = preloadArr[randomCity].state;
// Function for the Google Maps widget
var openMap = function() {
  // Clears the map div
  $("#map").empty();
  var apiKey = "AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY";
  var queryURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    city +
    "," +
    state +
    "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY";
  // Calls the Geocoding API to retrieve the Lat. and Lon. of searched city
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var latitude = response.results[0].geometry.location.lat;
    // console.log(latitude);
    var longitude = response.results[0].geometry.location.lng;
    // console.log(longitude)

    // Function that takes the converted lat and lon and places a marker on that spot with a map around it
    function initMap() {
      var uluru = { lat: latitude, lng: longitude };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru
      });

      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

    initMap();
  });
};
// Function for the weater widget
var weatherFunc = function() {
  // var city = "Rochester";
  // var state = "NY";
  // Clears out the weather div
  $("#weather-widget").empty();
  var apiKey = "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY";
  var queryURL =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    city +
    "," +
    state +
    "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY";

  //CHANGES PAGE TITLING

  $("#city-titling").html(city);
 
    
  // Ajax call to convert searched city into lat and lon coordinates
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var latitude = response.results[0].geometry.location.lat;
    var longitude = response.results[0].geometry.location.lng;
    var apiKey = "&appid=70b17dee0232f4d7a21df681d272d59b&units=imperial";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      latitude +
      "&lon=" +
      longitude +
      apiKey;
    // Creates an object array with a space for each day of the week
    var week = [
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      },
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      },
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      },
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      },
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      },
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      },
      {
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false,
        snow: 0,
        rain: 0
      }
    ];
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Loops through the array of data and collects data based on the day of the week
      for (var i = 0; i < response.list.length; i++) {
        // Converts provided time data into usable value
        var unixTime = response.list[i].dt;
        var newDate = moment(unixTime, "X");
        var convertedDOW = moment(newDate).format("ddd");
        var convertedDate = moment(newDate).format("MMM Do");
        var fullDate = convertedDOW + " " + convertedDate;
        // Seven if statements that compile the information per 3 hour increments
        if (convertedDOW === "Mon") {
          week[0].count++;
          week[0].temp += response.list[i].main.temp;
          week[0].cloud += response.list[i].clouds.all;
          week[0].humidity += response.list[i].main.humidity;
          week[0].present = true;
          week[0].day = convertedDOW;
          week[0].date = convertedDate;
          // week[0].snow += response.list[i].snow["3h"];
          // week[0].rain += response.list[i].rain["3h"]
        }
        if (convertedDOW === "Tue") {
          week[1].count++;
          week[1].temp += response.list[i].main.temp;
          week[1].cloud += response.list[i].clouds.all;
          week[1].humidity += response.list[i].main.humidity;
          week[1].present = true;
          week[1].day = convertedDOW;
          week[1].date = convertedDate;
          // week[1].snow += response.list[i].snow["3h"];
          // week[1].rain += response.list[i].rain;["3h"]
        }
        if (convertedDOW === "Wed") {
          week[2].count++;
          week[2].temp += response.list[i].main.temp;
          week[2].cloud += response.list[i].clouds.all;
          week[2].humidity += response.list[i].main.humidity;
          week[2].present = true;
          week[2].day = convertedDOW;
          week[2].date = convertedDate;
          // week[2].snow += response.list[i].snow["3h"];
          // week[2].rain += response.list[i].rain["3h"]
        }
        if (convertedDOW === "Thu") {
          week[3].count++;
          week[3].temp += response.list[i].main.temp;
          week[3].cloud += response.list[i].clouds.all;
          week[3].humidity += response.list[i].main.humidity;
          week[3].present = true;
          week[3].day = convertedDOW;
          week[3].date = convertedDate;
          // week[3].snow += response.list[i].snow["3h"];
          // week[3].rain += response.list[i].rain["3h"]
        }
        if (convertedDOW === "Fri") {
          week[4].count++;
          week[4].temp += response.list[i].main.temp;
          week[4].cloud += response.list[i].clouds.all;
          week[4].humidity += response.list[i].main.humidity;
          week[4].present = true;
          week[4].day = convertedDOW;
          week[4].date = convertedDate;
          // week[4].snow += response.list[i].snow["3h"];
          // week[4].rain += response.list[i].rain["3h"]
        }
        if (convertedDOW === "Sat") {
          week[5].count++;
          week[5].temp += response.list[i].main.temp;
          week[5].cloud += response.list[i].clouds.all;
          week[5].humidity += response.list[i].main.humidity;
          week[5].present = true;
          week[5].day = convertedDOW;
          week[5].date = convertedDate;
          // week[5].snow += response.list[i].snow["3h"];
          // week[5].rain += response.list[i].rain["3h"]
        }
        if (convertedDOW === "Sun") {
          week[6].count++;
          week[6].temp += response.list[i].main.temp;
          week[6].cloud += response.list[i].clouds.all;
          week[6].humidity += response.list[i].main.humidity;
          week[6].present = true;
          week[6].day = convertedDOW;
          week[6].date = convertedDate;
          // week[6].snow += response.list[i].snow["3h"];
          // week[6].rain += response.list[i].rain["3h"]
        }
      }
      // For loop that goes through the object array after the data is finished compiling
      for (var j = 0; j < week.length; j++) {
        var dailyTemp = week[j].temp / week[j].count;
        var cloudAvg = week[j].cloud / week[j].count;
        var rainAvg = week[j].rain / week[j].count;
        var snowAvg = week[j].snow / week[j].count;
        // If statement that determines if they have a full days worth of data to ensure four days no matter the time of day the call is performed
        if (week[j].count === 8) {
          // console.log(week[j].date);
          // console.log(Math.floor(dailyTemp));
          var dailyWeather = $("<div>");
          dailyWeather.css({ float: "left", width: "100px" });
          var dayName = $("<p>");
          dayName.css({ "text-align": "center" });
          var dayMonth = $("<p>");
          dayMonth.css({ "text-align": "center" });
          var tempDay = $("<h4>");
          tempDay.css({ "text-align": "center" });
          var skyType = $("<img>");
          skyType.css({ "padding-left": "34px" });
          dayName.text(week[j].day);
          dayMonth.text(week[j].date);
          tempDay.text(Math.floor(dailyTemp) + "°");
          if (cloudAvg > 80 && snowAvg < 1 && rainAvg < 1) {
            // console.log("Very cloudy")
            // console.log("----------")
            skyType.attr("src", "./assets/images/003-cloudy.png");
          }
          if (cloudAvg > 60 && snowAvg < 1 && rainAvg < 1) {
            // console.log("Moderately cloudy")
            // console.log("----------")
            skyType.attr("src", "./assets/images/004-cloud-1.png");
          }
          if (cloudAvg > 20 && snowAvg < 1 && rainAvg < 1) {
            // console.log("Scattered Clouds")
            // console.log("----------")
            skyType.attr("src", "./assets/images/006-cloud.png");
          }
          if (cloudAvg < 20 && snowAvg < 1 && rainAvg < 1) {
            // console.log("Clear skies")
            // console.log("----------")
            skyType.attr("src", "./assets/images/007-sun.png");
          } else { 
            skyType.attr("src", "./assets/images/007-sun.png")
          }
          // if (snowAvg > 1) {
          //     console.log("Snow incoming");
          //     console.log("----------");
          //     skyType.attr("src", "./assets/images/001-weather.png")
          // };
          // if (rainAvg > 1) {
          //     console.log("Rain incoming");
          //     console.log("----------");
          //     skyType.attr("src", "./assets/images/005-rain.png")
          // };
          // if (rainAvg > 3) {
          //     console.log("Heavy Rain");
          //     console.log("----------");
          //     skyType.attr("src", "./assets/images/002-lightning.png")
          // }

          $("#weather-widget").append(dailyWeather);
          dailyWeather.append(dayName);
          dailyWeather.append(dayMonth);
          dailyWeather.append(skyType);
          dailyWeather.append(tempDay);
        }
      }
    });
    // This ajax call pulls from the single day weather and develops a similar yet more detailed response then the above
    var apiKey = "&appid=70b17dee0232f4d7a21df681d272d59b&units=imperial";
    var queryURL2 =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      apiKey;
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
      var imgLink =
        "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

      var todayDate = moment().format("ddd");
      var todayMonth = moment().format("MMM Do");
      var todayTemp = Math.floor(response.main.temp);
      var firstLet = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
      var todayFore = firstLet(response.weather[0].description);
      var currentDay = $("<div>");
      currentDay.css({
        width: "130px",
        float: "left",
        "text-align": "center",
        border: "1px solid black",
        "border-radius": "6px"
      });
      var currentDate = $("<h3>");
      currentDate.text(todayDate);
      var currentMonth = $("<h3>");
      currentMonth.text(todayMonth);
      var currentImg = $("<img>");
      currentImg.attr("src", imgLink);
      var currentTemp = $("<h4>");
      currentTemp.text(todayTemp + "°");
      var currentFore = $("<p>");
      currentFore.text(todayFore);
      $("#weather-widget").prepend(currentDay);
      currentDay.append(currentDate);
      currentDay.append(currentMonth);
      currentDay.append(currentImg);
      currentDay.append(currentTemp);
      currentDay.append(currentFore);
 widget-work


    //   if (response.weather[0].icon === "01d" || response.weather[0].icon === "10d") {
    //       $("body").css({"background-image":"url(assets/images/city-cloudy-daytime.jpg"})
    //       console.log("clear skies")
    //   }
 master
    });
  });
};
// Function for the real estate widget
var realEstate = function() {
  // Clears the real estate div
  // $("#realEstateDiv").empty();
  $(".realty").empty();
  // Creates the header for the section dynamically
  // var realHeader = $("<h2>");
  // realHeader.text("Real Estate Listings")
  // $("#realEstateDiv").append(realHeader);
  // Function that grabs the first letter of a string and capitalizes it
  var firstLet = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  firstLet(city);
  // console.log(city);
  // console.log(state);
  // Function to convert longform state into it's respective abbrieviation
  // function abbrState(input, to){

  //     var states = [
  //         ['Arizona', 'AZ'],
  //         ['Alabama', 'AL'],
  //         ['Alaska', 'AK'],
  //         ['Arizona', 'AZ'],
  //         ['Arkansas', 'AR'],
  //         ['California', 'CA'],
  //         ['Colorado', 'CO'],
  //         ['Connecticut', 'CT'],
  //         ['Delaware', 'DE'],
  //         ['Florida', 'FL'],
  //         ['Georgia', 'GA'],
  //         ['Hawaii', 'HI'],
  //         ['Idaho', 'ID'],
  //         ['Illinois', 'IL'],
  //         ['Indiana', 'IN'],
  //         ['Iowa', 'IA'],
  //         ['Kansas', 'KS'],
  //         ['Kentucky', 'KY'],
  //         ['Kentucky', 'KY'],
  //         ['Louisiana', 'LA'],
  //         ['Maine', 'ME'],
  //         ['Maryland', 'MD'],
  //         ['Massachusetts', 'MA'],
  //         ['Michigan', 'MI'],
  //         ['Minnesota', 'MN'],
  //         ['Mississippi', 'MS'],
  //         ['Missouri', 'MO'],
  //         ['Montana', 'MT'],
  //         ['Nebraska', 'NE'],
  //         ['Nevada', 'NV'],
  //         ['New Hampshire', 'NH'],
  //         ['New Jersey', 'NJ'],
  //         ['New Mexico', 'NM'],
  //         ['New York', 'NY'],
  //         ['North Carolina', 'NC'],
  //         ['North Dakota', 'ND'],
  //         ['Ohio', 'OH'],
  //         ['Oklahoma', 'OK'],
  //         ['Oregon', 'OR'],
  //         ['Pennsylvania', 'PA'],
  //         ['Rhode Island', 'RI'],
  //         ['South Carolina', 'SC'],
  //         ['South Dakota', 'SD'],
  //         ['Tennessee', 'TN'],
  //         ['Texas', 'TX'],
  //         ['Utah', 'UT'],
  //         ['Vermont', 'VT'],
  //         ['Virginia', 'VA'],
  //         ['Washington', 'WA'],
  //         ['West Virginia', 'WV'],
  //         ['Wisconsin', 'WI'],
  //         ['Wyoming', 'WY'],
  //     ];

  //     if (to == 'abbr'){
  //         input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  //         for(i = 0; i < states.length; i++){
  //             if(states[i][0] == input){
  //                 return(states[i][1]);
  //             };
  //         };
  //     };
  // };
  // state = abbrState(state, "abbr");
  // API url
  var queryURL =
    "https://staging-api.propmix.io/mlslite/idx/v1/GetListingsByGeo?access_token=c86d04057f3ea89f4e187281244927f37c62e13b80dd6f3a9462736409a7fe30&EffectiveDate=2018-03-13&PropertyType=Residential&City=" +
    city +
    "&State=" +
    state +
    "&MonthsBack=6&Rental=1&imagesON=1";
  // AJAX call to the real estate api
  $.ajax({
    url: queryURL,
    method: "GET",
    datatype: "jsonp"
  }).then(function(response) {
    // For loops that goes through each listing to gather information
    for (var i = 0; i < 5; i++) {
      var house = response.Listings[i];
      // Build the html that houses the selected content
      // var houseDiv = $("<div>");
      // houseDiv.addClass("house");
      // console.log(house.ImageURLs[0]);
      var houseImg = $("<img src=" + house.ImageURLs[0] + ">");
      // houseDiv.append(houseImg);
      // var houseInfo;
      // // console.log(house.Address);
      // // console.log("For: " + house.ListingType);
      if (house.ListingType === "Sale") {
        // console.log(house.ListPrice + "$");
        houseInfo = $(
          "<p>" +
            house.Address +
            "<br> For: " +
            house.ListingType +
            "<br>" +
            house.ListPrice +
            "$ <br>" +
            "Listed by: " +
            house.ListOfficeName +
            "</p>"
        );
      }
      if (house.ListingType === "Rental") {
        // console.log(house.ListPrice + "$ per month");
        houseInfo = $(
          "<p>" +
            house.Address +
            "<br>" +
            house.ListingType +
            "<br>" +
            house.ListPrice +
            "$ per month <br>" +
            "Listed by: " +
            house.ListOfficeName +
            "</p>"
        );
      }
      if (house.ListingType != "Rental" && house.ListingType != "Sale") {
        houseInfo = $(
          "<p>" +
            house.Address +
            "<br> For: Sale <br>" +
            house.ListPrice +
            "$<br>" +
            "Listed by: " +
            house.ListOfficeName +
            "</p>"
        );
      }
      // // console.log("Listed by: " + house.ListOfficeName);

      $("#panel" + [i]).append(houseImg);
      $("#panel" + [i]).prepend(houseInfo);

      // $("#realEstateDiv").append(houseDiv);

      // console.log("------------")
    }
  });
};

// Function for the State Population widget
var statePopulation = function(stateAbbreviation) {
  var states = [
    ["Arizona", "AZ"],
    ["Alabama", "AL"],
    ["Alaska", "AK"],
    ["Arizona", "AZ"],
    ["Arkansas", "AR"],
    ["California", "CA"],
    ["Colorado", "CO"],
    ["Connecticut", "CT"],
    ["Delaware", "DE"],
    ["Florida", "FL"],
    ["Georgia", "GA"],
    ["Hawaii", "HI"],
    ["Idaho", "ID"],
    ["Illinois", "IL"],
    ["Indiana", "IN"],
    ["Iowa", "IA"],
    ["Kansas", "KS"],
    ["Kentucky", "KY"],
    ["Kentucky", "KY"],
    ["Louisiana", "LA"],
    ["Maine", "ME"],
    ["Maryland", "MD"],
    ["Massachusetts", "MA"],
    ["Michigan", "MI"],
    ["Minnesota", "MN"],
    ["Mississippi", "MS"],
    ["Missouri", "MO"],
    ["Montana", "MT"],
    ["Nebraska", "NE"],
    ["Nevada", "NV"],
    ["New Hampshire", "NH"],
    ["New Jersey", "NJ"],
    ["New Mexico", "NM"],
    ["New York", "NY"],
    ["North Carolina", "NC"],
    ["North Dakota", "ND"],
    ["Ohio", "OH"],
    ["Oklahoma", "OK"],
    ["Oregon", "OR"],
    ["Pennsylvania", "PA"],
    ["Rhode Island", "RI"],
    ["South Carolina", "SC"],
    ["South Dakota", "SD"],
    ["Tennessee", "TN"],
    ["Texas", "TX"],
    ["Utah", "UT"],
    ["Vermont", "VT"],
    ["Virginia", "VA"],
    ["Washington", "WA"],
    ["West Virginia", "WV"],
    ["Wisconsin", "WI"],
    ["Wyoming", "WY"]
  ];
  var targetedStateArray = states.filter(function(stateArray) {
    //returns the state array with the matching initials
    return stateArray[1].toLowerCase() === stateAbbreviation.toLowerCase();
  })[0];
  var longStateName = targetedStateArray[0];
  //ajax call that returns an array of states and their populations
  $.ajax({
    url:
      "https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=state:*&DATE=9&key=8d04428cd17194c6f24d08b4e7bbb0dd9b0667e3",
    method: "GET"
  }).then(function(response) {
    var stateInfoArray = response.filter(function(item) {
      //return the array with the same state name as the argument
      return item[1].toLowerCase() === longStateName.toLowerCase();
    })[0];

        $("#name-of-city").text(stateInfoArray[1]);
        $("#pop").text(population);
        
        if (population < 1000){
        $("#city-size-cat").text("village");
        $("size-symbol").attr('src', 'assets/images/city-icon-very-small')
        };

        if (population > 1000 && population < 20001){
        $("#city-size-cat").text("Town");
        $("size-symbol").attr('src', 'assets/images/city-icon-very-small')
        };

        if (population > 20000 && population < 100001){
        $("#city-size-cat").text("Large town");
        $("size-symbol").attr('src', 'assets/images/city-icon-small')
        };

        if (population > 100000 && population < 300001){
        $("#city-size-cat").text("City");
        $("size-symbol").attr('src', 'assets/images/city-icon-large')
        };

        if (population > 300000 && population < 1000001){
        $("#city-size-cat").text("Large city");
        $("size-symbol").attr('src', 'assets/images/city-icon-large')
        };

        if (population > 1000000 && population < 3000001){
        $("#city-size-cat").text("Metropolis");
        $("size-symbol").attr('src', 'assets/images/city-icon-very-large')
        };

        if (population > 3000000 && population < 10000001){
        $("#city-size-cat").text("Conurbation");
        $("size-symbol").attr('src', 'assets/images/city-icon-very-large')
        };

        if (population > 10000000){
        $("#city-size-cat").text("Megalopolis");
        $("size-symbol").attr('src', 'assets/images/city-icon-very-large')
        };
        //to add: conditions for displaying city size icon.
        
    });

};
// Function that creates the restaurant content

var getCityId = function(city) {
  $.ajax({
    headers: { "user-key": "c3d9aafa108e4ed6fabcca6ee5c1d954" },
    url: "https://developers.zomato.com/api/v2.1/cities?q=" + city,
    method: "GET"
  }).then(function(firstResponse) {
    var cityId = firstResponse.location_suggestions[0].id;

    //   console.log(cityId);

    $.ajax({
      headers: { "user-key": "c3d9aafa108e4ed6fabcca6ee5c1d954" },
      url:
        "https://developers.zomato.com/api/v2.1/location_details?entity_type=city&entity_id=" +
        cityId,
      method: "GET"
    }).then(function(secondResponse) {
      var bestRatedRestaurants = secondResponse.best_rated_restaurant;

      var arrayOfRestaurantObjs = bestRatedRestaurants.map(function(item) {
        var obj = {};
        var restaurant = item.restaurant;

        obj.name = restaurant.name;
        obj.address = restaurant.location.address;
        obj.imgURL = restaurant.featured_image;
        obj.rating = restaurant.user_rating.aggregate_rating;

        return obj;
      });
      // console.log(arrayOfRestaurantObjs);

      //writing resteraunt info into html slider in resteraunts section

      $(".rest1").attr("src", arrayOfRestaurantObjs[0].imgURL);
      $(".rest-cap1").html(
        "<h1>" +
          arrayOfRestaurantObjs[0].name +
          "</h1>" +
          "<p>" +
          arrayOfRestaurantObjs[0].rating +
          "/5 </p>"
      );

      $(".rest2").attr("src", arrayOfRestaurantObjs[1].imgURL);
      $(".rest-cap2").html(
        "<h1>" +
          arrayOfRestaurantObjs[1].name +
          "</h1>" +
          "<p>" +
          arrayOfRestaurantObjs[1].rating +
          "/5 </p>"
      );

      $(".rest3").attr("src", arrayOfRestaurantObjs[2].imgURL);
      $(".rest-cap3").html(
        "<h1>" +
          arrayOfRestaurantObjs[2].name +
          "</h1>" +
          "<p>" +
          arrayOfRestaurantObjs[2].rating +
          "/5 </p>"
      );

      $(".rest4").attr("src", arrayOfRestaurantObjs[3].imgURL);
      $(".rest-cap4").html(
        "<h1>" +
          arrayOfRestaurantObjs[3].name +
          "</h1>" +
          "<p>" +
          arrayOfRestaurantObjs[3].rating +
          "/5 </p>"
      );

      $(".rest5").attr("src", arrayOfRestaurantObjs[4].imgURL);
      $(".rest-cap5").html(
        "<h1>" +
          arrayOfRestaurantObjs[4].name +
          "</h1>" +
          "<p>" +
          arrayOfRestaurantObjs[4].rating +
          "/5 </p>"
      );

      // console.log(arrayOfRestaurantObjs);
    });
  });
};
// Function that calls all of our widget functions
var widgeOnLoad = function() {
  openMap();
  weatherFunc();
  realEstate();
  statePopulation(state);
  getCityId(city + " " + state);
};
// Functions that runs on page load
$(function() {
  widgeOnLoad();
});
// Functions that run on click of submit button
$(document).on("click", "#submit-button", function(event) {
  event.preventDefault();
  city = $("#city-input")
    .val()
    .trim();
  // console.log(city);
  state = $("#state-input")
    .val()
    .trim();
  widgeOnLoad();
});
// This calls our widget function when you click a trending city
$(document).on("click", ".trendCityBtn", function(event) {
  event.preventDefault();
  city = $(this).data("city");
  // console.log(city);
  state = $(this).data("state");
  // console.log(state);
  widgeOnLoad();
});
// The calls our widgets on click of favorite buttons for user not signed in/up
$(document).on("click", ".favBtnNSI", function(event) {
  event.preventDefault();
  city = $(this).data("city");
  // console.log(city);
  state = $(this).data("state");
  // console.log(state);
  widgeOnLoad();
});
// This calls our widgets on click of favorite buttons for users signed in
$(document).on("click", ".favBtnSI", function(event) {
  event.preventDefault();
  city = $(this).data("city");
  // console.log(city);
  state = $(this).data("state");
  // console.log(state);
  widgeOnLoad();
});
