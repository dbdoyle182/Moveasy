var newPanel = $("<div class='tabs-panel is-active id='xxxx'>");
var newContainer = $("<div class='grid-container'>");
var newGrid = $("<div class='grid-x grid-padding-x small-up-1 medium-up-2'>");

var newCell1 = $("<div class='cell'>")
var card1 = $("<div class='card'>")
var cardSection1 =$("<div class='card-section'>")

var newCell2 = $("<div class='cell'>")
var card2 = $("<div class='card'>")
var cardSection2 =$("<div class='card-section'>")

var newCell3 = $("<div class='cell'>")
var card3 = $("<div class='card'>")
var cardSection3 =$("<div class='card-section'>")

var newCell4 = $("<div class='cell'>")
var card4 = $("<div class='card'>")
var cardSection4 =$("<div class='card-section'>")

var newCell5 = $("<div class='cell'>")
var card5 = $("<div class='card'>")
var cardSection5 =$("<div class='card-section'>")

var newCell6 = $("<div class='cell'>")
var card6 = $("<div class='card'>")
var cardSection6 =$("<div class='card-section'>")

//lines for card content


newGrid.append(newCell1, newCell2, newCell3, newCell4, newCell5, newCell6);
newContainer.append(newGrid);
newPanel.append(newContainer);

$(".tabs-content").append(newPanel);

//for creating new tab title
var newCity = $("<li class='tabs-title cityTitle'><a href=" + variable + ">City2</a></li>")

$("#city-tabs").prepend(newCity);

    

    