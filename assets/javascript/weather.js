var weatherFunc = function () {
    var city = $("#city-input").val().trim();
    var state = $("#state-input").val().trim();
    // var city = "Rochester";
    // var state = "NY";
    $("#weather-widget").empty();
    var apiKey = "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "," + state + "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var latitude = response.results[0].geometry.location.lat
        var longitude = response.results[0].geometry.location.lng
        var apiKey = "&appid=70b17dee0232f4d7a21df681d272d59b&units=imperial";
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + apiKey;
        var sumTemp = 0;
        var sumHum = 0;
        var sumCloud = 0;
        var week = [{
            date: "",
            day: "",
            count: 0,
            humidity: 0,
            temp: 0,
            cloud: 0,
            present: false,
            snow: 0,
            rain: 0
        },{
            date: "",
            day: "",
            count: 0,
            humidity: 0,
            temp: 0, 
            cloud: 0,
            present: false,
            snow: 0,
            rain: 0
        },{
            date: "",
            day: "",
            count: 0,
            humidity: 0,
            temp: 0,
            cloud: 0,
            present: false,
            snow: 0,
            rain: 0
        },{
            date: "",
            day: "",
            count: 0,
            humidity: 0,
            temp: 0,
            cloud: 0, 
            present: false,
            snow: 0,
            rain: 0
        },{
            date: "",
            day: "",
            count: 0,
            humidity: 0, 
            temp: 0,
            cloud: 0,
            present: false,
            snow: 0,
            rain: 0
        },{
            date: "",
            day: "",
            count: 0,
            humidity: 0,
            temp: 0,
            cloud: 0,
            present: false,
            snow: 0,
            rain: 0
        },{
            date: "",
            day: "",
            count: 0,
            humidity: 0,
            temp: 0,
            cloud: 0,
            present: false,
            snow: 0,
            rain: 0
        }];
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
        for (var i = 0; i < (response.list).length; i++) {
            var unixTime = (response.list[i]).dt
            var newDate = moment(unixTime, "X");
    
            var convertedDOW = moment(newDate).format("ddd");

            var convertedDate = moment(newDate).format("MMM Do");
            var fullDate = convertedDOW + " " + convertedDate;
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
            };
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
            };
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
            };
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
            };
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
            };
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
            };
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
            

            
            
        
            };
            for (var j = 0; j < week.length; j++){
                var dailyTemp = week[j].temp / week[j].count;
                var cloudAvg = week[j].cloud / week[j].count;
                var rainAvg = week[j].rain / week[j].count;
                var snowAvg = week[j].snow / week[j].count;
                if (week[j].count === 8) {
                    // console.log(week[j].date);
                    // console.log(Math.floor(dailyTemp));
                    var dailyWeather = $("<div>");
                    dailyWeather.css({"float":"left", "width":"100px"});
                    var dayName = $("<p>");
                    dayName.css({"text-align":"center"});
                    var dayMonth = $("<p>")
                    dayMonth.css({"text-align":"center"})
                    var tempDay = $("<h4>");
                    tempDay.css({"text-align":"center"})
                    var skyType = $("<img>");
                    skyType.css({"text-align":"center"})
                    dayName.text(week[j].day);
                    dayMonth.text(week[j].date);
                    tempDay.text(Math.floor(dailyTemp) + "°");
                    if (cloudAvg > 80 && snowAvg < 1 && rainAvg < 1) {
                        // console.log("Very cloudy")
                        // console.log("----------")
                        skyType.attr("src", "./assets/images/003-cloudy.png")
                    }; 
                    if (cloudAvg > 60 && snowAvg < 1 && rainAvg < 1) {
                        // console.log("Moderately cloudy")
                        // console.log("----------")
                        skyType.attr("src", "./assets/images/004-cloud-1.png")
                    };
                    if (cloudAvg > 20 && snowAvg < 1 && rainAvg < 1) {
                        // console.log("Scattered Clouds")
                        // console.log("----------")
                        skyType.attr("src", "./assets/images/006-cloud.png")
                    };
                    if (cloudAvg < 20 && snowAvg < 1 && rainAvg < 1) {
                        // console.log("Clear skies")
                        // console.log("----------")
                        skyType.attr("src", "./assets/images/007-sun.png")
                    };
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
                };

            };

        });
        var apiKey = "&appid=70b17dee0232f4d7a21df681d272d59b&units=imperial";
        var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + apiKey;
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function(response){
            var imgLink = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
            var todayDate = moment().format("ddd")
            var todayMonth = moment().format("MMM Do")
            var todayTemp = Math.floor(response.main.temp)
            var firstLet = function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            };
            var todayFore = firstLet(response.weather[0].description);
            var currentDay = $("<div>");
            currentDay.css({"width":"130px","float":"left","text-align":"center"})
            var currentDate = $("<h3>");
            currentDate.text(todayDate);
            var currentMonth = $("<h3>");
            currentMonth.text(todayMonth);
            var currentImg = $("<img>");
            currentImg.attr("src", imgLink)
            var currentTemp = $("<h4>");
            currentTemp.text(todayTemp);
            var currentFore = $("<p>");
            currentFore.text(todayFore);
            $("#weather-widget").prepend(currentDay);
            currentDay.append(currentDate);
            currentDay.append(currentMonth);
            currentDay.append(currentImg);
            currentDay.append(currentTemp);
            currentDay.append(currentFore);
        })
    });
};
$(function(){

})
$(document).on("click", "#submit-button", weatherFunc);