/*
This page ties into the car catalogue page and handle the displaying of info from the csv file and 
the navigation controls. it also handles opening and closing of the form box
This function pulls the information out of the csv file and puts all of the information into json objects
 */
var carDisplay;
$(document).ready(function() { 
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
    $(".car-catalogue--output").empty();
    i=0;
    postInfo(carDisplay,i);      
};
function previousEntry(){
    if(i > 0){
    i = i-1;
    }
    $(".car-catalogue--output").empty();
    postInfo(carDisplay,i)     
};
function nextEntry(){
    if (i < carDisplay.length -1){   
    i = i+1;
    }
    $(".car-catalogue--output").empty();
    postInfo(carDisplay, i)
};
function lastEntry(){
    $(".car-catalogue--output").empty();
    i = carDisplay.length - 1;
    postInfo(carDisplay,i);      
};
//#endregion
/* 
    This is the function that injects the information into the html and allows it be displayed 
    It creates one variable and outputs it together as one block
    which is re generated on every click of the navigation buttons
*/
function postInfo(carDisplay, i) {

    var outputContent =
    "<div class='car'>"
        + "<h1>Car Model: " + carDisplay[i].model + "</h1>"
        + "<div class='left'>"
            + "<img src='./images/catalogueImages/" + carDisplay[i].image + "' alt='" + carDisplay[i].model + "'>"
        + "</div>"
        + "<div class='right'>"
            + "<dl>"
                + "<dt>Power Output</dt>"
                + "<dd>" + carDisplay[i].horsepower + "</dd>"
                + "<dt>Engine Size</dt>"
                + "<dd>" + carDisplay[i].displacement + "</dd>"
                + "<dt>Gearbox</dt>"
                + "<dd>" + carDisplay[i].transmission + "</dd>"
                + "<dt>Drivetrain</dt>"
                + "<dd>" + carDisplay[i].drivetrain + "</dd>"
                + "<dt>Year production began</dt>"
                + "<dd>" + carDisplay[i].yearproduced + "</dd>"
            + "</dl>"
        + "</div>"
        + "<div class='clear'></div>"
    + "</div>";

    $(".car-catalogue--output").append(outputContent);

};


//These functions handle the opening and closing of the of the form box
function openForm() {

    document.getElementById("pop-up").style.display = "block";

}

function closeForm() {

    document.getElementById("pop-up").style.display ="none";

}

