var carDisplay;
var i=0;
$(document).ready(function(){   
    $.ajax({
        type:"get",
        url:"./data/carInfo.csv",
        datatype:"text",
        success:function(carData){
            console.log(carData);
            displayInfo(carData)
        }
    })
    function displayInfo(carData){
        carDisplay = $.csv.toObjects(carData);
        i=0;
        let carDiv = $("<div>", {"class":"carDiv"});
        let carModel = $("<h1>").append(carDisplay[i].model);
        $(carDiv).append(carModel);
        $(".container").append(carDiv);    
    }    
});
function firstEntry(){
    $(".container").empty();
    console.log("success");
    console.log(carDisplay);
    i=0;
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};
function previousEntry(){
    $(".container").empty();
    console.log("success");
    console.log(carDisplay);
    i= i- 1;
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};
function nextEntry(){
    $(".container").empty();
    console.log("success");
    console.log(carDisplay);
    i=i+1;
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};
function lastEntry(){
    $(".container").empty();
    console.log("success");
    console.log(carDisplay);
    i = carDisplay.Length;
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};