



function getCityId(city) {
  $.ajax({
    headers: {'user-key':'c3d9aafa108e4ed6fabcca6ee5c1d954'},
    url: 'https://developers.zomato.com/api/v2.1/cities?q=' + city,
    method: 'GET'
  }).then(function(firstResponse) {
    var cityId = firstResponse.location_suggestions[0].id;

    console.log(cityId);

    $.ajax({
      headers: {'user-key':'c3d9aafa108e4ed6fabcca6ee5c1d954'},
      url: 'https://developers.zomato.com/api/v2.1/location_details?entity_type=city&entity_id=' + cityId,
      method: 'GET'
    }).then(function(secondResponse) {
      var bestRatedRestaurants = secondResponse.best_rated_restaurant;

      var arrayOfRestaurantObjs = bestRatedRestaurants.map(function(item) {
        console.log(item)
        var obj = {};
        var restaurant = item.restaurant;

        obj.name = restaurant.name;
        obj.address = restaurant.location.address;
        obj.imgURL = restaurant.featured_image;

        return obj;
      });

      console.log(arrayOfRestaurantObjs);
    });
  });
}

getCityId('charlotte nc');