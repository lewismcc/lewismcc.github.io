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

  }

  /*
    Geolocation Success
    This function handles the response
    from Get Current Position function
  */
  function GeolocationSuccess(position) {

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    console.log("Lat: " + lat + "Long: " + lon);

  }

  /*
    Geolocation Error
    This function handles the error
    from Get Current Position function
  */
  function GeolocationError(error) {

    // TODO: What if the user has geolocation disabled?
    console.log("Geolocation failed: " + error.message);

  }

	// TODO: Make jQuery AJAX request to the api.php file
	// TODO: Feed the jQuery AJAX request with GPS coordinates
	
});
