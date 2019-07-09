/*
This page is linked to the look to the past page
These functions allow the slide show to move to the next and previous slide through user interaction 
with arrow buttons
it displays the first image in the webpage as default
*/
$(document).ready(function(){
    
    
    $.ajax({
      type: "get",
      url: "./data/gullwing.csv",
      datatype:"text",
      success:function(rawImages){
        outPutImages(rawImages)
      }
    })
    function outPutImages(rawImages){
      carImages = $.csv.toObjects(rawImages)
      carouselImages(carImages);
    }

    showSlides(slideIndex);  
    });
    function carouselImages(carImages){
      console.log(carImages);
      for(i =0 ; i < carImages.length; i++){
        var outPutContent = 
          "<div class='myslides'>"+
          "<img class='imageBoxGull' src='./images/gullwingImages/"+carImages[i].image +">"+
          "</div>";
          console.log(outPutContent);
          $(".carousel").append(outPutContent);
      }
    }



    //#region 
    var slideIndex = 1;
    function plusSlides(n) { 
        showSlides(slideIndex += n);
        console.log("plus slide")
      }
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      function showSlides(n) {
        var i;
        var slides= document.getElementsByClassName("mySlides");
        if (n > slides.length){
            slideIndex = 1
        }    
        if (n < 1){
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
        //#endregion
      };
      
  