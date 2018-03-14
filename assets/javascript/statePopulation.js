var  statePopulation = function(state) {

  //ajax call that returns an array of states and their populations
  $.ajax({
    url: 'https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=state:*&DATE=9&key=8d04428cd17194c6f24d08b4e7bbb0dd9b0667e3',
    method: 'GET'
  }).then(function(response) {

    var stateInfoArray = response.filter(function(item) {

      //state name is the 2nd item in the array
      return item[1].toLowerCase() === state.toLowerCase();
    })[0];

    var population = stateInfoArray[0]; 
    console.log(population);

  });
}

statePopulation('nebraska');
