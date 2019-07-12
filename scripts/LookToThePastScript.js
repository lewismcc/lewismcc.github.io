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
      window.currentSlideIndex = 0;
      window.carImages = $.csv.toObjects(rawImages)
      carouselImages();
    }  
    });
    function carouselImages(){

      let content = "<img class='display-img' src='./images/gullwingImages/"+carImages[currentSlideIndex].image +"'>";

      $("#carousel-image").html(content);

    }
    $("#previous-slide").click(function(){
      currentSlideIndex--;
      if(currentSlideIndex < 0){
        currentSlideIndex = carImages.length -1;
      }
    
      carouselImages();
    })
    $("#next-slide").click(function(){
      currentSlideIndex++;
      if(currentSlideIndex == carImages.length ){
        currentSlideIndex =0;
      }
      else if(currentSlideIndex > carImages.length -1){
        currentSlideIndex--;
      }
      carouselImages();
    })



    //#region 
    
  