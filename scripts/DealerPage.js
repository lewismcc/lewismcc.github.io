/*
This page is linked to the nearby dealers page

*/
var startPos;
$(document).ready(function(){
    
   $.ajax({
    type:'GET',
    url: 'https://api.mercedes-benz.com/dealer_tryout/v1/dealers?apikey=Tyt82ndiKG0AdH8TCqe001ROh7RsGOKB',
    success: function(rawData){
        console.log(rawData);
        console.log("success");
    }
    })
    startPos;
    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById('startLat').innerHTML = startPos.coords.latitude;
      document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  
    
})
