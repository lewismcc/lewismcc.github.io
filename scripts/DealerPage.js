/*
This page is linked to the nearby dealers page

*/

$(document).ready(function(){
   $.ajax({
    type:'GET',
    url: 'https://api.mercedes-benz.com/dealer/v1/dealers?',
    dataType: 'json',
    headers: {
        'X-Auth-Token':'Tyt82ndiKG0AdH8TCqe001ROh7RsGOKB'
    },
    success: function(rawData){
        console.log(rawData);
        console.log("success")
    }
    })
})
