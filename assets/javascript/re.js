var realEstate = function () {
    // Grabs city and state value from the search
    var firstLet = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    var city = firstLet($("#city-input").val().trim());
    console.log(city);
    var state = $("#state-input").val().trim();
    function abbrState(input, to){
    
        var states = [
            ['Arizona', 'AZ'],
            ['Alabama', 'AL'],
            ['Alaska', 'AK'],
            ['Arizona', 'AZ'],
            ['Arkansas', 'AR'],
            ['California', 'CA'],
            ['Colorado', 'CO'],
            ['Connecticut', 'CT'],
            ['Delaware', 'DE'],
            ['Florida', 'FL'],
            ['Georgia', 'GA'],
            ['Hawaii', 'HI'],
            ['Idaho', 'ID'],
            ['Illinois', 'IL'],
            ['Indiana', 'IN'],
            ['Iowa', 'IA'],
            ['Kansas', 'KS'],
            ['Kentucky', 'KY'],
            ['Kentucky', 'KY'],
            ['Louisiana', 'LA'],
            ['Maine', 'ME'],
            ['Maryland', 'MD'],
            ['Massachusetts', 'MA'],
            ['Michigan', 'MI'],
            ['Minnesota', 'MN'],
            ['Mississippi', 'MS'],
            ['Missouri', 'MO'],
            ['Montana', 'MT'],
            ['Nebraska', 'NE'],
            ['Nevada', 'NV'],
            ['New Hampshire', 'NH'],
            ['New Jersey', 'NJ'],
            ['New Mexico', 'NM'],
            ['New York', 'NY'],
            ['North Carolina', 'NC'],
            ['North Dakota', 'ND'],
            ['Ohio', 'OH'],
            ['Oklahoma', 'OK'],
            ['Oregon', 'OR'],
            ['Pennsylvania', 'PA'],
            ['Rhode Island', 'RI'],
            ['South Carolina', 'SC'],
            ['South Dakota', 'SD'],
            ['Tennessee', 'TN'],
            ['Texas', 'TX'],
            ['Utah', 'UT'],
            ['Vermont', 'VT'],
            ['Virginia', 'VA'],
            ['Washington', 'WA'],
            ['West Virginia', 'WV'],
            ['Wisconsin', 'WI'],
            ['Wyoming', 'WY'],
        ];
    
        if (to == 'abbr'){
            input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            for(i = 0; i < states.length; i++){
                if(states[i][0] == input){
                    return(states[i][1]);
                };
            };    
        }; 
    };
    state = abbrState(state, "abbr");
    // API url
    var queryURL = "https://staging-api.propmix.io/mlslite/idx/v1/GetListingsByGeo?access_token=c86d04057f3ea89f4e187281244927f37c62e13b80dd6f3a9462736409a7fe30&EffectiveDate=2018-03-13&PropertyType=Residential&City=" + city + "&State=" + state + "&MonthsBack=6&Rental=1&imagesON=1"
    // AJAX call to the real estate api
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response) {
    // For loops that goes through each listing to gather information
        for (var i = 0; i < (response.Listings).length; i++) {
            var house = response.Listings[i];
            var houseDiv = $("<div>");
            houseDiv.addClass("house");
            // console.log(house.ImageURLs[0]);
            var houseImg = $("<img src=" + house.ImageURLs[0] + ">")
            houseDiv.append(houseImg);
            var houseInfo;
            // console.log(house.Address);
            // console.log("For: " + house.ListingType);
            if (house.ListingType === "Sale") {
                // console.log(house.ListPrice + "$");
                houseInfo = $("<p>" + house.Address + "<br> For: " + house.ListingType + "<br>" + house.ListPrice + "$ <br>" + "Listed by: " + house.ListOfficeName + "</p>")
            } else if (house.ListingType === "Rent") {
                // console.log(house.ListPrice + "$ per month");
                houseInfo = $("<p>" + house.Address + "<br> For: " + house.ListingType + "<br>" + house.ListPrice + "$ per month <br>" + "Listed by: " + house.ListOfficeName + "</p>")
            } else {
                houseInfo = $("<p>" + house.Address + "<br>" + house.ListPrice + "$<br>" + "Listed by: " + house.ListOfficeName + "</p>")
            }
            // console.log("Listed by: " + house.ListOfficeName);
            (houseDiv).append(houseInfo);
            $("#realEstateDiv").append(houseDiv);

            // console.log("------------")
        }


    });


};

$(document).on("click", "#submit-button", realEstate)

