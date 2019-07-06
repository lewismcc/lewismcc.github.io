/*
This page is linked to the nearby dealers page

*/

$(document).ready(function(){
   $.ajax({
    type:'GET',
    url: 'https://api.mercedes-benz.com/dealer_tryout/v1',
    dataType: 'json',
    headers: {
        'X-Auth-Token':'873fd943-4fb5-4120-b7f8-3913f4defde6',
    },
    success: function(rawData){
        console.log(rawData);
        console.log("success")
    }
    })
})
