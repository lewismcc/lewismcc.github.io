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
    }    
});
//#region 
function firstEntry(){
    $(".container").empty();
    i=0;
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
function previousEntry(){
    if(i > 0){
    i = i-1;
    }
    $(".container").empty();
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
function nextEntry(){
    if (i < carDisplay.length -1){   
    i = i+1;
    }
    console.log(carDisplay.length);
    $(".container").empty();
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
function lastEntry(){
    $(".container").empty();
    i = carDisplay.length - 1;
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

function openForm(){
    document.getElementById("popUp").style.display ="block";
}
function closeForm(){
    document.getElementById("popUp").style.display ="none";
}