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
        let carModel = $("<h1>").append(carDisplay[i].model);
        let carImg = $("<img>", {"class": "catalogueImage", "src": "./images/"+carDisplay[i].model});
        let carHp = $("<h2>").append(carDisplay[i].horsePower);    
        let carSize =$("<h2>").
        $(carDiv).append(carModel);
        $(".container").append(carDiv);    
    }    
});
function firstEntry(){
    $(".container").empty();
    i=0;
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};
function previousEntry(){
    if(i > 0){
    i = i-1;
    }
    $(".container").empty();
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};
function nextEntry(){
    if (i < carDisplay.length -1){   
    i = i+1;
    }
    console.log(carDisplay.length);
    $(".container").empty();
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);
    $(carDiv).append(carModel);
    $(".container").append(carDiv);        
};
function lastEntry(){
    $(".container").empty();
    i = carDisplay.length - 1;
    let carDiv = $("<div>", {"class":"carDiv"});
    let carModel = $("<h1>").append(carDisplay[i].model);

    $(carDiv).append(carModel);
    $(".container").append(carDiv);
        
};

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides= document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  console.log(slideIndex);
  console.log(slides);

  slides[slideIndex-1].style.display = "block";  
}

  