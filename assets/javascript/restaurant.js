



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

      //writing resteraunt info into html slider in resteraunts section
      
      $(".rest1").attr('src' , arrayOfResterauntObjs[0].imgURL);
      $(".rest-cap1").html("<h1>"+ arrayOfResterauntObjs[0].name + "</h1>");

      $(".rest2").attr('src' , arrayOfResterauntObjs[1].imgURL);
      $(".rest-cap2").html("<h1>"+ arrayOfResterauntObjs[1].name + "</h1>");

      $(".rest3").attr('src' , arrayOfResterauntObjs[2].imgURL);
      $(".rest-cap3").html("<h1>"+ arrayOfResterauntObjs[2].name + "</h1>");

      $(".rest4").attr('src' , arrayOfResterauntObjs[3].imgURL);
      $(".rest-cap4").html("<h1>"+ arrayOfResterauntObjs[3].name + "</h1>");

      $(".rest5").attr('src' , arrayOfResterauntObjs[4].imgURL);
      $(".rest-cap5").html("<h1>"+ arrayOfResterauntObjs[4].name + "</h1>");

      console.log(arrayOfRestaurantObjs);
    });
  });



}



getCityId('charlotte nc');