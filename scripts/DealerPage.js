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
        //console.log(garageInfo)
    }
   
    
      // TODO: Change to production version
      // data: {
      //   "latitude": lat,
      //   "longitude": lon
      // }
    })
     
    .done(function(responseData) {

      // TODO: Sky is the limit, Go Lewis!
     // console.table(responseData);

    })
    .fail(function(jqXHR, textStatus, errorThrown) {

      console.log("Error! " + errorThrown);

    });
  };
  function displayInfo(garageInfo) {
    var weekdays = Object.entries(garageInfo.dealers[0].openingHours[0].weekdays); ;
    var openTimes= "<br>";
    for(i=0; i < weekdays.length;i++){
      openTimes = openTimes
      +"<dd>"
      +weekdays[i][0] +" : "
      +weekdays[i][1].status
      +"</dd>"
    };
    var outputContent =
      "<div class= 'garage'>"
      +"<h1> Garage Name: "+ garageInfo.dealers[0].legalName+"</h1>"
      +"<div class='left'>" 
      + "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.091992879847!2d-6.808132783749769!3d53.912341180101585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4860acdfb4bb43a3%3A0x672ff846876b9ae7!2sGilmores+Kingscourt+Limited!5e0!3m2!1sen!2sie!4v1563381136982!5m2!1sen!2sie'"+ 
      "width='400' height ='300' frameborder='0' style='border:0' allowfullscreen></iframe>"
      +"<div class='right'>"
      +"<dl>"
      +"<dt>"+ garageInfo.dealers[0].address.street
      +"</dt>"
      +openTimes
      +"</dl>";
    $("#output").append(outputContent);

  }

  });