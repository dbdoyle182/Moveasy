// var apiKey = "d0426f07120cbbf43b12a8acab76a9e9"

// var educationFunc = function () {
//     // var city = $("#city-value").val().trim();
//     // var state = $("#state-value").val().trim();
//     var city = "Charlotte";
//     var state = "NC";
//     var queryURL = "https://api.greatschools.org/cities/" + state + "/" + city + "?key=d0426f07120cbbf43b12a8acab76a9e9"
//     var queryURL2 = "https://api.greatschools.org/schools/" + state + "/" + city + "?key=d0426f07120cbbf43b12a8acab76a9e9&limit=5"
//     // $.ajax({
//     //     url: queryURL,
//     //     method: "GET"
//     // }).then(function(response){
//     //     console.log(queryURL);
//     // });
//     // $.ajax({
//     //     url: queryURL2,
//     //     method: "GET"
//     // }).then(function() {
//     //     console.log(queryURL2);
//     // });
//     function loadDoc() {
//         function createCORSRequest(method, queryURL) {
//             var xhr = new XMLHttpRequest();
//             if ("withCredentials" in xhr) {
          
//               // Check if the XMLHttpRequest object has a "withCredentials" property.
//               // "withCredentials" only exists on XMLHTTPRequest2 objects.
//               xhr.open(method, queryURL, true);
          
//             } else if (typeof XDomainRequest != "undefined") {
          
//               // Otherwise, check if XDomainRequest.
//               // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
//               xhr = new XDomainRequest();
//               xhr.open(method, queryURL);
          
//             } else {
          
//               // Otherwise, CORS is not supported by the browser.
//               xhr = null;
          
//             }
//             return xhr;
//           }
          
//           var xhr = createCORSRequest('GET', queryURL);
//           if (!xhr) {
//             throw new Error('CORS not supported');
//           }
          
//         var xhr = createCORSRequest('GET', queryURL);
//         xhr.send();
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4 && this.status == 200) {
//           myFunction(this);
//           }
//         };
//         xhttp.open("GET", queryURL, true);
//         xhttp.send();
//       }
//       function myFunction(xml) {
//         var i;
//         var xmlDoc = xml.responseXML;
//         var x = xmlDoc.getElementsByTagName("city");
//         console.log(x.getElementsByTagName("rating"));
//       }
//     loadDoc();    
// }

// $(function(){
//     educationFunc();
// })