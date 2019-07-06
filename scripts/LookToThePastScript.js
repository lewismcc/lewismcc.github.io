/*
This page is linked to the look to the past page
These functions allow the slide show to move to the next and previous slide through user interaction 
with arrow buttons
it displays the first image in the webpage as default
*/

$(document).ready(function(){
    showSlides(slideIndex);    
    });
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
      };
      //#endregion
  