$(document).ready(function($) {

  /*
    Check if the browser supports
    the Geolocation Web API
  */
  if (!navigator.geolocation) {

    console.log("Geolocation is not supported by your browser");

  } else {

    // Get user current position
    navigator.geolocation.getCurrentPosition(GeolocationSuccess, GeolocationError);

  };

  /*
    Geolocation Success
    This function handles the response
    from Get Current Position function
  */
  function GeolocationSuccess(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    CheckNearestDealer(lat, lon);

  };

  /*
    Geolocation Error
    This function handles the error
    from Get Current Position function
  */
  function GeolocationError(error) {

    // TODO: What if the user has geolocation disabled?
    console.log("Geolocation failed: " + error.message);

  };

  /*
    Check Nearest Dealer
    This function makes a request to the API endpoint
    using AJAX and handles the received data
  */
  function CheckNearestDealer(lat, lon) {

    $.ajax({
      // TODO: Change to production version
      // url: "./api.php",
      url: "./data/dealers.json",
      type: "GET",
      dataType: "json",
      success:function(garageInfo){
        displayInfo(garageInfo)
      }
      // TODO: Change to production version
      // data: {
      //   "latitude": lat,
      //   "longitude": lon
      // }
    })
    .done(function(responseData) {

      // TODO: Sky is the limit, Go Lewis!
      console.table(responseData);

    })
    .fail(function(jqXHR, textStatus, errorThrown) {

      console.log("Error! " + errorThrown);

    });
  };

  function displayInfo(garageInfo) {
    var weekdays = Object.entries(garageInfo.dealers[0].openingHours[0].weekdays);;
    var openTimes = "<br>";
    var link1 = garageInfo.dealers[0].communicationChannels.website;
    var tempLink = link1.slice(0,4);
    var tempLink2 = link1.slice(4);
    link = tempLink +"s"+tempLink2;
    console.log(link);


    for (i = 0; i < weekdays.length; i++) {
      openTimes = openTimes +
        "<dd>" +
        weekdays[i][0] + " : " +
        weekdays[i][1].status +
        "</dd>"
    };
    //console.log(garageInfo.dealers[0].communicationChannels.facebook);
    //link = garageInfo.dealers[0].communicationChannels.website
    var outputContent =
      "<div class= 'garage'>" +
      "<h1> Garage Name: " + garageInfo.dealers[0].legalName + "</h1>" +
      "<div class='left'>" +
      "<iframe src='" + link + "'" +
      "width='650' height ='400' frameborder='0' style='border:0' class='dealerWebsite' allowfullscreen></iframe>" +
      "<div class='right'>" +
      "<dl>" +
      "<dt>" + garageInfo.dealers[0].address.street + " " + garageInfo.dealers[0].address.city +
      "</dt>" +
      openTimes +
      "</dl>";
    $("#output").append(outputContent);
  }
});
