/*
This page is linked to the nearby dealers page

*/
var startPos;
$(document).ready(function () {
  var geoSuccess = function (position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };
 
  var worker = new Worker('ajax_worker.js');
  worker.postMessage('type:get/url:https://api.mercedes-benz.com/dealer_tryout/v1?apikey=873fd943-4fb5-4120-b7f8-3913f4defde6');
  worker.addEventListener('type:get/url:https://api.mercedes-benz.com/dealer_tryout/v1?apikey=873fd943-4fb5-4120-b7f8-3913f4defde6', function (e) {
  data = e.data;
  console.log("worker worked!");
  console.log(data);
  });
  });

      //  $.ajax({
  //   type:'GET',
  //   url: 'https://api.mercedes-benz.com/dealer_tryout/v1/dealers?apikey=Tyt82ndiKG0AdH8TCqe001ROh7RsGOKB',
  //   success: function(rawData){
  //       console.log(rawData);
  //       console.log("success");
  //   }
  //   });
  