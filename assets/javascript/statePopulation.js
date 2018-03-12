

function getStatePopulation(state, response) {

  //setup empty object
  var statePopulation = {};

  //filters for the array containing the given state's population
  var stateInfoArray = response.filter(function(item) {

    //state name is the 2nd item in the array
    return item[1].toLowerCase() === state.toLowerCase();
  })[0];

  //fill the empty object with keys/values for state and population
  statePopulation.state = state;
  statePopulation.population = stateInfoArray[0];

  return statePopulation
} 
  

  //ajax call that returns an array of states and their populations
$.ajax({
  url: 'https://api.census.gov/data/2016/pep/population?get=POP,GEONAME&for=state:*&DATE=9&key=8d04428cd17194c6f24d08b4e7bbb0dd9b0667e3',
  method: 'GET'
}).then(function(response) {
  
  
  // Test Example

  //return an object that has a state and population property
  var california = getStatePopulation('california', response);

  console.log(california);
  console.log(california.state);
  console.log(california.population);


});



