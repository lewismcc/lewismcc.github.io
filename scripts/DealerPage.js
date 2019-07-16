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
        displayInfo(garageInfo);
        console.log(garageInfo)
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
  function displayInfo(garageInfo){
    console.log(garageInfo);
    
}  
});
