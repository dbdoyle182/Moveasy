var openMap = function() {
    var city = "Rochester"
    var state = "NY"
    var apiKey = "AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY"
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "," + state + "&key=AIzaSyBQA5YHnpwER_Ix0gNhdsp3onqAh8gTWjY"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var latitude = response.results[0].geometry.location.lat
        console.log(latitude);
        var longitude = response.results[0].geometry.location.lng
        console.log(longitude)
    
    
        function initMap() {

            var uluru = {lat: latitude, lng: longitude};
            var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: uluru
            });

            var marker = new google.maps.Marker({
            position: uluru,
            map: map
            });
        };

    initMap();
    });
};
$(function(){
    openMap();
})
$(document).on("click", "submit-button", openMap)