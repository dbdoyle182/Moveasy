
var cityId;


function getCityId(city) {
  $.ajax({
    headers: {'user-key':'c3d9aafa108e4ed6fabcca6ee5c1d954'},
    url: 'https://developers.zomato.com/api/v2.1/cities?q=' + city,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
  });
}

getCityId('charlotte nc');