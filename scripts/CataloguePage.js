/*
This page ties into the car catalogue page and handle the displaying of info from the csv file and 
the navigation controls. it also handles opening and closing of the form box
 */
//this function pulls the information out of the csv file and puts all of the information into json objects
var carDisplay;
$(document).ready(function(){ 
    $.ajax({
        type:"get",
        url:"./data/carInfo.csv",
        datatype:"text",
        success:function(carData){
            displayInfo(carData)
        }
    })
    function displayInfo(carData){
        carDisplay = $.csv.toObjects(carData);
        i=0;
        postInfo(carDisplay, i) 
    }    
});
//These functions handle the navigation of the page and allow the user to go to the
//first, previous, next and last entry
//#region 
function firstEntry(){
    $(".container").empty();
    i=0;
    postInfo(carDisplay,i);      
};
function previousEntry(){
    if(i > 0){
    i = i-1;
    }
    $(".container").empty();
    postInfo(carDisplay,i)     
};
function nextEntry(){
    if (i < carDisplay.length -1){   
    i = i+1;
    }
    $(".container").empty();
    postInfo(carDisplay, i)
};
function lastEntry(){
    $(".container").empty();
    i = carDisplay.length - 1;
    postInfo(carDisplay,i);      
};
//This is the function that injects the information into the html and allows it be displayed 
function postInfo(carDisplay, i){
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append("Car Model: "+carDisplay[i].model);
    let carImg = $("<img>", {"class": "catalogueImage", "src": "./images/catalogueImages/"+carDisplay[i].image});
    let carHp = $("<h2>").append("Power Output: "+ carDisplay[i].horsepower);    
    let carSize =$("<h2>").append("Engine size: "+carDisplay[i].displacement);
    let carGearbox =$("<h2>").append("GearBox: "+carDisplay[i].transmission);
    let carDrive =$("<h2>").append("DriveTrain: "+carDisplay[i].drivetrain);
    let carYear=$("<h2>").append("Year production began: " + carDisplay[i].yearproduced)
    $(carDiv).append(carModel, carImg, carHp, carSize, carGearbox,carDrive, carYear);
    $(".container").append(carDiv);    
};
//#endregion
//These functions handle the opening and closing of the of the form box
function openForm(){
    document.getElementById("popUp").style.display ="block";
}
function closeForm(){
    document.getElementById("popUp").style.display ="none";
}