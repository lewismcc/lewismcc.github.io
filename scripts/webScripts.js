var carDisplay;
$(document).ready(function(){ 
    showSlides(slideIndex);  

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
//#region 
var slideIndex = 1;

function plusSlides(n) { 
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides= document.getElementsByClassName("mySlides");
  console.log(slides);
  

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  console.log("slide index: "+slideIndex);
  slides[slideIndex-1].style.display = "block";  
}
//#endregion
  