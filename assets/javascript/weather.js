var weatherFunc = function () {
    // var city = $("#city-value").val().trim();
    // var state = $("#state-value").val().trim();
    var city = "Charlotte";
    var state = "NC";
    var apiKey = "&appid=70b17dee0232f4d7a21df681d272d59b";
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",US" + apiKey + "&units=imperial";
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
        present: false
    },{
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0, 
        cloud: 0,
        present: false
    },{
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false
    },{
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0, 
        present: false
    },{
        date: "",
        day: "",
        count: 0,
        humidity: 0, 
        temp: 0,
        cloud: 0,
        present: false
    },{
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false
    },{
        date: "",
        day: "",
        count: 0,
        humidity: 0,
        temp: 0,
        cloud: 0,
        present: false
    }];
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    for (var i = 0; i < (response.list).length; i++) {
        console.log((response.list).length);
        // console.log (response.list[i].main.temp);
        // sumTemp += response.list[i].main.temp;
        // console.log(sumTemp);
        // sumHum += response.list[i].main.humidity;
        // sumCloud += response.list[i].clouds.all;
        // var avgDivide = (response.list).length;
        // // Average Temperature over the next five days
        // var avgTemp = sumTemp / avgDivide;
        // console.log("The average tempature over the next five days is " + Math.floor(avgTemp) + " degrees");
        // // Average humidity percentage over the next five days
        // var avgHum = sumHum / avgDivide;
        // console.log( "The average percentage of humidity over the next five days is " + Math.floor(avgHum) + " %");
        // // Average cloud coverage over the next five days
        // var avgCloud = sumCloud / avgDivide;
        var unixTime = (response.list[i]).dt
        var newDate = moment(unixTime, "X");
 
        var convertedDOW = moment(newDate).format("ddd");

        var convertedDate = moment(newDate).format("MMM Do");
        var fullDate = convertedDOW + " " + convertedDate;
        // console.log(fullDate);
        // console.log("Temperature: " + response.list[i].main.temp);
        // console.log("Humidity: " + response.list[i].main.humidity + "%");
        // console.log("Cloud Cover: " + response.list[i].clouds.all + "%");
        // console.log("----------------");
        if (convertedDOW === "Mon") {
            week[0].count++;
            week[0].temp += response.list[i].main.temp;
            week[0].cloud += response.list[i].clouds.all;
            week[0].humidity += response.list[i].main.humidity;
            week[0].present = true;
            week[0].day = convertedDOW;
            week[0].date = convertedDate;
        };
        if (convertedDOW === "Tue") {
            week[1].count++;
            week[1].temp += response.list[i].main.temp;
            week[1].cloud += response.list[i].clouds.all;
            week[1].humidity += response.list[i].main.humidity;
            week[1].present = true;
            week[1].day = convertedDOW;
            week[1].date = convertedDate;
        };
        if (convertedDOW === "Wed") {
            week[2].count++;
            week[2].temp += response.list[i].main.temp;
            week[2].cloud += response.list[i].clouds.all;
            week[2].humidity += response.list[i].main.humidity;
            week[2].present = true;
            week[2].day = convertedDOW;
            week[2].date = convertedDate;
        };
        if (convertedDOW === "Thu") { 
            week[3].count++;
            week[3].temp += response.list[i].main.temp;
            week[3].cloud += response.list[i].clouds.all;
            week[3].humidity += response.list[i].main.humidity;
            week[3].present = true;
            week[3].day = convertedDOW;
            week[3].date = convertedDate;
        };
        if (convertedDOW === "Fri") {
            week[4].count++;
            week[4].temp += response.list[i].main.temp;
            week[4].cloud += response.list[i].clouds.all;
            week[4].humidity += response.list[i].main.humidity;
            week[4].present = true;
            week[4].day = convertedDOW;
            week[4].date = convertedDate;
        };
        if (convertedDOW === "Sat") {
            week[5].count++;
            week[5].temp += response.list[i].main.temp;
            week[5].cloud += response.list[i].clouds.all;
            week[5].humidity += response.list[i].main.humidity;
            week[5].present = true;
            week[5].day = convertedDOW;
            week[5].date = convertedDate;
        };
        if (convertedDOW === "Sun") {
            week[6].count++;
            week[6].temp += response.list[i].main.temp;
            week[6].cloud += response.list[i].clouds.all;
            week[6].humidity += response.list[i].main.humidity;
            week[6].present = true;
            week[6].day = convertedDOW;
            week[6].date = convertedDate;
        }
        

        
        
    
        };
        for (var j = 0; j < week.length; j++){
            var dailyTemp = week[j].temp / week[j].count;
            var cloudAvg = week[j].cloud / week[j].count;
            if (week[j].present) {
                console.log(week[j].date);
                console.log(Math.floor(dailyTemp));
                var dailyWeather = $("<div>");
                dailyWeather.css({"float":"left", "width":"100px"});
                var dayName = $("<p>");
                dayName.css({"padding-left":"15px"});
                var dayMonth = $("<p>")
                dayMonth.css({"padding-left":"5px"});
                var tempDay = $("<h4>");
                tempDay.css({"margin":"0 25px"})
                var skyType = $("<i>");
                dayName.text(week[j].day);
                dayMonth.text(week[j].date);
                tempDay.text(Math.floor(dailyTemp));
                if (cloudAvg > 80) {
                    console.log("Very cloudy")
                    console.log("----------")
                } else if (cloudAvg > 60) {
                    console.log("Moderately cloudy")
                    console.log("----------")
                } else if (cloudAvg > 40) {
                    console.log("Mildly cloudy")
                    console.log("----------")
                } else if (cloudAvg > 20) {
                    console.log("Scattered Clouds")
                    console.log("----------")
                } else {
                    console.log("Clear skies")
                    console.log("----------")
                };
                $("#weather-widget").append(dailyWeather);
                dailyWeather.append(dayName);
                dailyWeather.append(dayMonth);
                dailyWeather.append(skyType);
                dailyWeather.append(tempDay);
            };

        };

    });
};
$(function(){
    weatherFunc();
})